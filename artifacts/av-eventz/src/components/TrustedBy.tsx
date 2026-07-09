export default function TrustedBy() {
  const clients = ['INDIAN OIL', 'IDFC BANK', 'DAINIK JAGRAN', 'DAINIK BHASKAR', 'MITRA INDUSTRIES'];
  
  return (
    <section id="clients" className="bg-[#0d0d0d] py-16 overflow-hidden border-b border-primary/10">
      <div className="flex items-center justify-center gap-4 mb-10 opacity-70">
        <div className="h-[1px] w-8 bg-primary"></div>
        <p className="font-sans text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by India's finest companies
        </p>
        <div className="h-[1px] w-8 bg-primary"></div>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="px-12 font-sans text-[13px] uppercase tracking-[0.25em] text-foreground/30 hover:text-primary hover:opacity-100 transition-all duration-300 select-none"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
