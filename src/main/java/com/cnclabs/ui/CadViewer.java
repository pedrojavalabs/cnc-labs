package com.cnclabs.ui;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;

public class CadViewer extends Div {

    public CadViewer() {
        setWidthFull();
        getStyle().set("background", "#0e0e0e")
                 .set("border", "1px solid #333")
                 .set("border-radius", "12px")
                 .set("overflow", "hidden")
                 .set("margin-top", "16px")
                 .set("position", "relative");

        Span header = new Span("LIVE 3D PREVIEW // STL");
        header.getStyle().set("position", "absolute").set("top", "12px").set("left", "16px")
              .set("z-index", "10").set("font-family", "monospace").set("font-size", "11px")
              .set("color", "#d4ff00").set("background", "rgba(0,0,0,0.7)")
              .set("padding", "4px 8px").set("border-radius", "4px");
        add(header);

        Div container = new Div();
        container.setId("cad-viewer-container");
        container.setWidthFull();
        container.getStyle().set("height", "520px")
                 .set("background", "radial-gradient(#1a1a1a, #0a0a0a)");
        add(container);

        // Inject Three.js loader once
        getElement().executeJs("""
            if(!window.THREE_LOADED){
                window.THREE_LOADED=true;
                var im=document.createElement('script');
                im.type='importmap';
                im.textContent='{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}';
                document.head.appendChild(im);
            }
            window.initCadViewer = function(stlUrl){
                if(!window.THREE || !window.STLLoader){
                    setTimeout(()=>window.initCadViewer(stlUrl), 500);
                    return;
                }
                const THREE=window.THREE;
                const STLLoader=window.STLLoader;
                const OrbitControls=window.OrbitControls;
                const container=document.getElementById('cad-viewer-container');
                if(!container) return;
                container.innerHTML='';
                const scene=new THREE.Scene();
                scene.background=new THREE.Color(0x0a0a0a);
                const camera=new THREE.PerspectiveCamera(45, container.clientWidth/520, 0.1, 1000);
                camera.position.set(60,40,80);
                const renderer=new THREE.WebGLRenderer({antialias:true});
                renderer.setSize(container.clientWidth, 520);
                renderer.setPixelRatio(window.devicePixelRatio);
                container.appendChild(renderer.domElement);
                scene.add(new THREE.AmbientLight(0xffffff,0.6));
                const d1=new THREE.DirectionalLight(0xffffff,1.2); d1.position.set(50,100,50); scene.add(d1);
                const d2=new THREE.DirectionalLight(0xd4ff00,0.4); d2.position.set(-50,-20,-50); scene.add(d2);
                const grid=new THREE.GridHelper(200,40,0x333333,0x222222); scene.add(grid);
                const controls=new OrbitControls(camera, renderer.domElement); controls.enableDamping=true;
                if(stlUrl){
                    new STLLoader().load(stlUrl, function(geom){
                        geom.computeVertexNormals(); geom.center();
                        const mat=new THREE.MeshStandardMaterial({color:0xe0e0e0, metalness:0.2, roughness:0.6});
                        window._mesh=new THREE.Mesh(geom, mat); scene.add(window._mesh);
                        const box=new THREE.Box3().setFromObject(window._mesh);
                        const center=box.getCenter(new THREE.Vector3());
                        const size=box.getSize(new THREE.Vector3()).length();
                        controls.target.copy(center);
                        camera.position.copy(center).add(new THREE.Vector3(size*0.6,size*0.4,size*0.6));
                        controls.update();
                    });
                }
                window._fit=function(){ if(window._mesh){ const b=new THREE.Box3().setFromObject(window._mesh); controls.target.copy(b.getCenter(new THREE.Vector3())); controls.update(); } };
                window._wire=function(){ if(window._mesh) window._mesh.material.wireframe=!window._mesh.material.wireframe; };
                window._top=function(){ camera.position.set(0,150,0); controls.target.set(0,0,0); controls.update(); };
                function animate(){ requestAnimationFrame(animate); controls.update(); renderer.render(scene,camera); } animate();
            };
            // Load Three modules
            if(!window.THREE){
                var mod=document.createElement('script'); mod.type='module';
                mod.textContent="import * as THREE from 'three'; import { STLLoader } from 'three/addons/loaders/STLLoader.js'; import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; window.THREE=THREE; window.STLLoader=STLLoader; window.OrbitControls=OrbitControls;";
                document.head.appendChild(mod);
            }
            // Controls UI
            setTimeout(()=>{
                var c=document.getElementById('cad-viewer-container');
                if(!c) return;
                var bar=document.createElement('div');
                bar.style='position:absolute;bottom:12px;left:16px;z-index:10;display:flex;gap:8px;';
                bar.innerHTML='<button onclick="window._wire()" style="background:#222;color:#d4ff00;border:1px solid #333;padding:6px 12px;border-radius:6px;font-family:monospace;cursor:pointer">WIREFRAME</button><button onclick="window._fit()" style="background:#d4ff00;color:#000;border:none;padding:6px 12px;border-radius:6px;font-family:monospace;font-weight:bold;cursor:pointer">FIT VIEW</button><button onclick="window._top()" style="background:#222;color:#fff;border:1px solid #333;padding:6px 12px;border-radius:6px;font-family:monospace;cursor:pointer">TOP</button>';
                c.parentElement.appendChild(bar);
            },800);
            """);
    }

    public void load(String stlUrl) {
        getElement().executeJs("setTimeout(()=>window.initCadViewer($0), 600)", stlUrl);
    }
    public void load(String stlUrl, String dxfUrl) {
        load(stlUrl); // keep same signature as before
    }
}
