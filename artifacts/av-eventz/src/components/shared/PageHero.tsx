import { motion, type Variants } from 'framer-motion';
import { Link } from 'wouter';

interface Crumb { label: string; href: string; }
interface Props {
  title: string;
  subtitle?: string;
  breadcrumb?: Crumb[];
  bgImage?: string;
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function PageHero({ title, subtitle, breadcrumb, bgImage }: Props) {
  return (
    <section className="relative flex items-end min-h-[45vh] pt-32 pb-16 overflow-hidden bg-[#0a0a0a]">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="" className="w-full h-full object-cover opacity-25 saturate-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        </div>
      )}
      {!bgImage && <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1510]" />}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-6 text-xs font-sans uppercase tracking-widest text-muted-foreground" aria-label="Breadcrumb">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-primary/40">/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <div className="w-8 h-px bg-primary mb-6" />
          <h1 className="font-serif text-5xl md:text-7xl text-foreground leading-tight mb-4">{title}</h1>
          {subtitle && <p className="font-sans text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
