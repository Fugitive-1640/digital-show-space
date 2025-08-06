
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";

export const Contact = () => {
  const [inView, setInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@alexdeveloper.com",
      href: "mailto:hello@alexdeveloper.com",
      delay: "0s"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone", 
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      delay: "0.1s"
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      delay: "0.2s"
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "#", label: "GitHub", delay: "0s" },
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn", delay: "0.1s" },
    { icon: <Twitter size={24} />, href: "#", label: "Twitter", delay: "0.2s" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive cursor effect */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl pointer-events-none transition-all duration-500 ease-out opacity-60"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="text-center mb-16 relative z-10">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}>
          Get In <span className="hero-text animate-pulse">Touch</span>
        </h2>
        <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Ready to collaborate on your next project? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-8">
          <div className={`transform transition-all duration-1000 delay-300 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  href={info.href}
                  className={`flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group transform ${
                    inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } hover:scale-105 hover:shadow-lg animate-[slideInLeft_0.8s_ease-out_forwards]`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-pulse">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:rotate-12 group transform ${
                    inView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } animate-[scaleIn_0.6s_ease-out_forwards]`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <div className="group-hover:animate-bounce">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={`card-hover p-8 rounded-lg transform transition-all duration-1000 delay-400 ${
          inView ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
        } hover:scale-105 relative overflow-hidden`}>
          {/* Form background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
          
          <h3 className="text-2xl font-semibold mb-6 relative z-10">Send Message</h3>
          <form className="space-y-6 relative z-10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Input 
                  placeholder="Your Name" 
                  className="bg-background transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === 'name' && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
                )}
              </div>
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background transition-all duration-300 focus:scale-105 focus:shadow-lg"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                {focusedField === 'email' && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
                )}
              </div>
            </div>
            <div className="relative">
              <Input 
                placeholder="Subject" 
                className="bg-background transition-all duration-300 focus:scale-105 focus:shadow-lg"
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'subject' && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
              )}
            </div>
            <div className="relative">
              <Textarea 
                placeholder="Your Message" 
                rows={5} 
                className="bg-background resize-none transition-all duration-300 focus:scale-105 focus:shadow-lg"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
              />
              {focusedField === 'message' && (
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping" />
              )}
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
              <Send size={16} className="mr-2 group-hover:animate-pulse" />
              <span className="group-hover:animate-pulse">Send Message</span>
            </Button>
          </form>
        </div>
      </div>

      <div className={`text-center mt-16 pt-8 border-t border-border transform transition-all duration-1000 delay-700 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <p className="text-muted-foreground animate-pulse">
          © 2024 Alex Developer. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};
