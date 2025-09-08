import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface VariableProximityTextProps {
  text: string;
  className?: string;
}

export const VariableProximityText: React.FC<VariableProximityTextProps> = ({ 
  text, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = lettersRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      letters.forEach((letter, index) => {
        if (!letter) return;
        
        const letterRect = letter.getBoundingClientRect();
        const letterCenterX = letterRect.left + letterRect.width / 2;
        const letterCenterY = letterRect.top + letterRect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - letterCenterX, 2) + 
          Math.pow(e.clientY - letterCenterY, 2)
        );
        
        const maxDistance = 200;
        const proximity = Math.max(0, 1 - distance / maxDistance);
        
        gsap.to(letter, {
          scale: 1 + proximity * 0.5,
          fontWeight: 400 + proximity * 300,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    };

    const handleMouseLeave = () => {
      letters.forEach((letter) => {
        if (!letter) return;
        gsap.to(letter, {
          scale: 1,
          fontWeight: 700,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`cursor-default ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          ref={(el) => {
            if (el) lettersRef.current[index] = el;
          }}
          className="inline-block transition-all duration-300"
          style={{ fontWeight: 700 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};