import * as THREE from "three";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./App.css";

export default function App() {
  // Create a scene
  const scene = new THREE.Scene();
  // Create a sphere
  const geometry = new THREE.SphereGeometry(3, 64, 64);
  // Create a material
  const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    roughness: 0.5,
  });
  // Create a mesh
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Get sizes
  let sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Create Light
  const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
  light.position.set(0, 10, 10);
  scene.add(light);

  // Camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 20;
  scene.add(camera);

  const canvas = document.querySelector(".webgl");
  const renderer = new THREE.WebGLRenderer({ canvas });
  // Set renderer size
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(2);
  renderer.render(scene, camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  // Set auto rotation
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;

  // Resize
  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    // Update Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  });

  // Get request id
  let ReqId;

  // Loop to update resize
  const loop = () => {
    controls.update();
    renderer.render(scene, camera);
    ReqId = window.requestAnimationFrame(loop);
  };

  loop();
  // GSAP
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
  tl.fromTo("nav", { y: "-100%" }, { y: "0%" });
  tl.fromTo("footer", { opacity: 0 }, { opacity: 1 });

  // Change color when mouse is down
  let mouseDown = false;
  let rgb = [];
  window.addEventListener("mousedown", () => (mouseDown = true));
  window.addEventListener("mouseup", () => (mouseDown = false));

  window.addEventListener("mousemove", e => {
    if (mouseDown) {
      rgb = [
        Math.round((e.pageX / sizes.width) * 255),
        Math.round((e.pageY / sizes.height) * 255),
        150,
      ];

      // Make new array of values to make it work
      let newColor = new THREE.Color(`rgb(${rgb.join(",")})`);
      // Let's Animate
      gsap.to(mesh.material.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
      });
    }
  });
  // JSX Should go here
  return <></>;
}
