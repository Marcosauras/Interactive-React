import { useEffect } from 'react';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Stats from 'three/examples/jsm/libs/stats.module';

import sceneInit from './lib/SceneInit';

import './App.css'

function App() {
  useEffect(() => {
    const scene = new sceneInit('myThreeJsCanvas');
    scene.initialize();
    scene.animate();

    // adding a box
    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.scene.add(boxMesh)

  }, []);

  return (
      <div>
        <canvas id="myThreeJsCanvas" />
      </div>
  )
}

export default App
