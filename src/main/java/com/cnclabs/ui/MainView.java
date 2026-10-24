package com.cnclabs.ui;
import com.cnclabs.entity.ConversionJob;
import com.cnclabs.repo.ConversionJobRepository;
import com.cnclabs.service.CimatronConversionService;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.Route;
import org.springframework.beans.factory.annotation.Value;
import java.io.InputStream;
import java.nio.file.*;
@Route("")
public class MainView extends VerticalLayout {
    private final CimatronConversionService conversionService;
    private final ConversionJobRepository repo;
    @Value("${cnc.upload-dir}") private String uploadDir;
    public MainView(CimatronConversionService conversionService, ConversionJobRepository repo){
        this.conversionService=conversionService; this.repo=repo;
        setSizeFull(); getStyle().set("background","#0a0a0b").set("color","white").set("padding","24px");
        H1 title = new H1("CNC-LABS // IMAGE > CIMATRON CAD");
        title.getStyle().set("font-family","monospace").set("color","#d4ff00").set("font-size","22px");
        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer); upload.setAcceptedFileTypes("image/*"); upload.setMaxFiles(1);
        ComboBox<String> mode = new ComboBox<>("Mode"); mode.setItems("RELIEF","VECTOR","LITHOPHANE"); mode.setValue("RELIEF");
        com.vaadin.flow.component.textfield.NumberField height = new com.vaadin.flow.component.textfield.NumberField("Height mm"); height.setValue(10.0); height.setMin(1.0); height.setMax(50.0);
        com.vaadin.flow.component.textfield.NumberField tol = new com.vaadin.flow.component.textfield.NumberField("Tolerance"); tol.setValue(0.5); tol.setMin(0.01); tol.setMax(1.0); tol.setStep(0.05);
        ProgressBar progress = new ProgressBar(); progress.setIndeterminate(true); progress.setVisible(false);
        Div log = new Div(); log.getStyle().set("font-family","monospace").set("background","#151515").set("padding","12px").set("height","220px").set("overflow","auto").set("border","1px solid #333").set("width","100%");
        log.add(new Div(new Text(">> CNC-Labs Cimatron Engine ready. Upload a photo.")));
        VerticalLayout result = new VerticalLayout(); result.setVisible(false);
        upload.addSucceededListener(e -> {
            try{
                Path dir = Path.of(uploadDir); Files.createDirectories(dir);
                Path imgPath = dir.resolve(e.getFileName());
                try(InputStream is = buffer.getInputStream()){ Files.copy(is, imgPath, StandardCopyOption.REPLACE_EXISTING); }
                log.add(new Div(new Text(">> Uploaded: "+e.getFileName()))); progress.setVisible(true);
                ConversionJob job = new ConversionJob();
                job.setOriginalFilename(e.getFileName()); job.setStoredImagePath(imgPath.toString());
                job.setMode(mode.getValue()); job.setHeightMm(height.getValue()); job.setTolerance(tol.getValue()); job.setStatus("PROCESSING");
                repo.save(job);
                var conv = conversionService.convert(imgPath, mode.getValue(), height.getValue(), tol.getValue());
                job.setOutputDxfPath(conv.dxf().toString()); job.setOutputStepPath(conv.step().toString()); job.setStatus("DONE"); repo.save(job);
                progress.setVisible(false);
                log.add(new Div(new Text(">> DXF: "+conv.dxf()))); log.add(new Div(new Text(">> STL: "+conv.stl()))); log.add(new Div(new Text(">> STEP: "+conv.step())));
                log.add(new Div(new Text(">> Import in Cimatron: File > Import > DXF/STEP/STL")));
                result.removeAll();
                Button b1 = new Button("Download DXF"); b1.addClickListener(ev -> getUI().ifPresent(ui -> ui.getPage().open("/download?file="+conv.dxf())));
                Button b2 = new Button("Download STL (Relief)"); b2.addClickListener(ev -> getUI().ifPresent(ui -> ui.getPage().open("/download?file="+conv.stl())));
                Button b3 = new Button("Download STEP"); b3.addClickListener(ev -> getUI().ifPresent(ui -> ui.getPage().open("/download?file="+conv.step())));
                result.add(new HorizontalLayout(b1,b2,b3)); result.setVisible(true);
            }catch(Exception ex){ log.add(new Div(new Text("!! ERROR: "+ex.getMessage()))); progress.setVisible(false); }
        });
        HorizontalLayout controls = new HorizontalLayout(mode, height, tol); controls.setAlignItems(Alignment.BASELINE);
        add(title, new Hr(), upload, controls, progress, log, result);
    }
}
