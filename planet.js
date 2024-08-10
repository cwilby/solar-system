import * as THREE from 'three';

export default class Planet extends THREE.Mesh
{
    constructor({ name, radius, color, orbitRadius, orbitSpeed, orbitAngle }) {
        super(
            new THREE.SphereGeometry(radius, 32, 16), 
            new THREE.MeshBasicMaterial({ color })
        );

        this.name = name;
        this.radius = radius;
        this.color = color;
        this.orbitRadius = orbitRadius;
        this.orbitSpeed = orbitSpeed;
        this.orbitAngle = orbitAngle;
        this.position.set(orbitRadius, 0, 0);
    }
}