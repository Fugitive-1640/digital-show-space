
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server, Smartphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const About = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "AWS", "Docker", "GraphQL", "Next.js"
  ];

  const experiences = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks.",
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building scalable APIs and server-side applications with robust architecture.",
      color: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native performance.",
      color: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user experiences.",
      color: "from-pink-500/10 to-violet-500/10"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          About <span className="hero-text">Me</span>
        </h2>
        <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          I'm a passionate full-stack developer with 5+ years of experience creating 
          digital solutions that make a difference. I love turning complex problems 
          into simple, beautiful, and intuitive designs.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h3 className={`text-2xl font-semibold mb-8 text-center transform transition-all duration-1000 delay-300 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Badge 
              key={skill}
              variant="secondary" 
              className={`text-sm py-2 px-4 hover:scale-110 transition-all duration-300 cursor-default transform ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:bg-primary hover:text-primary-foreground animate-[fadeInUp_0.6s_ease-out_forwards]`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          return (
            <Card 
              key={exp.title}
              className={`card-hover group transform transition-all duration-700 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } hover:rotate-1`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className="text-primary animate-pulse" />
                </div>
                <h4 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {exp.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
