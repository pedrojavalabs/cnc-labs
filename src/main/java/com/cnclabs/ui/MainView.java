package com.cnclabs.ui;

import com.cnclabs.service.CadConversionService;
import com.vaadin.flow.component.Text;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.progressbar.ProgressBar;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.*;
import java.nio.file.*;

@Route("")
public class MainView extends VerticalLayout {

    private final CadConversionService service;

    public MainView(@Autowired CadConversionService service) {
        this.service = service;
        setPadding(true);
        setSpacing(true);

        H1 title = new H1("CNC LABS // Cimatron");
        title.getStyle().set("font-family","monospace").set("color","#d4ff00");

        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer);
        upload.setAcceptedFileTypes("image/*");

        Button convertBtn = new Button("CONVERT");
        ProgressBar progress = new ProgressBar();
        progress.setVisible(false);

        // LOG - half height, simple
        Div log = new Div();
        log.getStyle().set("font-family","monospace").set("background","#151515")
                .set("padding","12px").set("height","110px").set("overflow","auto")
                .set("border","1px solid #333").set("width","100%")
                .set("border-radius","8px").set("color","#888").set("font-size","12px");
        log.add(new Div(new Text(">> CNC-Labs ready. Upload a photo.")));

        VerticalLayout result = new VerticalLayout();
        result.setVisible(false);

        CadViewerSimple viewer = new CadViewerSimple();
        viewer.setVisible(false);

        HorizontalLayout controls = new HorizontalLayout(convertBtn);
        add(title, new Hr(), upload, controls, progress, log, result, viewer);

        convertBtn.addClickListener(e -> {
            try {
                String fileName = buffer.getFileName();
                if (fileName == null || fileName.isEmpty()) return;
                InputStream is = buffer.getInputStream();
                Path tmp = Files.createTempFile("upload-", fileName);
                Files.copy(is, tmp, StandardCopyOption.REPLACE_EXISTING);

                progress.setVisible(true);
                log.add(new Div(new Text(">> Converting: " + fileName)));

                var conv = service.convert(tmp);

                Anchor stlLink = new Anchor(new StreamResource(conv.stl().getFileName().toString(), () -> {
                    try { return Files.newInputStream(conv.stl()); } catch (Exception ex) { return null; }
                }), "Download STL");
                stlLink.getElement().setAttribute("download", true);

                Anchor dxfLink = new Anchor(new StreamResource(conv.dxf().getFileName().toString(), () -> {
                    try { return Files.newInputStream(conv.dxf()); } catch (Exception ex) { return null; }
                }), "Download DXF");
                dxfLink.getElement().setAttribute("download", true);

                Anchor viewerLink = new Anchor("/viewer.html?file=/download?file=" + conv.stl().getFileName(), "Open in full viewer");
                viewerLink.setTarget("_blank");

                result.removeAll();
                result.add(new HorizontalLayout(stlLink, dxfLink, viewerLink));
                result.setVisible(true);

                viewer.setVisible(true);
                viewer.load("/download?file=" + conv.stl().getFileName(), "/download?file=" + conv.dxf().getFileName());

                log.add(new Div(new Text(">> Done: " + conv.stl().getFileName())));
                progress.setVisible(false);

            } catch (Exception ex) {
                log.add(new Div(new Text(">> Error: " + ex.getMessage())));
                progress.setVisible(false);
            }
        });
    }
}
