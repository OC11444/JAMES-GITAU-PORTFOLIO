import { useState, useEffect } from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/james-profile.jpg'; 

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Updated to match your CV's technical focus
  const textArray = [
    'Cloud Security (AWS)', 
    'DevSecOps Enthusiast', 
    'Linux Systems Admin', 
    'Network Security'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % textArray.length;
      const fullText = textArray[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Profile Picture */}
      <div className="absolute top-8 right-8 z-20">
        <div className="group cursor-pointer">
          <img
            src={profileImage}
            alt="James Gitau Njenga"
            className="w-20 h-20 rounded-full border-4 border-primary/20 object-cover transition-all duration-500 group-hover:scale-[3] group-hover:z-50 group-hover:shadow-intense group-click:scale-[3] group-click:z-50"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">
              Hardening Systems &amp; Scaling Cloud Infrastructure
            </span>
            <span className="text-gradient">James Gitau Njenga</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            <span className="inline-block">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Cybersecurity-first IT Systems &amp; DevSecOps enthusiast. Learning by building and securing AWS and Linux environments—automating deployments, tightening access controls, and improving reliability across cloud and networked systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a 
              href="mailto:gitaujames2005@gmail.com"
              className="btn-ghost group"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get In Touch
            </a>
          </div>

          {/* Authentic Student/Developer Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Enterprise-Level Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">CLI-First Approach</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">BIT</div>
              <div className="text-sm text-muted-foreground">The Co-operative University</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;