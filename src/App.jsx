import { useEffect } from "react";

import * as THREE from "three";

import { TTFLoader } from "three/examples/jsm/loaders/TTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // const glftLoader = new GLTFLoader();
    // glftLoader.load('../src/assets/forest_house/scene.gltf', (gltfScene) => {

    //   gltfScene.scene.rotation.y = Math.PI / 8;
    //   gltfScene.scene.position.y = -4;
    //   gltfScene.scene.scale.set(100, 100, 100);
    //   test.scene.add(gltfScene.scene);
    // });

    // const addStar = () => {
    //   const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    //   const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
    //   const star = new THREE.Mesh( geometry, material );

    //   const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

    //   star.position.set(x, y, z);
    //   test.scene.add(star)
    // }
    // // choosing the amount of stars to the scene

    // Array(200).fill().forEach(addStar)

    const fontLoader = new FontLoader();
    fontLoader.load(
      "node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json",
      (droidFont) => {
        const textGeometry = new TextGeometry("Welcome to my website", {
          height: 2,
          size: 2,
          font: droidFont,
        });
        const textMaterial = new THREE.MeshNormalMaterial();
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.x = -15;
        textMesh.position.y = 0;
        test.scene.add(textMesh);
      }
    ); 

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
