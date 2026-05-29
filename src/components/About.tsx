import { Server, Shield, Network, Cloud } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "IT Support & Networking",
      description: "Diagnosing network bottlenecks (OSPF, VLSM), hardware troubleshooting, and managing Linux/Windows environments."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps", 
      description: "Provisioning AWS infrastructure (EC2, RDS, VPCs) and implementing containerization with Docker and CI/CD pipelines."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Systems Security",
      description: "Applying the CIA triad, threat intelligence, and ethical hacking principles to enforce strict security protocols and access controls."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust Python, Django, and FastAPI systems with MySQL, baked with a security-first mindset."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Bachelor of Information Technology student at The Co-operative University of Kenya, combining a strong foundation in backend development with a deep passion for cloud infrastructure and DevSecOps.
              </p>
              <p>
                My technical philosophy is built on the <strong>&quot;Shift Left&quot;</strong> principle. Following an intensive 4-month training program at the Kenya Cyber Security Forensics Association (KCFSA), I gained hands-on experience in ethical hacking, threat intelligence, and incident response. I use this knowledge of the CIA triad and threat levels to bake security directly into my backend architectures and AWS cloud deployments from day one.
              </p>
              <p className="font-semibold text-foreground">
                Currently, I am actively seeking DevSecOps intern/junior DevSecOps opportunities in the Nairobi and Kiambu areas.
              </p>
            </div>

            <div className="mt-8">
              <a 
                href="#contact"
                className="btn-hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-glass group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Professional & Academic Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Independent Developer</h4>
                      <p className="text-primary">Technical Projects & Automation</p>
                      <p className="text-sm text-muted-foreground">Jan 2024 - Present</p>
                      <p className="mt-2 text-muted-foreground">
                        Developing tools like Parrot-GPT cyber assistant, automating Linux/Bash backend maintenance, and deploying custom AWS cloud infrastructure (EC2/VPC).
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-secondary rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Cybersecurity Intensive Training</h4>
                      <p className="text-primary">Kenya Cyber Security Forensics Association</p>
                      <p className="text-sm text-muted-foreground">4-Month Program</p>
                      <p className="mt-2 text-muted-foreground">
                        Completed hands-on training in ethical hacking, threat intelligence, and incident response. Conducted case studies on threat levels and the CIA triad to establish a "Shift Left" DevSecOps mindset.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="card-glass">
                      <h4 className="font-semibold text-lg">Bachelor of Information Technology</h4>
                      <p className="text-primary">The Co-operative University of Kenya</p>
                      <p className="text-sm text-muted-foreground">2024 - 2028</p>
                      <p className="mt-2 text-muted-foreground">
                        Pursuing a comprehensive IT degree with a focus on network administration, secure software development, and systems engineering.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;