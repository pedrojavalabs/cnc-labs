package com.cnclabs.ui;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.IFrame;

public class CadViewerSimple extends Div {

    private final IFrame iframe;

    public CadViewerSimple() {
        setWidthFull();
        getStyle().set("border","1px solid #333").set("border-radius","12px")
                 .set("overflow","hidden").set("margin-top","16px").set("height","560px");

        iframe = new IFrame();
        iframe.setWidthFull();
        iframe.getStyle().set("height","100%").set("border","none");
        iframe.setId("cad-iframe");

        add(iframe);
    }

    public void load(String stlUrl, String dxfUrl) {
        // Load viewer.html with stl param
        iframe.setSrc("/viewer.html?file=" + stlUrl);
    }
}
