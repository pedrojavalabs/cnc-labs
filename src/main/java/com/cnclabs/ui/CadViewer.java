package com.cnclabs.ui;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;

public class CadViewer extends Div {
    public CadViewer() {
        setWidthFull();
        getStyle().set("background","#0e0e0e").set("border","1px solid #333")
                 .set("border-radius","12px").set("padding","0").set("overflow","hidden")
                 .set("margin-top","16px").set("position","relative");
        
        Span header = new Span("LIVE 3D PREVIEW // STL + DXF");
        header.getStyle().set("position","absolute").set("top","12px").set("left","16px")
              .set("z-index","10").set("font-family","monospace").set("font-size","11px")
              .set("color","#d4ff00").set("background","rgba(0,0,0,0.7)")
              .set("padding","4px 8px").set("border-radius","4px");
        add(header);

        Div container = new Div();
        container.setId("cad-viewer-container");
        container.setWidthFull();
        container.getStyle().set("height","520px").set("background","radial-gradient(#1a1a1a, #0a0a0a)");

        Div controls = new Div();
        controls.setId("cad-controls");
        controls.getStyle().set("position","absolute").set("bottom","12px").set("left","16px")
                .set("z-index","10").set("display","flex").set("gap","8px");
        controls.getElement().setProperty("innerHTML",
            "<button id='btn-wire' style='background:#222;color:#d4ff00;border:1px solid #333;padding:6px 12px;border-radius:6px;font-family:monospace;cursor:pointer'>WIREFRAME</button>"+
            "<button id='btn-fit' style='background:#d4ff00;color:#000;border:none;padding:6px 12px;border-radius:6px;font-family:monospace;cursor:pointer;font-weight:bold'>FIT VIEW</button>"+
            "<button id='btn-top' style='background:#222;color:#fff;border:1px solid #333;padding:6px 12px;border-radius:6px;font-family:monospace;cursor:pointer'>TOP</button>"
        );

        add(container, controls);

        getElement().executeJs(
            "if(!window.THREE_LOADED){"+
            "window.THREE_LOADED=true;"+
            "var s1=document.createElement('script');"+
            "s1.type='importmap';"+
            "s1.textContent=JSON.stringify({imports:{'three':'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js','three/addons/':'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/'}});"+
            "document.head.appendChild(s1);"+
            "setTimeout(()=>{"+
            "var mod=document.createElement('script');mod.type='module';"+
            "mod.textContent="import * as THREE from 'three';import { STLLoader } from 'three/addons/loaders/STLLoader.js';import { OrbitControls } from 'three/addons/controls/OrbitControls.js';window.THREE=THREE;window.STLLoader=STLLoader;window.OrbitControls=OrbitControls;";"+
            "document.head.appendChild(mod);},100);}"+
            "window.initCadViewer = function(stlUrl, dxfUrl){"+
            "const container=document.getElementById('cad-viewer-container');if(!container)return;container.innerHTML='';"+
            "const scene=new THREE.Scene();scene.background=new THREE.Color(0x0a0a0a);"+
            "const camera=new THREE.PerspectiveCamera(45, container.clientWidth/520, 0.1, 1000);camera.position.set(60,40,80);"+
            "const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(container.clientWidth,520);renderer.setPixelRatio(window.devicePixelRatio);container.appendChild(renderer.domElement);"+
            "scene.add(new THREE.AmbientLight(0xffffff,0.6));"+
            "const dir=new THREE.DirectionalLight(0xffffff,1.2);dir.position.set(50,100,50);scene.add(dir);"+
            "const dir2=new THREE.DirectionalLight(0xd4ff00,0.4);dir2.position.set(-50,-20,-50);scene.add(dir2);"+
            "const grid=new THREE.GridHelper(200,40,0x333333,0x222222);scene.add(grid);"+
            "const controls=new OrbitControls(camera, renderer.domElement);controls.enableDamping=true;"+
            "if(stlUrl){new STLLoader().load(stlUrl,(geom)=>{geom.computeVertexNormals();geom.center();const mat=new THREE.MeshStandardMaterial({color:0xe0e0e0,metalness:0.2,roughness:0.6});window._currentMesh=new THREE.Mesh(geom,mat);scene.add(window._currentMesh);const box=new THREE.Box3().setFromObject(window._currentMesh);const size=box.getSize(new THREE.Vector3()).length();const center=box.getCenter(new THREE.Vector3());controls.target.copy(center);camera.position.copy(center).add(new THREE.Vector3(size*0.6,size*0.4,size*0.6));controls.update();});}"+
            "window._fitView=()=>{if(window._currentMesh){const box=new THREE.Box3().setFromObject(window._currentMesh);const c=box.getCenter(new THREE.Vector3());controls.target.copy(c);controls.update();}};"+
            "window._toggleWire=()=>{if(window._currentMesh){window._currentMesh.material.wireframe=!window._currentMesh.material.wireframe;}};"+
            "window._topView=()=>{camera.position.set(0,150,0);controls.target.set(0,0,0);controls.update();};"+
            "document.getElementById('btn-fit')?.addEventListener('click', window._fitView);"+
            "document.getElementById('btn-wire')?.addEventListener('click', window._toggleWire);"+
            "document.getElementById('btn-top')?.addEventListener('click', window._topView);"+
            "function animate(){requestAnimationFrame(animate);controls.update();renderer.render(scene,camera);}animate();"+
            "window.addEventListener('resize',()=>{camera.aspect=container.clientWidth/520;camera.updateProjectionMatrix();renderer.setSize(container.clientWidth,520);});"+
            "};"
        );
    }
    
    public void load(String stlDownloadUrl, String dxfDownloadUrl){
        getElement().executeJs("setTimeout(()=>{ if(window.THREE && window.STLLoader){ window.initCadViewer($0,$1); } else { setTimeout(()=>window.initCadViewer($0,$1),1500); } },500)", stlDownloadUrl, dxfDownloadUrl);
    }
}
