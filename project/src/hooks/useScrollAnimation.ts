import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(direction: 'left' | 'right' | 'up' = 'up') {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-x-0 translate-y-0';
    }

    switch (direction) {
      case 'left':
        return 'opacity-0 -translate-x-20';
      case 'right':
        return 'opacity-0 translate-x-20';
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  return { ref, isVisible, animationClasses: getAnimationClasses() };
}
