import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { ProjectItem } from './Projects';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const direction = index % 2 === 0 ? 'right' : 'left';
  const { ref, animationClasses } = useScrollAnimation(direction);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border border-black dark:border-white p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] ${animationClasses}`}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-3">
            <h3 className="text-2xl md:text-3xl font-bold">
              {project.title}
            </h3>
            <div className="flex gap-4 text-sm">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity border-b border-black dark:border-white"
                >
                  <Github className="w-4 h-4" />
                  <span>CODE</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity border-b border-black dark:border-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-black dark:border-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px bg-black dark:bg-white w-16" />

        <ul className="space-y-3 text-sm leading-relaxed">
          {project.highlights.map((highlight, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="flex-shrink-0 mt-1.5">→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
