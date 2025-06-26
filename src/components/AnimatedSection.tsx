
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'slide-up' | 'zoom-in' | 'rotate-in' | 'bounce-in';
  delay?: number;
  duration?: number;
  stagger?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  stagger = false
}) => {
  const { elementRef, isVisible } = useScrollAnimation(0.1, '-50px');

  const getAnimationClass = () => {
    const baseClass = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    const delayClass = delay > 0 ? `delay-${delay}` : '';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-left':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 -translate-x-16 blur-sm`;
        case 'fade-right':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-x-16 blur-sm`;
        case 'scale-up':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-75 blur-sm`;
        case 'slide-up':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-20 scale-95`;
        case 'zoom-in':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-50 rotate-12`;
        case 'rotate-in':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-90 -rotate-12`;
        case 'bounce-in':
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 scale-75 -translate-y-8`;
        default: // fade-up
          return `${baseClass} ${durationClass} ${delayClass} opacity-0 translate-y-12 scale-98 blur-sm`;
      }
    }
    
    return `${baseClass} ${durationClass} ${delayClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0 blur-0`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
