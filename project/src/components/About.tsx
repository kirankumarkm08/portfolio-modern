import { Section } from './Section';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function About() {
  const skills = [
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'React.js',
    'Next.js',
    'Redux',
    'Zustand',
    'ethers.js',
    'web3.js',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'REST APIs',
    'GraphQL',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'React.js',
    'Next.js',
    'Redux',
    'Zustand',
    'ethers.js',
    'web3.js',
    'Tailwind CSS',
    'Node.js',
    'Git',
    'REST APIs',
    'GraphQL'
  ];

  const { ref: leftRef, animationClasses: leftAnim } = useScrollAnimation('left');
  const { ref: rightRef, animationClasses: rightAnim } = useScrollAnimation('right');
  const { ref: eduRef, animationClasses: eduAnim } = useScrollAnimation('up');
  const { ref: skillsRef, animationClasses: skillsAnim } = useScrollAnimation('up');

  return (
    <Section id="about" title="About Me" direction="left">
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${leftAnim}`}
          >
            <p className="mb-4">
              Frontend Developer specializing in Web3 technologies with extensive experience building decentralized applications and modern web interfaces.
            </p>
            <p>
              Currently architecting trading platforms and DEX interfaces that serve 50,000+ monthly active users across Ethereum and BSC networks.
            </p>
          </div>
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${rightAnim}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="mb-4">
              I focus on creating performant, accessible, and user-friendly applications using modern frontend frameworks and blockchain integration.
            </p>
            <p>
              My work spans from enterprise-grade DeFi platforms to responsive component libraries, always with an emphasis on code quality and user experience.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div
            ref={eduRef as React.RefObject<HTMLDivElement>}
            className={`space-y-3 transition-all duration-700 ${eduAnim}`}
          >
            <h3 className="text-lg font-bold tracking-wide uppercase">
              Education
            </h3>
            <div className="border-l-2 border-black dark:border-white pl-6 space-y-2 text-sm">
              <p className="font-bold">
                Bachelor of Computer Applications
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Expected Graduation: [Month Year]
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Relevant Coursework: Data Structures, Web Development, Database Systems, Software Engineering
              </p>
            </div>
          </div>

          <div
            ref={skillsRef as React.RefObject<HTMLDivElement>}
            className={`space-y-6 transition-all duration-700 ${skillsAnim}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-lg font-bold tracking-wide uppercase">
              Technical Skills
            </h3>
            <div className="relative overflow-hidden border-y border-black dark:border-white py-4">
              <div className="flex gap-4 animate-marquee whitespace-nowrap">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm font-mono px-4 py-2 border border-black dark:border-white rounded-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
