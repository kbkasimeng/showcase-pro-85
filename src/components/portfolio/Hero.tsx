import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-primary opacity-20 animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-gradient-secondary opacity-30 animate-float" style={{animationDelay: '2s'}} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Building Digital</span>
            <br />
            <span className="text-foreground">Experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer crafting beautiful, functional web applications 
            with modern technologies and attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:shadow-hover text-primary-foreground border-0 px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:hello@example.com"
              className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;