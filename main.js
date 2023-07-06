import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

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

// helpers show where items are placed
const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

// making the mouse able to move the view point of the screen, (orbit around the screen)

const controls = new OrbitControls(camera, renderer.domElement);

// function to create a star in a random location
function addStar(){
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  star.position.set(x, y, z);
  scene.add(star)
}
// choosing the amount of stars to the scene

Array(2000).fill().forEach(addStar)

function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

// makes the view update as we click and drag the mouse
  controls.update();

  renderer.render( scene, camera)
}

animate()
