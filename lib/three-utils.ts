import * as THREE from 'three'; // Importing Three.js library

export const createScene = () => {
    const scene = new THREE.Scene(); // Create a new scene
    scene.background = new THREE.Color(0x000000); // Set background to black
    return scene;
};

export const createCamera = (width: number, height: number) => {
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // Create a camera
    camera.position.z = 5; // Set camera position
    return camera;
};

export const createRenderer = (width: number, height: number) => {
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a renderer
    renderer.setSize(width, height); // Set renderer size
    return renderer;
};

export const createLight = () => {
    const light = new THREE.AmbientLight(0xffffff, 0.5); // Create ambient light
    return light;
};

export const createBox = () => {
    const geometry = new THREE.BoxGeometry(); // Create box geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Create material in pink color
    const cube = new THREE.Mesh(geometry, material); // Create mesh
    return cube;
};

export const animate = (renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
    const animateLoop = () => {
        requestAnimationFrame(animateLoop); // Create animation loop
        renderer.render(scene, camera); // Render scene
    };
    animateLoop(); // Start animation
};

export default {
    createScene,
    createCamera,
    createRenderer,
    createLight,
    createBox,
    animate,
};