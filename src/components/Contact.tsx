
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hello@alexdeveloper.com",
      href: "mailto:hello@alexdeveloper.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="hero-text">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to collaborate on your next project? I'd love to hear from you. 
          Let's create something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="card-hover p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" className="bg-background" />
              <Input type="email" placeholder="Your Email" className="bg-background" />
            </div>
            <Input placeholder="Subject" className="bg-background" />
            <Textarea 
              placeholder="Your Message" 
              rows={5} 
              className="bg-background resize-none"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-border">
        <p className="text-muted-foreground">
          © 2024 Alex Developer. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};
