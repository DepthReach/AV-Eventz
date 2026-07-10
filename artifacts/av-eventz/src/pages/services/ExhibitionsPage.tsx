import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0027.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0044.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0045.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0046.jpg';
import Layout from '@/components/layout/Layout';

export default function ExhibitionsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Exhibitions & Trade Shows | AV Eventz"
        seoDescription="Complete exhibition solutions including stall design, fabrication, and technical setup for trade shows."
        heroTitle="Exhibitions"
        heroSubtitle="Trade show stalls, exhibition stands, and complete booth fabrication."
        heroImage={heroImg}
        overview="Stand out on the busy exhibition floor with custom-designed booths and immersive experiences. From 3D design to final fabrication, we provide turnkey solutions for exhibitions that attract footfall and facilitate meaningful business interactions."
        benefits={[
          'Custom 3D booth design and rendering',
          'In-house fabrication for quality control',
          'Integration of interactive technology and LED displays',
          'Furniture, lighting, and branding solutions',
          'On-site management and maintenance during the show',
          'Hassle-free dismantling and logistics',
        ]}
        process={[
          { step: '01', title: 'Design & 3D Render', desc: 'Creating detailed 3D designs based on your brand guidelines and floor plan.' },
          { step: '02', title: 'Pre-fabrication', desc: 'Building structural elements in our workshop to ensure precision.' },
          { step: '03', title: 'On-site Build', desc: 'Efficient installation at the venue adhering to all safety regulations.' },
          { step: '04', title: 'Handover & Support', desc: 'Final walkthrough and dedicated technical support throughout the event.' },
        ]}
        gallery={[
          { src: g1, alt: 'Custom exhibition stall' },
          { src: g2, alt: 'Interactive brand booth' },
          { src: g3, alt: 'Trade show setup' },
        ]}
        faqs={[
          { q: 'Can you handle international exhibitions?', a: 'Yes, we manage exhibition setups across India and have partners for select international locations.' },
          { q: 'Do you offer modular stall options?', a: 'We offer both custom-built wooden/metal fabrication and premium modular solutions depending on your budget and requirements.' },
        ]}
        testimonial={{ quote: 'Our booth was the highlight of the trade show. The finish quality and the integrated LED screens really drew the crowd in.', name: 'Sonia Kapoor', title: 'Marketing Manager' }}
        relatedServices={[
          { title: 'Brand Promotions', href: '/services/brand-promotions' },
          { title: 'LED Walls', href: '/services/led-walls' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
