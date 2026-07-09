export default function TrustedBy() {
  const clients = [
    'INDIAN OIL', 'IDFC BANK', 'DAINIK JAGRAN', 'DAINIK BHASKAR', 'MITRA INDUSTRIES'
  ];
  // Duplicate for seamless loop
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="bg-[#0d0d0d] py-14 overflow-hidden border-y border-primary/10">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-10 bg-primary/50" />
        <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by India's finest companies
        </p>
        <div className="h-px w-10 bg-primary/50" />
      </div>
      <div className="marquee-wrapper relative flex overflow-hidden" aria-label="Client logos">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />
        <div className="marquee-track flex whitespace-nowrap" aria-hidden="true">
          {doubled.map((client, i) => (
            <div key={i}
              className="px-16 font-sans text-[13px] uppercase tracking-[0.25em] text-foreground/25 hover:text-primary hover:opacity-100 transition-all duration-500 cursor-default select-none"
              role="listitem"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
