import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
