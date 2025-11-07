import { Section } from "./Section";
import { ExperienceCard } from "./ExperienceCard";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "Zeroswap Labs",
      role: "Frontend Developer",
      period: "Aug 2023 – Present",
      location: "",
      achievements: [
        "Architected and deployed DEX trading interface using React.js and Next.js with ethers.js/web3.js for Web3 integration, serving 50K+ monthly active users across Ethereum and BSC",
        "Optimized app performance: code splitting, lazy loading in Next.js, reduced initial load by 30%, improved Lighthouse score from 72 to 94",
        "Implemented accessible UI in TypeScript, Redux, Tailwind; ensured WCAG 2.1 AA compliance, 98%+ browser compatibility",
        "Collaborated in Agile sprints with backend/product teams, delivered 15+ features, increased user retention by 22% QoQ",
        "Led code reviews and CI/CD pipeline via GitHub Actions, reduced deployment errors by 35%, accelerated releases",
      ],
    },
    {
      company: "VCD Studio",
      role: "Frontend Developer",
      period: "May 2023 – Present",
      location: "",
      achievements: [
        "Shipped 5+ Figma designs as React applications using Tailwind and ShadCN UI across  client projects",
        "Built comprehensive component library with Storybook, reduced development time by 40%, improved design consistency",
        "Integrated REST APIs with React Query, reduced redundant API calls by 50%, improved application responsiveness",
        "Ensured cross-browser and device compatibility with zero critical UI bugs in production",
      ],
    },
    {
      company: "Freelancer",
      role: "frontend Developer",
      period: "Jan 2022 – Apr 2023",
      location: "",
      achievements: [
        "Successfully completed 5 client projects ranging from e-commerce platforms to SaaS applications",
        "Delivered end-to-end solutions using React, Node.js, and MongoDB with 100% client satisfaction rate",
        "Managed project timelines, client communications, and technical requirements independently",
        "Built responsive, mobile-first applications with modern UI/UX practices and accessibility standards",
      ],
    },
  ];

  return (
    <Section id="experience" title="Experience" direction="right">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </Section>
  );
}
