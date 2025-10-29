import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from '../components/Button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button onClick={() => window.location.href = '/'}>
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
