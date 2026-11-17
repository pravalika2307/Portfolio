import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 6,
  ...props
}) {
  const cardRef = useRef(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 240, mass: 0.2 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Transform normalized mouse coordinates [0, 1] to 3D rotation angles
  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = Math.max(0, Math.min(1, clientX / rect.width));
    const normalizedY = Math.max(0, Math.min(1, clientY / rect.height));

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className={`relative will-change-transform ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}
