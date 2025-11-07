import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "kirankumarkm1505@gmail.com",
      href: "mailto:kirankumarkm1505@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+91 73385 52718",
      href: "tel:+917338552718",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "/in/your-profile",
      href: "https://www.linkedin.com/in/kirankumar-km/",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "/your-profile",
      href: "https://github.com/kirankumarkm08",
    },
  ];

  return (
    <Section id="contact" title="Get In Touch" direction="right">
      <div className="space-y-12">
        <p className="text-sm leading-relaxed max-w-3xl">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind, want to discuss Web3 development, or just
          want to connect, feel free to reach out through any of the channels
          below.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {contactLinks.map((contact, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            const { ref, animationClasses } = useScrollAnimation(direction);

            return (
              <a
                key={contact.label}
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`border border-black dark:border-white p-6 hover:scale-[1.02] transition-all duration-500 group ${animationClasses}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <contact.icon className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-wider">
                      {contact.label}
                    </p>
                    <p className="text-sm font-mono break-all">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
