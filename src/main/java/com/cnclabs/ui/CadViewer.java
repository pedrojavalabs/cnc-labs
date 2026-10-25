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

        Tabs tabs = new Tabs();
        Tab tab3d = new Tab("3D STL");
        Tab tab2d = new Tab("2D DXF");
        tabs.add(tab3d, tab2d);
        tabs.setWidthFull();
        tabs.getStyle().set("background","#111").set("margin-top","36px");
        add(tabs);

        Div container3d = new Div();
        container3d.setId("cad-viewer-container");
        container3d.setWidthFull();
        container3d.getStyle().set("height", "520px").set("background", "radial-gradient(#1a1a1a, #0a0a0a)");

        Div container2d = new Div();
        container2d.setId("dxf-viewer-container");
        container2d.setWidthFull();
        container2d.getStyle().set("height", "520px").set("background","#fafafa").set("display","none")
                   .set("position","relative");

        add(container3d, container2d);

        tabs.addSelectedChangeListener(e -> {
            if(e.getSelectedTab() == tab3d){
                container3d.getStyle().set("display","block");
                container2d.getStyle().set("display","none");
            } else {
                container3d.getStyle().set("display","none");
                container2d.getStyle().set("display","block");
                getElement().executeJs("if(window.renderDxf) window.renderDxf();");
            }
        });

        getElement().executeJs("""
            if(!window.THREE_LOADED){
                window.THREE_LOADED=true;
                var im=document.createElement('script');
                im.type='importmap';
                im.textContent='{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}';
                document.head.appendChild(im);
            }
            window._stlUrl=null; window._dxfUrl=null;
            
            window.initCadViewer = function(stlUrl, dxfUrl){
                window._stlUrl=stlUrl; window._dxfUrl=dxfUrl;
                if(!window.THREE || !window.STLLoader){ setTimeout(()=>window.initCadViewer(stlUrl,dxfUrl),500); return; }
                const THREE=window.THREE; const STLLoader=window.STLLoader; const OrbitControls=window.OrbitControls;
                const container=document.getElementById('cad-viewer-container');
                if(!container) return; container.innerHTML='';
                const scene=new THREE.Scene(); scene.background=new THREE.Color(0x0a0a0a);
                const camera=new THREE.PerspectiveCamera(45, container.clientWidth/520, 0.1, 1000); camera.position.set(60,40,80);
                const renderer=new THREE.WebGLRenderer({antialias:true}); renderer.setSize(container.clientWidth,520); renderer.setPixelRatio(window.devicePixelRatio); container.appendChild(renderer.domElement);
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
                        const center=box.getCenter(new THREE.Vector3()); const size=box.getSize(new THREE.Vector3()).length();
                        controls.target.copy(center); camera.position.copy(center).add(new THREE.Vector3(size*0.6,size*0.4,size*0.6)); controls.update();
                    });
                }
                window._fit=function(){ if(window._mesh){ const b=new THREE.Box3().setFromObject(window._mesh); controls.target.copy(b.getCenter(new THREE.Vector3())); controls.update(); } };
                window._wire=function(){ if(window._mesh) window._mesh.material.wireframe=!window._mesh.material.wireframe; };
                window._top=function(){ camera.position.set(0,150,0); controls.target.set(0,0,0); controls.update(); };
                function animate(){ requestAnimationFrame(animate); controls.update(); renderer.render(scene,camera); } animate();
            };
            if(!window.THREE){
                var mod=document.createElement('script'); mod.type='module';
                mod.textContent="import * as THREE from 'three'; import { STLLoader } from 'three/addons/loaders/STLLoader.js'; import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; window.THREE=THREE; window.STLLoader=STLLoader; window.OrbitControls=OrbitControls;";
                document.head.appendChild(mod);
            }
            // DXF Viewer
            window.renderDxf = async function(){
                const url=window._dxfUrl; const cont=document.getElementById('dxf-viewer-container'); if(!url||!cont) return;
                cont.innerHTML='<div style="padding:20px;font-family:monospace;color:#666">Loading DXF...</div>';
                try{
                    const txt=await fetch(url).then(r=>r.text());
                    const {default: DxfParser} = await import('https://cdn.jsdelivr.net/npm/dxf-parser@1.1.2/+esm');
                    const parser=new DxfParser(); const dxf=parser.parseSync(txt);
                    cont.innerHTML='<canvas id="dxf-canvas" style="width:100%;height:100%;"></canvas>';
                    const canvas=document.getElementById('dxf-canvas');
                    const ctx=canvas.getContext('2d');
                    const dpr=window.devicePixelRatio||1;
                    canvas.width=cont.clientWidth*dpr; canvas.height=520*dpr; canvas.style.width=cont.clientWidth+'px'; canvas.style.height='520px'; ctx.scale(dpr,dpr);
                    // bounds
                    let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
                    (dxf.entities||[]).forEach(e=>{
                        if(e.vertices){ e.vertices.forEach(v=>{ minX=Math.min(minX,v.x); minY=Math.min(minY,v.y); maxX=Math.max(maxX,v.x); maxY=Math.max(maxY,v.y); }); }
                        if(e.start){ minX=Math.min(minX,e.start.x,e.end.x); maxX=Math.max(maxX,e.start.x,e.end.x); minY=Math.min(minY,e.start.y,e.end.y); maxY=Math.max(maxY,e.start.y,e.end.y); }
                        if(e.center){ minX=Math.min(minX,e.center.x-e.radius); maxX=Math.max(maxX,e.center.x+e.radius); minY=Math.min(minY,e.center.y-e.radius); maxY=Math.max(maxY,e.center.y+e.radius); }
                    });
                    if(!isFinite(minX)){ minX=-100; maxX=100; minY=-100; maxY=100; }
                    const pad=20; const w=cont.clientWidth-pad*2; const h=520-pad*2;
                    const scale=Math.min(w/(maxX-minX||100), h/(maxY-minY||100))*0.9;
                    const ox=pad+(w-(maxX-minX)*scale)/2 - minX*scale;
                    const oy=pad+(h-(maxY-minY)*scale)/2 - minY*scale + (maxY-minY)*scale;
                    const tx=x=>ox+x*scale; const ty=y=>oy - y*scale;
                    ctx.strokeStyle='#111'; ctx.lineWidth=1;
                    (dxf.entities||[]).forEach(e=>{
                        ctx.beginPath();
                        if(e.type==='LINE'){ ctx.moveTo(tx(e.start.x),ty(e.start.y)); ctx.lineTo(tx(e.end.x),ty(e.end.y)); }
                        else if(e.type==='LWPOLYLINE' || e.type==='POLYLINE'){ e.vertices?.forEach((v,i)=>{ if(i===0) ctx.moveTo(tx(v.x),ty(v.y)); else ctx.lineTo(tx(v.x),ty(v.y)); }); if(e.shape) ctx.closePath(); }
                        else if(e.type==='CIRCLE'){ ctx.arc(tx(e.center.x),ty(e.center.y), e.radius*scale, 0, Math.PI*2); }
                        else if(e.type==='ARC'){ ctx.arc(tx(e.center.x),ty(e.center.y), e.radius*scale, -e.endAngle, -e.startAngle); }
                        ctx.stroke();
                    });
                    // axes
                    ctx.strokeStyle='#d4ff00'; ctx.setLineDash([4,4]); ctx.beginPath(); ctx.moveTo(tx(0),ty(minY-10)); ctx.lineTo(tx(0),ty(maxY+10)); ctx.moveTo(tx(minX-10),ty(0)); ctx.lineTo(tx(maxX+10),ty(0)); ctx.stroke(); ctx.setLineDash([]);
                }catch(err){ cont.innerHTML='<div style="padding:20px;font-family:monospace;color:#c00">DXF parse error: '+err+'</div>'; console.error(err); }
            };
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

    public void load(String stlUrl, String dxfUrl) {
        getElement().executeJs("setTimeout(()=>window.initCadViewer($0,$1), 600)", stlUrl, dxfUrl);
    }
    public void load(String stlUrl) { load(stlUrl, null); }
}
