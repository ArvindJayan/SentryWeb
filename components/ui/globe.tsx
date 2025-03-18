"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => { },
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0 / 255, 150 / 255, 136 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [35.6895, 139.6917], size: 0.04 },
    { location: [48.8566, 2.3522], size: 0.06 },
    { location: [38.9072, -77.0369], size: 0.05 },
    { location: [55.7558, 37.6173], size: 0.04 },
    { location: [51.5074, -0.1278], size: 0.06 },
    { location: [39.9042, 116.4074], size: 0.05 },
    { location: [-33.8688, 151.2093], size: 0.04 },
    { location: [28.6139, 77.209], size: 0.05 },
    { location: [-15.8267, -47.9218], size: 0.04 },
    { location: [40.7128, -74.006], size: 0.06 },
    { location: [41.9028, 12.4964], size: 0.04 },
    { location: [19.4326, -99.1332], size: 0.05 },
    { location: [37.5665, 126.978], size: 0.06 },
    { location: [6.5244, 3.3792], size: 0.04 },
    { location: [30.0444, 31.2357], size: 0.05 },
    { location: [23.8103, 90.4125], size: 0.04 },
    { location: [14.5995, 120.9842], size: 0.06 },
    { location: [31.2304, 121.4737], size: 0.04 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [41.0082, 28.9784], size: 0.05 },
    { location: [-34.6037, -58.3816], size: 0.06 },
    { location: [35.6895, 51.389], size: 0.04 },
    { location: [52.5200, 13.4050], size: 0.04 },
    { location: [45.4642, 9.1900], size: 0.06 },
    { location: [25.276987, 55.296249], size: 0.04 },
    { location: [60.1695, 24.9354], size: 0.05 },
    { location: [34.0522, -118.2437], size: 0.06 },
    { location: [-22.9068, -43.1729], size: 0.04 },
    { location: [13.7563, 100.5018], size: 0.06 },
    { location: [55.7558, 37.6173], size: 0.04 },
    { location: [45.8150, 15.9819], size: 0.05 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
