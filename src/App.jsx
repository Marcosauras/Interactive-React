import { useEffect } from 'react';

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();




    const glftLoader = new GLTFLoader();
    glftLoader.load('../src/assets/forest_house/scene.gltf', (gltfScene) => {


      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = -4;
      gltfScene.scene.scale.set(100, 100, 100);
      test.scene.add(gltfScene.scene);
    });

    const addStar = () => {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
      const star = new THREE.Mesh( geometry, material );
    
      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
    
      star.position.set(x, y, z);
      test.scene.add(star)
    }
    // choosing the amount of stars to the scene
    
    Array(200).fill().forEach(addStar)
    const animate = () => {

      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;