package com.example.cad;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.checkbox.Checkbox;
import com.vaadin.flow.component.grid.Grid;
import com.vaadin.flow.component.html.*;
import com.vaadin.flow.component.notification.Notification;
import com.vaadin.flow.component.notification.NotificationVariant;
import com.vaadin.flow.component.orderedlayout.*;
import com.vaadin.flow.component.textfield.IntegerField;
import com.vaadin.flow.component.textfield.NumberField;
import com.vaadin.flow.component.upload.Upload;
import com.vaadin.flow.component.upload.receivers.MemoryBuffer;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.StreamResource;
import java.io.ByteArrayInputStream;

@Route("")
@PageTitle("Image to CAD")
public class MainView extends HorizontalLayout {

    private final CadModelRepository repo;
    private final OutlineExtruder extruder;
    private final CadViewer viewer = new CadViewer();
    private final Grid<CadModel> grid = new Grid<>(CadModel.class, false);
    private final Anchor download = new Anchor();
    private final Span info = new Span("Upload an image to begin");

    private final IntegerField threshold = new IntegerField("Threshold (0-255)");
    private final NumberField width = new NumberField("Width (mm)");
    private final NumberField height = new NumberField("Extrude height (mm)");
    private final Checkbox invert = new Checkbox("Invert (use light areas)");
    private byte[] lastImage;
    private String lastName;

    public MainView(CadModelRepository repo, OutlineExtruder extruder) {
        this.repo = repo;
        this.extruder = extruder;
        setSizeFull();
        setPadding(false);
        setSpacing(false);

        threshold.setValue(128); threshold.setMin(0); threshold.setMax(255); threshold.setStepButtonsVisible(true);
        width.setValue(100.0); width.setMin(1);
        height.setValue(5.0); height.setMin(0.1);

        MemoryBuffer buffer = new MemoryBuffer();
        Upload upload = new Upload(buffer);
        upload.setAcceptedFileTypes("image/*", ".png", ".jpg", ".jpeg", ".bmp", ".gif");
        upload.setMaxFileSize(20 * 1024 * 1024);
        upload.addSucceededListener(e -> {
            try {
                lastImage = buffer.getInputStream().readAllBytes();
                lastName = e.getFileName();
                generate();
            } catch (Exception ex) { error(ex.getMessage()); }
        });

        Button regen = new Button("Regenerate", e -> generate());
        regen.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
        Button reset = new Button("Reset view", e -> viewer.resetView());
        Checkbox wire = new Checkbox("Wireframe", e -> viewer.setWireframe(e.getValue()));

        grid.addColumn(CadModel::getName).setHeader("Model").setAutoWidth(true);
        grid.addColumn(CadModel::getTriangles).setHeader("Triangles");
        grid.addColumn(m -> String.format("%.0f×%.1f mm", m.getWidthMm(), m.getHeightMm())).setHeader("Size");
        grid.asSingleSelect().addValueChangeListener(e -> show(e.getValue()));
        grid.setHeight("260px");

        download.getElement().setAttribute("download", true);
        download.add(new Button("Download for Cimatron (.stl)"));
        download.setEnabled(false);

        VerticalLayout side = new VerticalLayout(
                new H3("Image → CAD"), upload, threshold, width, height, invert,
                new HorizontalLayout(regen, reset), wire, download, info,
                new H4("Session models"), grid);
        side.setWidth("380px");
        side.getStyle().set("overflow", "auto");

        viewer.setSizeFull();
        Div viewport = new Div(viewer);
        viewport.setSizeFull();
        add(side, viewport);
        setFlexGrow(1, viewport);
        refresh();
    }

    private void generate() {
        if (lastImage == null) { error("Upload an image first"); return; }
        try {
            OutlineExtruder.Result r = extruder.convert(lastImage, threshold.getValue(), invert.getValue(),
                    width.getValue(), height.getValue());
            CadModel m = new CadModel();
            m.setName(lastName.replaceAll("\\.[^.]+$", ""));
            m.setSourceImage(lastImage);
            m.setStl(r.stl());
            m.setTriangles(r.triangles());
            m.setThreshold(threshold.getValue());
            m.setWidthMm(width.getValue());
            m.setHeightMm(height.getValue());
            m = repo.save(m);
            refresh();
            grid.select(m);
        } catch (Exception ex) { error(ex.getMessage()); }
    }

    private void show(CadModel m) {
        if (m == null) return;
        viewer.setStl(m.getStl());
        byte[] data = m.getStl();
        download.setHref(new StreamResource(m.getName() + ".stl", () -> new ByteArrayInputStream(data)));
        download.setEnabled(true);
        info.setText(m.getTriangles() + " triangles · open in Cimatron via File › Import › STL");
    }

    private void refresh() { grid.setItems(repo.findAllByOrderByCreatedAtDesc()); }

    private void error(String msg) {
        Notification.show(msg, 4000, Notification.Position.MIDDLE).addThemeVariants(NotificationVariant.LUMO_ERROR);
    }
}
