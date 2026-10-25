package com.cnclabs.ui;

import com.cnclabs.service.CadConversionService;
import com.vaadin.flow.component.Text;
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
    private final Div log;
    private final VerticalLayout result;
    private final CadViewerSimple viewer;
    private final ProgressBar progress;
    private final Image preview;

    public MainView(@Autowired CadConversionService service) {
        this.service = service;
        setPadding(true);
        setSpacing(true);

        H1 title = new H1("CNC LABS // Cimatron - AUTO");
        title.getStyle().set("font-family","monospace").set("color","#d4ff00");

        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer);
        upload.setAcceptedFileTypes("image/*");
        upload.setMaxFiles(1);
        upload.setDropLabel(new Span("Drop image here - auto converts"));

        progress = new ProgressBar();
        progress.setIndeterminate(true);
        progress.setVisible(false);

        // Image preview
        preview = new Image();
        preview.setWidth("300px");
        preview.getStyle().set("border","1px solid #333").set("border-radius","8px");
        preview.setVisible(false);

        // LOG - half height
        log = new Div();
        log.getStyle().set("font-family","monospace").set("background","#151515")
                .set("padding","12px").set("height","110px").set("overflow","auto")
                .set("border","1px solid #333").set("width","100%")
                .set("border-radius","8px").set("color","#888").set("font-size","12px");
        log.add(new Div(new Text(">> Ready - upload image, auto-converts to STL/DXF")));

        result = new VerticalLayout();
        result.setVisible(false);

        viewer = new CadViewerSimple();
        viewer.setVisible(false);

        add(title, new Hr(), upload, preview, progress, log, result, viewer);

        upload.addSucceededListener(event -> {
            try {
                String fileName = event.getFileName();
                InputStream is = buffer.getInputStream();
                Path tmp = Files.createTempFile("upload-", fileName);
                Files.copy(is, tmp, StandardCopyOption.REPLACE_EXISTING);

                // Show image preview
                StreamResource imgRes = new StreamResource(fileName, () -> {
                    try { return Files.newInputStream(tmp); } catch (Exception e){ return null; }
                });
                preview.setSrc(imgRes);
                preview.setVisible(true);

                autoConvert(fileName, tmp);

            } catch (Exception ex) {
                log.add(new Div(new Text(">> Error: " + ex.getMessage())));
            }
        });
    }

    private void autoConvert(String fileName, Path tmpFile) {
        try {
            progress.setVisible(true);
            log.add(new Div(new Text(">> Auto-converting: " + fileName)));

            var conv = service.convert(tmpFile);

            Anchor stlLink = new Anchor(new StreamResource(conv.stl().getFileName().toString(), () -> {
                try { return Files.newInputStream(conv.stl()); } catch (Exception ex) { return null; }
            }), "Download STL");
            stlLink.getElement().setAttribute("download", true);
            stlLink.getStyle().set("color","#d4ff00");

            Anchor dxfLink = new Anchor(new StreamResource(conv.dxf().getFileName().toString(), () -> {
                try { return Files.newInputStream(conv.dxf()); } catch (Exception ex) { return null; }
            }), "Download DXF");

            Anchor viewerLink = new Anchor("/viewer.html?stl=" + conv.stl().getFileName(), "Open full viewer");
            viewerLink.setTarget("_blank");
            viewerLink.getStyle().set("color","#fff");

            result.removeAll();
            result.add(new H4("Converted: " + conv.stl().getFileName()), new HorizontalLayout(stlLink, dxfLink, viewerLink));
            result.setVisible(true);

            viewer.setVisible(true);
            viewer.load(conv.stl().getFileName().toString(), conv.dxf().getFileName().toString());

            log.add(new Div(new Text(">> Done: " + conv.stl().getFileName() + " - viewer loaded")));
            progress.setVisible(false);

        } catch (Exception ex) {
            log.add(new Div(new Text(">> Error: " + ex.getMessage())));
            progress.setVisible(false);
        }
    }
}
