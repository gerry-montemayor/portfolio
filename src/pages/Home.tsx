import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                Hello, I'm Gerry <span className="wave">👋</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a senior at Cornell University studying CS, passionate about AI, robotics, and software development. 
                
              </p>
            </div>
            
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">
                  View Resume
                </Link>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/gerry-montemayor" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/gerry-montemayor/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:gerardom1226@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/ffcee6ea-0b57-4963-abd2-9e541a2c146e.png"
              alt="Gerardo Montemayor graduation photo" 
              className="rounded-lg shadow-lg w-full max-w-md h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;