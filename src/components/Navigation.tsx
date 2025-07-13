import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-3xl font-bold text-secondary">
            GM
          </NavLink>
          <div className="flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                `hover:text-primary transition-colors ${isActive ? 'text-primary font-medium' : 'text-muted-foreground'}`
              }
            >
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;