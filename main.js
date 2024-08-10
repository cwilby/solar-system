import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Planet from './planet';

const scene = new THREE.Scene();

const fieldOfView = 50;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 50000;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 200;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 100;
controls.maxDistance = 50000;

const sun = new Planet({ name: 'Sun', radius: 15, color: 'yellow', orbitRadius: 0, orbitSpeed: 0.01, orbitAngle: 0 });
scene.add(sun);

const planets = [
    new Planet({ name: 'Mercury', radius: 15, color: '#b68669', orbitRadius: 30, orbitSpeed: 0.893, orbitAngle: 0 }),
    new Planet({ name: 'Venus', radius: 15, color: '#f4bfbf', orbitRadius: 90, orbitSpeed: 0.657, orbitAngle: 0 }),
    new Planet({ name: 'Earth', radius: 15, color: '#6dcae7', orbitRadius: 150, orbitSpeed: 0.559, orbitAngle: 0 }),
    new Planet({ name: 'Mars', radius: 15, color: '#c9322c', orbitRadius: 210, orbitSpeed: 0.452, orbitAngle: 0 }),
    new Planet({ name: 'Jupiter', radius: 15, color: '#f4cdb7', orbitRadius: 270, orbitSpeed: 0.245, orbitAngle: 0 }),
    new Planet({ name: 'Saturn', radius: 15, color: '#fef29d', orbitRadius: 330, orbitSpeed: 0.181, orbitAngle: 0 }),
    new Planet({ name: 'Uranus', radius: 15, color: '#57a0ff', orbitRadius: 390, orbitSpeed: 0.128, orbitAngle: 0 }),
    new Planet({ name: 'Neptune', radius: 15, color: '#2746ac', orbitRadius: 240, orbitSpeed: 0.102, orbitAngle: 0 }),
    new Planet({ name: 'Pluto', radius: 15, color: '#cee2eb', orbitRadius: 270, orbitSpeed: 0.09, orbitAngle: 0 }),
];

scene.add(...planets);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    planets.forEach((planet, index) => {
        planet.orbitAngle += planet.orbitSpeed / 50;
        planet.position.x = (index + 1) * 30 * Math.cos(planet.orbitAngle);
        planet.position.z = (index + 1) * 30 * Math.sin(planet.orbitAngle);
    })
}

animate();