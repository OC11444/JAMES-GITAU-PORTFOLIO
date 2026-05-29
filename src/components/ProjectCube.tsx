import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Play,
  Terminal,
  Database,
  ShieldAlert,
  Cloud,
  FileCode2,
  Network
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
}

const ProjectCube = () => {
  const [currentFace, setCurrentFace] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "Parrot-GPT (AI Cyber Assistant)",
      description:
        "A terminal-based utility utilizing Python to securely automate local operating system command workflows, incorporating rigid input validation and permission blocks.",
      icon: <Terminal className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["Python", "Linux", "Automation", "Security"],
      liveUrl: "https://youtu.be/n165TtI_aLQ?si=m9ybqNpn42XThhE0",
      githubUrl: "https://github.com/OC11444/cyber-assistant.git",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 2,
      title: "Collaborative Task Manager",
      description:
        "A full-stack system featuring user management workflows, role-based access permissions, and detailed error logging for API request-response communication.",
      icon: <Database className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["Django", "React", "MySQL", "Docker", "AWS"],
      liveUrl: "https://oc11444.github.io/academic-task-manager/",
      githubUrl: "https://github.com/OC11444/collab_task_manager.git",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "AWS VPC Security Architecture",
      description:
        "Designed custom cloud VPC networks utilizing private/public subnet isolation and strict firewall Security Groups to ensure secure data pipelines.",
      icon: <ShieldAlert className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["AWS", "VPC", "Networking", "Security Groups"],
      liveUrl: "https://github.com/OC11444/aws-vpc-from-scratch.git",
      githubUrl: "https://github.com/OC11444/aws-vpc-from-scratch.git",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "AWS EC2 & RDS Infrastructure",
      description:
        "Provisioned cloud servers (EC2) and established secure data pipelines to relational storage engines (AWS RDS MySQL) for enterprise applications.",
      icon: <Cloud className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["AWS EC2", "AWS RDS", "MySQL", "Cloud"],
      liveUrl: "https://github.com/OC11444/aws-launching-ec2-tutorial.git",
      githubUrl: "https://github.com/OC11444/aws-launching-ec2-tutorial.git",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Backend Automation Scripts",
      description:
        "Developed a suite of custom Python and Bash scripts to automate backend maintenance tasks, check live database states, and scan environment dependencies.",
      icon: <FileCode2 className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["Python", "Bash", "Automation", "MySQL"],
      liveUrl: "https://github.com/OC11444/collab_task_manager/blob/main/check_db.py",
      githubUrl: "https://github.com/OC11444/collab_task_manager/blob/main/scan_deps.py",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Enterprise Network Simulation",
      description:
        "Designed and simulated multi-device LAN/WAN network topologies. Configured enterprise hardware, dynamic OSPF routing, and applied VLSM subnetting strategies.",
      icon: <Network className="w-24 h-24 mb-4 opacity-90 drop-shadow-lg" />,
      technologies: ["Cisco Packet Tracer", "OSPF", "VLSM", "Routing"],
      liveUrl: "https://github.com/OC11444",
      githubUrl: "https://github.com/OC11444",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  useEffect(() => {
    if (isAutoRotating) {
      const interval = setInterval(() => {
        setCurrentFace((prev) => (prev + 1) % projects.length);
      }, 5000); // slightly slower rotation so recruiters can read
      return () => clearInterval(interval);
    }
  }, [isAutoRotating, projects.length]);

  const rotateProject = (direction: 'next' | 'prev') => {
    setIsAutoRotating(false);
    if (direction === 'next') {
      setCurrentFace((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentFace((prev) => (prev - 1 + projects.length) % projects.length);
    }
    
    // Resume auto-rotation after interaction
    setTimeout(() => setIsAutoRotating(true), 15000);
  };

  const currentProject = projects[currentFace];

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore my technical implementations spanning cloud architecture, secure automation, and backend development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* STATIC 2D VISUAL CARD (Fixes the black box 3D bug) */}
          <div className="flex justify-center relative w-full max-w-md mx-auto">
            {/* The 'key' attribute forces React to re-animate the card when currentFace changes */}
            <a 
              key={currentProject.id}
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full aspect-square rounded-2xl bg-gradient-to-br ${currentProject.color} p-8 flex flex-col justify-center items-center text-white shadow-2xl transition-all duration-500 hover:scale-105 group animate-in fade-in zoom-in-95`}
              title={`Open ${currentProject.title}`}
            >
              <div className="flex-1 flex flex-col items-center justify-center w-full">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {currentProject.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mt-6 group-hover:text-white/90 transition-colors">
                  {currentProject.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mt-auto pt-6">
                {currentProject.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-black/25 rounded-full text-xs font-semibold tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
            
            {/* Navigation Arrows positioned on the sides of the static card */}
            <div className="absolute -left-5 md:-left-8 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => rotateProject('prev')}
                className="p-3 bg-background border border-border rounded-full hover:bg-muted transition-colors shadow-xl"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <div className="absolute -right-5 md:-right-8 top-1/2 transform -translate-y-1/2 z-10">
              <button
                onClick={() => rotateProject('next')}
                className="p-3 bg-background border border-border rounded-full hover:bg-muted transition-colors shadow-xl"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>

          {/* PROJECT DETAILS PANEL */}
          <div className="card-glow z-20">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentProject.color}`}></div>
              <h3 className="text-2xl font-bold text-foreground">{currentProject.title}</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              {currentProject.description}
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center justify-center py-3"
              >
                {currentProject.liveUrl.includes('youtu.be') ? (
                  <Play className="mr-2 w-5 h-5" />
                ) : (
                  <ExternalLink className="mr-2 w-5 h-5" />
                )}
                {currentProject.liveUrl.includes('youtu.be') ? 'Watch Demo' : 'Live Demo / Docs'}
              </a>
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center py-3"
              >
                <Github className="mr-2 w-5 h-5" />
                View Code
              </a>
            </div>

            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentFace(index);
                    setIsAutoRotating(false);
                    setTimeout(() => setIsAutoRotating(true), 15000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFace ? 'bg-primary scale-125' : 'bg-muted hover:bg-primary/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCube;