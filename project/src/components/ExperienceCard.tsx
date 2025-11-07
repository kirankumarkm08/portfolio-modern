import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ExperienceItem } from './Experience';

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const direction = index % 2 === 0 ? 'left' : 'right';
  const { ref, animationClasses } = useScrollAnimation(direction);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border border-black dark:border-white p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] ${animationClasses}`}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2">
            <h3 className="text-2xl md:text-3xl font-bold">
              {experience.company}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
              {experience.period}
            </span>
          </div>
          <p className="text-base md:text-lg font-mono">
            {experience.role} • {experience.location}
          </p>
        </div>

        <div className="h-px bg-black dark:bg-white w-16" />

        <ul className="space-y-3 text-sm leading-relaxed">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5">→</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
