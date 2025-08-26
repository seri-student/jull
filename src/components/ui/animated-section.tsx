import React, { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  disabled?: boolean;
  threshold?: number;
  rootMargin?: string;
  style?: CSSProperties;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.8,
  disabled = false,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  style = {}
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    disabled
  });

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getAnimationStyles = (): CSSProperties => {
    const baseStyles: CSSProperties = {
      transition: prefersReducedMotion 
        ? 'none' 
        : `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: prefersReducedMotion ? '0s' : `${delay}s`,
      willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
    };

    if (prefersReducedMotion) {
      return {
        ...baseStyles,
        opacity: 1,
        transform: 'none',
      };
    }

    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(30px)',
          };
        case 'fadeIn':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'none',
          };
        case 'scaleIn':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'scale(0.95)',
          };
        case 'slideLeft':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(-30px)',
          };
        case 'slideRight':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(30px)',
          };
        default:
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(30px)',
          };
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
    };
  };

  const combinedStyles: CSSProperties = {
    ...getAnimationStyles(),
    ...style,
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={combinedStyles}
    >
      {children}
    </div>
  );
};