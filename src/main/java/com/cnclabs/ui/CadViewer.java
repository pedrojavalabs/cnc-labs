package com.cnclabs.ui;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.tabs.Tab;
import com.vaadin.flow.component.tabs.Tabs;

public class CadViewer extends Div {

    public CadViewer() {
        setWidthFull();
        getStyle().set("background", "#0e0e0e")
                 .set("border", "1px solid #333")
                 .set("border-radius", "12px")
                 .set("overflow", "hidden")
                 .set("margin-top", "16px")
                 .set("position", "relative");

        Span header = new Span("CNC LABS // CAD VIEWER");
        header.getStyle().set("position", "absolute").set("top", "12px").set("left", "16px")
              .set("z-index", "10").set("font-family", "monospace").set("font-size", "11px")
              .set("color", "#d4ff00").set("background", "rgba(0,0,0,0.7)")
              .set("padding", "4px 8px").set("border-radius", "4px");
        add(header);

        Tabs tabs = new Tabs(new Tab("3D STL"), new Tab("2D DXF"));
        tabs.setWidthFull();
        tabs.getStyle().set("background", "#111").set("margin-top", "36px");
        add(tabs);

        Div c3d = new Div();
        c3d.setId("cad-viewer-container");
        c3d.setWidthFull();
        c3d.getStyle().set("height", "520px");

        Div c2d = new Div();
        c2d.setId("dxf-viewer-container");
        c2d.setWidthFull();
        c2d.getStyle().set("height", "520px").set("background", "#fafafa").set("display", "none");

        add(c3d, c2d);

        // Load external JS
        getElement().executeJs("var s=document.createElement('script'); s.src='/cad-viewer.js'; document.head.appendChild(s);");

        // Controls
        getElement().executeJs("setTimeout(function(){ if(window.addViewerControls) window.addViewerControls(); },1200);");

        tabs.addSelectedChangeListener(e -> {
            if (e.getSelectedTab().getLabel().equals("3D STL")) {
                c3d.getStyle().set("display", "block");
                c2d.getStyle().set("display", "none");
            } else {
                c3d.getStyle().set("display", "none");
                c2d.getStyle().set("display", "block");
                getElement().executeJs("if(window.renderDxf) window.renderDxf();");
            }
        });
    }

    public void load(String stlUrl, String dxfUrl) {
        getElement().executeJs("setTimeout(function(){ if(window.initCadViewer) window.initCadViewer($0,$1); }, 800)", stlUrl, dxfUrl);
    }

    public void load(String stlUrl) {
        load(stlUrl, null);
    }
}
