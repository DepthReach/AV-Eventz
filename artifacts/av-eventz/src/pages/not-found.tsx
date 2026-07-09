import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center p-8 border border-border bg-card">
        <h1 className="text-6xl font-serif text-primary mb-4">404</h1>
        <p className="text-xl text-foreground font-light mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm tracking-wider uppercase font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
