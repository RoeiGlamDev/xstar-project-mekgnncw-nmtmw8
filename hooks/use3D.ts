import { useEffect, useRef } from 'react';

const use3D = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Initialize 3D rendering context
        const render3D = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Add 3D rendering logic here
        };

        const animate = () => {
            render3D();
            requestAnimationFrame(animate); // Loop the animation
        };

        animate(); // Start the animation loop

        return () => {
            // Cleanup if necessary
        };
    }, []);

    return canvasRef; // Return the ref for use in components
};

export default use3D;