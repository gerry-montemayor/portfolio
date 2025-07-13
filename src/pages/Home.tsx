import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                Hi, I'm Gerry!
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Full Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                I create clean, modern web applications with a focus on user experience 
                and performance. Let's build something great together.
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
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src={heroImage} 
              alt="Professional workspace" 
              className="rounded-lg shadow-lg w-full max-w-md h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;