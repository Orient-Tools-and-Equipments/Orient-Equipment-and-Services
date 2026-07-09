"use client";

import React, { useRef, useEffect } from "react";

/**
 * ParticleCanvas — a fixed, full-screen particle network background.
 * Mounted once in layout.tsx at z-index 0 so all page content sits above it.
 * Sections should use transparent or glass-clear backgrounds to let particles show through.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const mouse = { x: null as number | null, y: null as number | null, radius: 180 };

    class Particle {
      x: number; y: number;
      directionX: number; directionY: number;
      size: number; color: string;

      constructor(x: number, y: number, dx: number, dy: number, size: number, color: string) {
        this.x = x; this.y = y;
        this.directionX = dx; this.directionY = dy;
        this.size = size; this.color = color;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius + this.size) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 5;
            this.y -= (dy / dist) * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    let particles: Particle[] = [];

    function init() {
      particles = [];
      const count = (canvas!.height * canvas!.width) / 5500;
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2.5 + 1;
        const x = Math.random() * (canvas!.width - size * 4) + size * 2;
        const y = Math.random() * (canvas!.height - size * 4) + size * 2;
        const dx = Math.random() * 0.5 - 0.25;
        const dy = Math.random() * 0.5 - 0.25;
        const hue = Math.random() > 0.5 ? "140, 200, 255" : "180, 140, 255";
        particles.push(new Particle(x, y, dx, dy, size, `rgba(${hue}, 0.95)`));
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dist =
            (particles[a].x - particles[b].x) ** 2 +
            (particles[a].y - particles[b].y) ** 2;

          const threshold = (canvas.width / 7) * (canvas.height / 7);
          if (dist < threshold) {
            const opacity = 1 - dist / 20000;
            const nearMouse =
              mouse.x !== null &&
              Math.sqrt((particles[a].x - mouse.x) ** 2 + (particles[a].y - (mouse.y ?? 0)) ** 2) < mouse.radius;

            ctx!.strokeStyle = nearMouse
              ? `rgba(200, 220, 255, ${Math.min(opacity * 1.4, 1)})`
              : `rgba(140, 180, 255, ${opacity * 0.9})`;
            ctx!.lineWidth = 1.2;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      // Pure black fill — section semi-transparent backgrounds layer on top
      ctx!.fillStyle = "rgba(0, 0, 0, 1)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => p.update());
      connect();
    }

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseOut  = () => { mouse.x = null; mouse.y = null; };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseOut);

    onResize();
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
