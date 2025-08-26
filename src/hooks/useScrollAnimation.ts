import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  disabled?: boolean;
}

interface UseScrollAnimationReturn {
  elementRef: React.RefObject<HTMLElement>;
  isVisible: boolean;
  hasTriggered: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    disabled = false
  } = options;

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      } else if (!triggerOnce && !entry.isIntersecting) {
        setIsVisible(false);
      }
    },
    [hasTriggered, triggerOnce]
  );

  useEffect(() => {
    const element = elementRef.current;
    
    // Early return if disabled or no element
    if (disabled || !element) return;

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      // Fallback for older browsers
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    // Cleanup function
    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersection, disabled]);

  return { elementRef, isVisible, hasTriggered };
};