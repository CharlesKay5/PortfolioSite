'use client'
import React, { useEffect, useState } from 'react';
import styles from './GradientCircle.module.css';

const GradientCircle: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed w-[1200px] h-[1200px] ${styles.radialGreen} rounded-full pointer-events-none z-0`}
      style={{
        transform: `translate(-50%, -50%)`,
        left: `calc(${position.x}px - 20px)`,
        top: `${position.y}px`,
        zIndex: 1,
    }}
    />
  );
};

export default GradientCircle;
