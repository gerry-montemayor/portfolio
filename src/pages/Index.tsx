import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code2,
  Palette,
  Globe,
  Zap,
  ArrowRight,
  Download
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Languages" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Languages" },
    { name: "AWS", category: "Cloud" },
    { name: "UI/UX Design", category: "Design" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration and modern UI",
      tags: ["TypeScript", "WebSocket", "OpenAI", "Tailwind"],
      link: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business analytics with charts and graphs",
      tags: ["React", "D3.js", "Python", "FastAPI"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">Portfolio</div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Hi, I'm <span className="gradient-text">Alex</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg">
                  I create exceptional digital experiences with modern technologies. 
                  Passionate about clean code, innovative solutions, and bringing ideas to life.
                </p>
              </div>
              <div className="flex gap-4">
                <Button variant="hero" size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-glow" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className={`${isVisible ? 'scale-in' : 'opacity-0'}`}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Professional workspace" 
                  className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-xl text-muted-foreground">
                Passionate developer with 5+ years of experience creating digital solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 slide-up">
                <p className="text-lg leading-relaxed">
                  I'm a full-stack developer who loves turning complex problems into simple, 
                  beautiful designs. My journey in tech started with curiosity and has evolved 
                  into a passion for creating meaningful digital experiences.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the developer community.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button variant="hero">
                    Let's Connect
                  </Button>
                  <Button variant="outline-glow">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 slide-up">
                <Card className="card-elegant p-6 text-center">
                  <CardContent className="p-0">
                    <Code2 className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Clean Code</h3>
                    <p className="text-sm text-muted-foreground">Writing maintainable, scalable solutions</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant p-6 text-center">
                  <CardContent className="p-0">
                    <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Design Focus</h3>
                    <p className="text-sm text-muted-foreground">User-centered design approach</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant p-6 text-center">
                  <CardContent className="p-0">
                    <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Global Impact</h3>
                    <p className="text-sm text-muted-foreground">Building for worldwide accessibility</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant p-6 text-center">
                  <CardContent className="p-0">
                    <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Performance</h3>
                    <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and digital experiences
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 slide-up">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="text-lg py-3 px-6 justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 section-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="card-elegant overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                    <Code2 className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline-glow" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="slide-up">
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. 
                Let's create something amazing together.
              </p>
              
              <div className="flex justify-center gap-6 mb-12">
                <Button variant="hero" size="lg" className="group">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline-glow" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button variant="outline-glow" size="lg">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Alex Portfolio. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
