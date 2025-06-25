
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0
}) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-left':
          return `${baseClass} ${delayClass} opacity-0 translate-x-[-50px]`;
        case 'fade-right':
          return `${baseClass} ${delayClass} opacity-0 translate-x-[50px]`;
        case 'scale-up':
          return `${baseClass} ${delayClass} opacity-0 scale-95`;
        default: // fade-up
          return `${baseClass} ${delayClass} opacity-0 translate-y-[30px]`;
      }
    }
    
    return `${baseClass} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
