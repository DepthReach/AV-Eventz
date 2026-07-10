import { Link } from 'wouter';
import SEO from '@/components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404 — Page Not Found" />
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6">
        <div className="font-serif text-[120px] leading-none text-primary/20">404</div>
        <h1 className="font-serif text-4xl text-foreground mb-4">Page Not Found</h1>
        <p className="font-sans text-muted-foreground mb-10 text-center max-w-md">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="border border-primary text-primary px-8 py-4 font-sans text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
          Return Home
        </Link>
      </div>
    </>
  );
}
