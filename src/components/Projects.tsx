
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Projects = () => {
  const [inView, setInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
      image: "/placeholder.svg", 
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and weather alerts for multiple locations worldwide.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Chart.js", "API"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for social media managers to track engagement, growth metrics, and content performance across multiple platforms.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "PostgreSQL", "D3.js", "REST API"],
      github: "#", 
      live: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Featured <span className="hero-text">Projects</span>
        </h2>
        <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-200 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className={`card-hover group overflow-hidden transform transition-all duration-700 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${hoveredProject === index ? 'scale-105 rotate-1' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform duration-200">
                  <Github size={16} />
                </Button>
                <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform duration-200">
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors duration-300">
                {project.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={tech}
                    variant="outline"
                    className={`transform transition-all duration-300 hover:scale-110 ${
                      hoveredProject === index ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="pt-0">
              <div className="flex gap-4 w-full">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:scale-105 transition-all duration-200"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 hover:scale-105 transition-all duration-200"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
