import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0043.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0044.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0045.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0046.jpg';
import Layout from '@/components/layout/Layout';

export default function StageProductionPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Stage Production & Design | AV Eventz"
        seoDescription="Full stage design, rigging, scenic elements, and structural production for large-scale events."
        heroTitle="Stage Production"
        heroSubtitle="Full stage design, structural engineering, and scenic fabrication."
        heroImage={heroImg}
        overview="The stage is the focal point of your event. We design and construct impressive, safe, and functional stage setups. Combining architectural design, structural integrity, and scenic artistry, we create platforms that command attention and support complex technical requirements."
        benefits={[
          'Custom 3D stage design and visualization',
          'Safe and certified structural rigging systems',
          'Integration of LED walls and lighting trusses',
          'Custom scenic fabrication and prop building',
          'Multi-level staging and motorized reveals',
          'Compliance with strict safety standards',
        ]}
        process={[
          { step: '01', title: 'Design & Render', desc: 'Creating scaled 3D models integrating branding and technology.' },
          { step: '02', title: 'Engineering', desc: 'Calculating load capacities for rigging and structures.' },
          { step: '03', title: 'Fabrication', desc: 'Building custom set pieces in our production workshop.' },
          { step: '04', title: 'Installation', desc: 'Safe, efficient construction on-site by trained professionals.' },
        ]}
        gallery={[
          { src: g1, alt: 'Large stage construction' },
          { src: g2, alt: 'Custom stage design' },
          { src: g3, alt: 'Rigging and truss setup' },
        ]}
        faqs={[
          { q: 'Do you provide structural safety certifications?', a: 'Yes, all our large-scale staging and rigging setups adhere to strict safety protocols.' },
          { q: 'Can you build stages over existing structures like pools?', a: 'Yes, we provide specialized structural staging solutions for challenging venues.' },
        ]}
        testimonial={{ quote: 'The multi-level stage they built completely transformed the venue. It was structurally solid and visually stunning.', name: 'Karan Mathur', title: 'Production Manager' }}
        relatedServices={[
          { title: 'LED Walls', href: '/services/led-walls' },
          { title: 'Sound & Light', href: '/services/sound-light' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
