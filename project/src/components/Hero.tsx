import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const { ref, animationClasses } = useScrollAnimation('up');

  return (
    <section
      id="hero"
      ref={ref as React.RefObject<HTMLElement>}
      className={`min-h-screen flex flex-col items-center justify-center pt-20 px-6 transition-all duration-1000 ${animationClasses}`}
    >
      <div className="max-w-7xl w-full">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none">
              KIRAN KUMAR KM
            </h1>

            <div className="border-l-2 border-black dark:border-white pl-6 space-y-3">
              <p className="text-base sm:text-lg md:text-xl tracking-wide">
                WEB3 FRONTEND DEVELOPER
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                Building decentralized experiences for the modern web. Specializing in React, Next.js, and blockchain integration.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="mailto:kirankumarkm1505@gmail.com"
              className="hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1"
            >
              kirankumarkm1505@gmail.com
            </a>
            <a
              href="tel:+917338552718"
              className="hover:opacity-60 transition-opacity border-b border-black dark:border-white pb-1"
            >
              +91 73385 52718
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
