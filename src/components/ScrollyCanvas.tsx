"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 46;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Draw frame logic
  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0 || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Responsive Canvas
    // Logic for object-fit: cover
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // The render loop will catch the next frame automatically, 
        // but we can optionally force a draw here if needed.
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial sizing
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]); // Re-draw on resize once images are loaded

  // Animate on Scroll using native requestAnimationFrame for perfect sync
  useEffect(() => {
    if (!isLoaded) return;

    let requestRef: number;

    const renderLoop = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        // The container is relative to the viewport.
        // rect.top is 0 when the container starts touching the top of the viewport.
        // rect.top becomes negative as we scroll down.
        const scrollStart = rect.top; 
        const scrollHeight = rect.height - window.innerHeight;
        
        let progress = -scrollStart / scrollHeight;
        progress = Math.max(0, Math.min(1, progress));
        
        const currentFrame = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );
        
        drawImage(currentFrame);
      }
      requestRef = requestAnimationFrame(renderLoop);
    };

    requestRef = requestAnimationFrame(renderLoop);

    return () => cancelAnimationFrame(requestRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, images]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      {/* 
        By using 'fixed' instead of 'sticky', we guarantee the canvas is 
        pinned to the screen regardless of any parent layout constraints. 
        It stays at z-0, and subsequent sections with a solid background and z-20 
        will naturally scroll up and cover it when the user scrolls past 300vh.
      */}
      <div className="fixed top-0 left-0 h-screen w-full overflow-hidden z-0 pointer-events-none">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white z-20">
            <div className="text-xl animate-pulse">Loading experience...</div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
