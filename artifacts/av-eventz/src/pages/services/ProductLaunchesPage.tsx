import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0035.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0041.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0042.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0043.jpg';
import Layout from '@/components/layout/Layout';

export default function ProductLaunchesPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Product Launches | AV Eventz"
        seoDescription="Create buzz and make your product unforgettable with our premium product launch event services."
        heroTitle="Product Launches"
        heroSubtitle="Launch experiences that create buzz and make your product unforgettable."
        heroImage={heroImg}
        overview="A product launch is your brand's moment in the spotlight. We design dramatic reveals, immersive product zones, and captivating presentations that leave a lasting impression on the media, stakeholders, and your target audience."
        benefits={[
          'Creative concept development and thematic design',
          'Dramatic stage reveals and special effects',
          'Immersive product display and experience zones',
          'Media and press coordination support',
          'High-end technical production and lighting',
          'Brand activation and engagement strategies',
        ]}
        process={[
          { step: '01', title: 'Ideation', desc: 'Brainstorming creative launch concepts aligned with the product identity.' },
          { step: '02', title: 'Experience Design', desc: 'Designing the reveal moment, staging, and interactive product zones.' },
          { step: '03', title: 'Production', desc: 'Fabricating custom set pieces, preparing AV content, and technical rehearsals.' },
          { step: '04', title: 'The Launch', desc: 'Executing the launch sequence with precision timing and high impact.' },
        ]}
        gallery={[
          { src: g1, alt: 'Product reveal moment' },
          { src: g2, alt: 'Product experience zone' },
          { src: g3, alt: 'Launch event stage' },
        ]}
        faqs={[
          { q: 'Do you provide special effects for reveals?', a: 'Yes, we handle various effects including projection mapping, kabuki drops, pyrotechnics, and custom lighting sequences.' },
          { q: 'Can you build custom display units?', a: 'Our in-house fabrication team can build custom interactive displays tailored to your product.' },
        ]}
        testimonial={{ quote: 'The reveal sequence they designed gave our new product exactly the impactful introduction it needed.', name: 'Rohan Desai', title: 'Chief Product Officer' }}
        relatedServices={[
          { title: 'Brand Promotions', href: '/services/brand-promotions' },
          { title: 'LED Walls', href: '/services/led-walls' },
          { title: 'Stage Production', href: '/services/stage-production' },
        ]}
      />
    </Layout>
  );
}
