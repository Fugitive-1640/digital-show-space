
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      
      <div className="text-center space-y-8 z-10 fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hi, I'm <span className="hero-text">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            Full Stack Developer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed fade-in fade-in-delay-1">
          I create beautiful, functional web applications with modern technologies. 
          Passionate about clean code, user experience, and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in fade-in-delay-2">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 fade-in fade-in-delay-3">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};
