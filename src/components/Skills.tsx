import { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'backend' | 'devops' | 'networking' | 'security';
}

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  // Replaced template skills with your actual CV stack
  const skills: Skill[] = [
    // Backend & Development
    { name: 'Python', level: 95, icon: '🐍', category: 'backend' },
    { name: 'Django', level: 90, icon: '🕸️', category: 'backend' },
    { name: 'REST APIs', level: 90, icon: '🔗', category: 'backend' },
    { name: 'MySQL', level: 85, icon: '🗄️', category: 'backend' },
    { name: 'FastAPI', level: 80, icon: '⚡', category: 'backend' },
    { name: 'C / Java', level: 75, icon: '☕', category: 'backend' },
    
    // Cloud & DevOps
    { name: 'Linux (Ubuntu/Parrot)', level: 95, icon: '🐧', category: 'devops' },
    { name: 'AWS (EC2, RDS, VPC)', level: 85, icon: '☁️', category: 'devops' },
    { name: 'Docker', level: 85, icon: '🐳', category: 'devops' },
    { name: 'Git & GitHub', level: 90, icon: '📚', category: 'devops' },
    { name: 'CI/CD (GitHub Actions)', level: 80, icon: '⚙️', category: 'devops' },
    { name: 'Bash Scripting', level: 85, icon: '⌨️', category: 'devops' },
    
    // Networking
    { name: 'LAN/WAN Config', level: 90, icon: '🌐', category: 'networking' },
    { name: 'IP Subnetting & VLSM', level: 95, icon: '🔢', category: 'networking' },
    { name: 'OSPF Routing', level: 85, icon: '🔄', category: 'networking' },
    { name: 'Cisco Packet Tracer', level: 90, icon: '🛠️', category: 'networking' },
    { name: 'Network Diagnostics', level: 85, icon: '📡', category: 'networking' },
    { name: 'Hardware Switches/Routers', level: 80, icon: '🔌', category: 'networking' },
    
    // Systems & Security
    { name: 'Cybersecurity Policy', level: 90, icon: '🛡️', category: 'security' },
    { name: 'Windows 11 Admin', level: 95, icon: '🪟', category: 'security' },
    { name: 'MFA & Access Control', level: 90, icon: '🔑', category: 'security' },
    { name: 'Active Directory Concepts', level: 85, icon: '👥', category: 'security' },
    { name: 'IT Support & Asset Mgt', level: 90, icon: '💻', category: 'security' },
    { name: 'Hardware Repair', level: 85, icon: '🔧', category: 'security' }
  ];

  const categories = {
    backend: { title: 'Backend & Dev', color: 'from-green-500 to-emerald-500' },
    devops: { title: 'Cloud & DevOps', color: 'from-blue-500 to-cyan-500' },
    networking: { title: 'Networking', color: 'from-orange-500 to-red-500' },
    security: { title: 'Systems & Security', color: 'from-purple-500 to-pink-500' }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate skills with staggered delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => new Set([...prev, skill.name]));
            }, index * 100);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: keyof typeof categories) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Technical Arsenal</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical capabilities spanning infrastructure setup, backend development, network engineering, and system administration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([categoryKey, categoryInfo]) => (
            <div key={categoryKey} className="card-glow">
              <div className="flex items-center mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${categoryInfo.color} mr-3`}></div>
                <h3 className="text-xl font-semibold">{categoryInfo.title}</h3>
              </div>

              <div className="space-y-4">
                {getSkillsByCategory(categoryKey as keyof typeof categories).map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-2 bg-gradient-to-r ${categoryInfo.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%',
                          transitionDelay: `${skills.indexOf(skill) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Updated Stats to match Hero section realistically */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Core IT Domains</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Uptime Mindset</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">CLI Proficient</div>
            </div>
            <div className="card-glass">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">Enterprise Projects</div>
            </div>
          </div>
        </div>

        {/* Authentic Certifications from CV */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Education & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-semibold mb-2">Cybersecurity Certification</h4>
              <p className="text-sm text-muted-foreground">Kenya Cyber Security Forensics Association (KCFSA)</p>
            </div>
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="font-semibold mb-2">Bachelor of Information Technology</h4>
              <p className="text-sm text-muted-foreground">The Co-operative University of Kenya (2024–2028)</p>
            </div>
            <div className="card-glass text-center">
              <div className="text-4xl mb-4">🐍</div>
              <h4 className="font-semibold mb-2">Python Programming</h4>
              <p className="text-sm text-muted-foreground">Oshwal College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;