import { useEffect } from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './lib/SceneInit';

function ForestHouse() {
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

export default ForestHouse;