
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayedText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(texts[textIndex].slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, textIndex, isTyping, texts]);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Animated morphing background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 morph-background"></div>
      
      {/* Floating particles with different animations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-primary/30 particle-float' :
              i % 3 === 1 ? 'w-1 h-1 bg-accent/40 floating-element' :
              'w-3 h-3 bg-primary/20 pulse-animation'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive multi-layer cursor effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out morph-background"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-accent/6 to-primary/6 rounded-full blur-2xl pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />
      
      <div className="text-center space-y-8 z-10 max-w-4xl px-6">
        {/* Profile Image/Logo Section */}
        <div className="flex justify-center mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.1s_forwards]">
          <div className="relative group">
            {/* Rotating border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-[spin_3s_linear_infinite]"></div>
            
            {/* Profile image container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background transform transition-all duration-500 group-hover:scale-110 hover-glow magnetic-hover">
              <img 
                src="/lovable-uploads/0afa7303-3e33-47bb-9162-6e0152af65b1.png" 
                alt="Profile" 
                className="w-full h-full object-cover animated-gradient-overlay"
              />
              
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating tech elements around the image */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-2 h-2 bg-primary/60 rounded-full floating-element"></div>
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-accent/60 rounded-full wiggle-animation"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] hover-glow">
            Hi, I'm <span className="animated-gradient-text inline-block wiggle-animation">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] min-h-[3rem] flex items-center justify-center">
            <span className="typewriter border-r-2 border-primary">
              {displayedText}
            </span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] shimmer-effect p-4 rounded-lg">
          I create beautiful, functional web applications with modern technologies. 
          Passionate about clean code, user experience, and innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
          <Button 
            size="lg" 
            onClick={() => navigate('/projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 group ripple-effect glowing-border magnetic-hover"
          >
            <span className="group-hover:animate-pulse text-glow">View My Work</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/25 card-3d magnetic-hover"
          >
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-muted/20 border border-transparent hover:border-primary/20 hover:shadow-lg hover:shadow-primary/25"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-muted/20 border border-transparent hover:border-blue-400/20 hover:shadow-lg hover:shadow-blue-400/25"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:hello@alexdeveloper.com"
            className="text-muted-foreground hover:text-green-400 transition-all duration-300 transform hover:scale-110 p-3 rounded-full hover:bg-muted/20 border border-transparent hover:border-green-400/20 hover:shadow-lg hover:shadow-green-400/25"
            aria-label="Send Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-[bounce_2s_infinite] opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards] color-shift">
        <ChevronDown size={32} className="text-muted-foreground animate-pulse hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Additional floating geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 border border-primary/20 rotate-45 floating-element opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-12 h-12 bg-accent/10 rounded-full pulse-animation"></div>
      <div className="absolute top-1/3 right-40 w-8 h-20 bg-primary/10 transform rotate-12 wiggle-animation"></div>
      <div className="absolute bottom-1/3 left-40 w-20 h-8 bg-accent/10 transform -rotate-12 morph-background"></div>
    </section>
  );
};
