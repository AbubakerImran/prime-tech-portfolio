import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground3D Component
 * Creates a continuously moving 3D background with animated objects
 * Uses Canvas API for performance optimization
 */

interface MovingObject {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  type: 'sphere' | 'cube' | 'torus';
}

export const AnimatedBackground3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const objectsRef = useRef<MovingObject[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize moving objects
    const colors = ['#00D9FF', '#B000FF', '#39FF14', '#FF006E', '#00D9FF'];
    const types: ('sphere' | 'cube' | 'torus')[] = ['sphere', 'cube', 'torus'];

    objectsRef.current = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 40 + 20,
      color: colors[i % colors.length],
      opacity: Math.random() * 0.3 + 0.1,
      type: types[i % types.length],
    }));

    // Draw functions for different shapes
    const drawSphere = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number
    ) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity * 0.5;
      ctx.stroke();
    };

    const drawCube = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number
    ) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = opacity;
      ctx.fillRect(x - size / 2, y - size / 2, size, size);

      // Add border
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = opacity * 0.7;
      ctx.strokeRect(x - size / 2, y - size / 2, size, size);
    };

    const drawTorus = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number
    ) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.stroke();

      // Inner ring
      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    };

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw objects
      objectsRef.current.forEach((obj) => {
        // Update position
        obj.x += obj.vx;
        obj.y += obj.vy;

        // Bounce off walls
        if (obj.x - obj.size < 0 || obj.x + obj.size > canvas.width) {
          obj.vx *= -1;
          obj.x = Math.max(obj.size, Math.min(canvas.width - obj.size, obj.x));
        }
        if (obj.y - obj.size < 0 || obj.y + obj.size > canvas.height) {
          obj.vy *= -1;
          obj.y = Math.max(obj.size, Math.min(canvas.height - obj.size, obj.y));
        }

        // Slightly increase opacity on hover effect (pulse)
        obj.opacity += (Math.random() - 0.5) * 0.02;
        obj.opacity = Math.max(0.05, Math.min(0.4, obj.opacity));

        // Draw based on type
        switch (obj.type) {
          case 'sphere':
            drawSphere(obj.x, obj.y, obj.size, obj.color, obj.opacity);
            break;
          case 'cube':
            drawCube(obj.x, obj.y, obj.size, obj.color, obj.opacity);
            break;
          case 'torus':
            drawTorus(obj.x, obj.y, obj.size, obj.color, obj.opacity);
            break;
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0A0E27 100%)',
        zIndex: 0,
      }}
    />
  );
};

export default AnimatedBackground3D;
