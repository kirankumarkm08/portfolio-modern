import { Section } from './Section';
import { ProjectCard } from './ProjectCard';

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function Projects() {
  const projects: ProjectItem[] = [
    {
      title: 'Digital Banking Dashboard',
      description: 'JPMorgan-inspired secure dashboard with real-time transaction charts, authentication, and role-based access control',
      technologies: ['TypeScript', 'React', 'Next.js', 'Chart.js', 'Tailwind'],
      highlights: [
        'Implemented CI/CD via GitHub Actions with 95%+ test coverage',
        'Reduced QA effort by 60% through automated testing',
        'Built secure authentication and role-based access system',
        'Real-time data visualization with Chart.js'
      ],
      githubUrl: 'https://github.com/your-profile'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce storefront with Stripe integration, product filtering, optimistic UI updates, and server-side rendering',
      technologies: ['JavaScript', 'React', 'Next.js', 'Stripe API'],
      highlights: [
        'Integrated Stripe payment processing for secure transactions',
        'Implemented SEO optimization via Next.js SSR',
        'Increased organic traffic by 45%',
        'Built responsive product catalog with advanced filtering'
      ],
      githubUrl: 'https://github.com/your-profile'
    }
  ];

  return (
    <Section id="projects" title="Projects" direction="left">
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
