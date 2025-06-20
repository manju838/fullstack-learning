import './App.css'
import { useEffect } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

{/* 
  This boilerplate code of App fn with a return and an export of this App fn can be added using "rfce" 
  First div tag has some code unnecessary for threejs, we cant directly write h1 tags inside return, either use div tag or the empty tags
  If there are multiple div tags, they should be enclosed in a larger tag so used the empty tag
  
  In the useEffect fn, we add scene, camera, renderer(linking scene) and append renderer to document(this links to canvas element in jsx file)
  Never use the variable name "canvas", else it gets confused with the tag
  "window.requestAnimationFrame(animate);" runs the animate() fn every single frame
  */}

function App() {
  useEffect(()=>{
    {/* Boilerplate code for Threejs */}
    
    // Scene setup
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xf0f0f0); // Optional: Light gray background
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      scene,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Lights
    {/* Add lights so that Threejs scene is visible, light defined are added to scene/Scene() which is added to WebGLRenderer and is subsequently added to DOM*/}
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0,64,32);
    scene.add(spotLight);

    {/* Add something in the scene,else it will be black */}
    const boxGeometry = new THREE.BoxGeometry(16,16,16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add FPS stats
    const stats = Stats();
    document.body.appendChild(stats.dom);



    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;

      stats.update();
      controls.update();

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);
  
  return (
    <>
    
      <div>
        <h1>Hello World!</h1>
        <div class="font-bold-6xl">This text is displayed using TailwindCSS, add the script line mentioned in README file to index.html to enable this</div>
      </div>

      <div>
        <canvas id="myThreejsCanvas"/>
      </div>
    </>
      
  )
}

export default App
