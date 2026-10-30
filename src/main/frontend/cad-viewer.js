import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

class CadViewer extends HTMLElement {
  static get observedAttributes() { return []; }

  connectedCallback() {
    this.style.display = 'block';
    this.style.position = 'relative';
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1e2329);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100000);
    this.camera.up.set(0, 0, 1);
    this.camera.position.set(150, -150, 150);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x444444, 1.2));
    const dir = new THREE.DirectionalLight(0xffffff, 1.5);
    dir.position.set(1, -1, 2);
    this.scene.add(dir);
    this.grid = new THREE.GridHelper(400, 40, 0x556070, 0x333a44);
    this.grid.rotation.x = Math.PI / 2;
    this.scene.add(this.grid);
    this.scene.add(new THREE.AxesHelper(30));

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.screenSpacePanning = true;
    this.controls.zoomToCursor = true;

    this.material = new THREE.MeshStandardMaterial({ color: 0x4fa3d9, metalness: 0.3, roughness: 0.5 });
    this._ro = new ResizeObserver(() => this._resize());
    this._ro.observe(this);
    const loop = () => { this._raf = requestAnimationFrame(loop); this.controls.update(); this.renderer.render(this.scene, this.camera); };
    loop();
    if (this._pending) this._load(this._pending);
  }

  disconnectedCallback() { cancelAnimationFrame(this._raf); this._ro?.disconnect(); this.renderer?.dispose(); }

  set stlBase64(v) { if (!this.renderer) { this._pending = v; return; } this._load(v); }
  set wireframe(v) { if (this.material) this.material.wireframe = !!v; }

  _load(b64) {
    if (this.mesh) { this.scene.remove(this.mesh); this.mesh.geometry.dispose(); this.mesh = null; }
    if (!b64) return;
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const geom = new STLLoader().parse(bytes.buffer);
    geom.computeBoundingBox();
    const c = new THREE.Vector3(); geom.boundingBox.getCenter(c);
    geom.translate(-c.x, -c.y, -geom.boundingBox.min.z);
    this.mesh = new THREE.Mesh(geom, this.material);
    this.scene.add(this.mesh);
    this.resetView();
  }

  resetView() {
    if (!this.mesh) return;
    const box = new THREE.Box3().setFromObject(this.mesh);
    const size = box.getSize(new THREE.Vector3()).length();
    const center = box.getCenter(new THREE.Vector3());
    this.controls.target.copy(center);
    this.camera.position.copy(center).add(new THREE.Vector3(0.6, -0.9, 0.8).multiplyScalar(size));
    this.camera.near = size / 1000; this.camera.far = size * 100;
    this.camera.updateProjectionMatrix();
  }

  _resize() {
    const w = this.clientWidth || 1, h = this.clientHeight || 1;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }
}
customElements.define('cad-viewer', CadViewer);
