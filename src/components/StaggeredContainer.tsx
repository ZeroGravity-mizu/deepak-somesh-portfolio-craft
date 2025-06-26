
import React from 'react';
import { useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface StaggeredContainerProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'zoom-in';
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  itemClassName = '',
  delay = 150,
  animation = 'fade-up'
}) => {
  const { containerRef, visibleItems } = useStaggeredAnimation(children.length, delay);

  const getItemAnimationClass = (isVisible: boolean) => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-left':
          return `${baseClass} opacity-0 -translate-x-8 scale-95`;
        case 'fade-right':
          return `${baseClass} opacity-0 translate-x-8 scale-95`;
        case 'scale-up':
          return `${baseClass} opacity-0 scale-75`;
        case 'zoom-in':
          return `${baseClass} opacity-0 scale-50 rotate-6`;
        default: // fade-up
          return `${baseClass} opacity-0 translate-y-8 scale-95`;
      }
    }
    
    return `${baseClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
  };

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`${getItemAnimationClass(visibleItems[index])} ${itemClassName}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default StaggeredContainer;
