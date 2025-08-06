
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Analytics",
      description: "Data visualization dashboard with machine learning insights, interactive charts, and predictive analytics capabilities.",
      image: "/placeholder.svg",
      tags: ["Python", "React", "TensorFlow", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Weather App",
      description: "Cross-platform mobile application providing detailed weather forecasts with location-based services and push notifications.",
      image: "/placeholder.svg",
      tags: ["React Native", "Redux", "Weather API", "Maps"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="hero-text">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A showcase of my recent work, demonstrating expertise in modern 
          web technologies and innovative problem-solving approaches.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`card-hover rounded-lg overflow-hidden fade-in fade-in-delay-${index + 1}`}
          >
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-6xl opacity-20">💻</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline">
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
