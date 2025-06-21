import './App.css'
import { useEffect } from 'react';
import * as THREE from 'three';
import SceneInit from './lib/SceneInit.js';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';

{/* 
  This boilerplate code of App fn with a return and an export of this App fn can be added using "rfce" 
  First div tag has some code unnecessary for threejs, we cant directly write h1 tags inside return, either use div tag or the empty tags
  If there are multiple div tags, they should be enclosed in a larger tag so used the empty tag
  
  UseEffect boilerplate: useEffect(()=>{}, [])
  */}

function App() {
  
  useEffect(()=>{
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // PART 1
    // Adding geometries to a three.js scene.
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    test.scene.add(boxMesh);

    // const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32, 16);
    // const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    // cylinderMesh.position.x = 1;
    // test.scene.add(cylinderMesh);

    // const torusGeometry = new THREE.TorusGeometry(0.5, 0.25, 20, 20);
    // const torusMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    // const torusMesh = new THREE.Mesh(torusGeometry, torusMaterial);
    // test.scene.add(torusMesh);

    // PART 3
    // Showcase "hidden" geometries.
    const roundedBoxGeometry = new RoundedBoxGeometry(1, 1, 1, 4, 0.1);
    const roundedBoxMaterial = new THREE.MeshNormalMaterial({
      wireframe: true,
    });
    const roundedBoxMesh = new THREE.Mesh(
      roundedBoxGeometry,
      roundedBoxMaterial
    );
    roundedBoxMesh.position.x = -1;
    test.scene.add(roundedBoxMesh);

    const teapotGeometry = new TeapotGeometry(0.5, 8);
    const teapotMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const teapotMesh = new THREE.Mesh(teapotGeometry, teapotMaterial);
    teapotMesh.position.x = 1;
    test.scene.add(teapotMesh);


  }, [])
  
  return (
    <div>
        <canvas id="myThreeJsCanvas"/>
    </div>
      
  )
}

export default App
