import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function TiltWrapper({ children, options = {} }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;

    // ✅ Disable tilt on touch devices (mobile UX improvement)
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches;

    if (!node || isTouchDevice) return;

    // ✅ Respect reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    VanillaTilt.init(node, {
      max: 12,
      speed: 500,
      glare: true,
      "max-glare": 0.15,
      scale: 1.03,
      gyroscope: true,
      ...options,
    });

    // ✅ Proper cleanup to prevent memory leaks
    return () => {
      if (node?.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return (
    <div
      ref={tiltRef}
      className="
        w-full 
        will-change-transform
        transition-transform duration-300
      "
    >
      {children}
    </div>
  );
}
