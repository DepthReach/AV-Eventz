export default function TrustedBy() {
  const logos = [
    "INDIAN OIL",
    "IDFC BANK",
    "DAINIK JAGRAN",
    "DAINIK BHASKAR",
    "MITRA INDUSTRIES",
    "RELIANCE",
    "TATA MOTORS",
    "HDFC LIFE"
  ];

  return (
    <section className="py-16 border-y border-primary/20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by India's Leading Brands</h4>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        {/* We need two containers for smooth infinite scroll */}
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <span 
              key={`logo-1-${index}`} 
              className="mx-12 md:mx-20 text-xl md:text-3xl font-serif font-bold text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
        <div className="animate-marquee whitespace-nowrap flex items-center absolute top-0 left-full">
          {logos.map((logo, index) => (
            <span 
              key={`logo-2-${index}`} 
              className="mx-12 md:mx-20 text-xl md:text-3xl font-serif font-bold text-muted-foreground hover:text-primary transition-colors duration-300 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
