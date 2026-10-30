package com.example.cad;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HasSize;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;
import java.util.Base64;

/** Three.js viewer: left-drag rotate, right-drag / shift-drag pan, wheel zoom. */
@Tag("cad-viewer")
@NpmPackage(value = "three", version = "0.169.0")
@JsModule("./cad-viewer.js")
public class CadViewer extends Component implements HasSize {
    public void setStl(byte[] stl) {
        getElement().setProperty("stlBase64", stl == null ? "" : Base64.getEncoder().encodeToString(stl));
    }
    public void resetView() { getElement().callJsFunction("resetView"); }
    public void setWireframe(boolean on) { getElement().setProperty("wireframe", on); }
}
