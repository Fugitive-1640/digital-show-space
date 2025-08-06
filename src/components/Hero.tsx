
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor following element */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <div className="text-center space-y-8 z-10 max-w-4xl px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            Hi, I'm <span className="hero-text inline-block animate-[pulse_2s_ease-in-out_infinite]">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            <span className="inline-block animate-[float_3s_ease-in-out_infinite]">Full Stack</span>{" "}
            <span className="inline-block animate-[float_3s_ease-in-out_infinite] [animation-delay:0.5s]">Developer</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          I create beautiful, functional web applications with modern technologies. 
          Passionate about clean code, user experience, and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 group"
          >
            <span className="group-hover:animate-pulse">View My Work</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
          {[
            { icon: Github, delay: "0s" },
            { icon: Linkedin, delay: "0.1s" },
            { icon: Mail, delay: "0.2s" }
          ].map(({ icon: Icon, delay }, index) => (
            <a 
              key={index}
              href="#" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: delay }}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_infinite] opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
        <ChevronDown size={32} className="text-muted-foreground animate-pulse" />
      </div>
    </section>
  );
};
