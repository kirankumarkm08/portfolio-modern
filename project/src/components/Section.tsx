import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up';
}

export function Section({ id, title, children, direction = 'left' }: SectionProps) {
  const { ref, animationClasses } = useScrollAnimation(direction);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`min-h-screen py-24 px-6 lg:px-12 border-b border-gray-200 dark:border-gray-800 transition-all duration-1000 ease-out ${animationClasses}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase">
              {title}
            </h2>
            <div className="h-px bg-black dark:bg-white w-24" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
