
import { Code2, Database, Globe, Smartphone } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: <Database size={24} />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      description: "REST APIs, GraphQL, AWS, Docker",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="hero-text">Me</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm a passionate full-stack developer with 5+ years of experience building 
          scalable web applications and mobile solutions that make a difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {skills.map((skill, index) => (
          <div
            key={skill.title}
            className={`card-hover p-6 rounded-lg text-center fade-in fade-in-delay-${index + 1}`}
          >
            <div className="text-primary mb-4 flex justify-center">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
            <p className="text-muted-foreground">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg p-8 card-hover">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started coding in college and fell in love with creating digital experiences. 
              Over the years, I've worked with startups and established companies, 
              always focusing on writing clean, efficient code.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source projects, or hiking in the mountains.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>React/TypeScript</span>
              <span className="text-primary">95%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
            </div>
            
            <div className="flex justify-between">
              <span>Node.js/Python</span>
              <span className="text-primary">90%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
            </div>
            
            <div className="flex justify-between">
              <span>Database Design</span>
              <span className="text-primary">85%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
