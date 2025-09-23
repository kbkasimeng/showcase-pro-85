import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
    },
    {
      category: "Backend", 
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Figma", "VS Code"]
    }
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful interfaces with attention to user experience"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in teams and communicating clearly"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience building web applications. 
            I love turning complex problems into simple, beautiful solutions that users enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious student who fell in love with code. What began with simple 
              HTML pages has evolved into a passion for creating full-stack applications that 
              make a difference in people's lives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in continuous learning, clean code, and the power of collaboration. 
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open source, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card p-6 hover:shadow-hover transition-all duration-300">
                <highlight.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{highlight.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="glass-card p-6 hover:shadow-hover transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-muted rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;