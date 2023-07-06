import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
// sets up the pov from the web
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
// renders the image
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render( scene, camera)

// creates the torus
const torusGeometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 });
const torus = new THREE.Mesh( torusGeometry, material );

scene.add(torus)
// shines light on torus so we can see it
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5)

const AmbientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, AmbientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper)

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render( scene, camera)
}

animate()
