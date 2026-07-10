import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0011.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0063.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0064.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0065.jpg';
import Layout from '@/components/layout/Layout';

export default function RoadShowsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Road Shows & Multi-City Events | AV Eventz"
        seoDescription="Consistent and impactful multi-city road show logistics and execution."
        heroTitle="Road Shows"
        heroSubtitle="Multi-city road show logistics, venue coordination, and brand consistency."
        heroImage={heroImg}
        overview="Taking your brand on the road requires meticulous logistics and consistent execution across multiple locations. We manage complex multi-city roadshows, ensuring your message, production quality, and brand experience remain uncompromised, whether in a metro city or a tier-2 town."
        benefits={[
          'Centralized management for multi-city execution',
          'Consistent stage design and branding across locations',
          'Efficient logistics and transport of event assets',
          'Local venue sourcing and vendor management',
          'Standardized reporting and feedback collection',
          'Scalable production setups based on venue size',
        ]}
        process={[
          { step: '01', title: 'Route Planning', desc: 'Developing the optimal itinerary and timeline across targeted cities.' },
          { step: '02', title: 'Standardization', desc: 'Designing adaptable setups that maintain brand consistency in different spaces.' },
          { step: '03', title: 'Logistics execution', desc: 'Managing the movement of teams, equipment, and collaterals.' },
          { step: '04', title: 'Local Delivery', desc: 'On-ground management utilizing local knowledge with central oversight.' },
        ]}
        gallery={[
          { src: g1, alt: 'Road show stage setup' },
          { src: g2, alt: 'Brand activation vehicle' },
          { src: g3, alt: 'Audience engagement' },
        ]}
        faqs={[
          { q: 'How many cities can you cover simultaneously?', a: 'With our extensive network, we can manage simultaneous events in up to 10 cities, or sequential tours across 50+ locations.' },
          { q: 'Do you provide promotional staff in different cities?', a: 'Yes, we source and train professional local promoters and emcees for each city to ensure local language compatibility.' },
        ]}
        testimonial={{ quote: 'Executing 15 cities in 30 days seemed impossible, but AV Eventz delivered the exact same high-quality experience at every single stop.', name: 'Manish Bhatia', title: 'National Sales Head' }}
        relatedServices={[
          { title: 'Brand Promotions', href: '/services/brand-promotions' },
          { title: 'Product Launches', href: '/services/product-launches' },
          { title: 'Exhibitions', href: '/services/exhibitions' },
        ]}
      />
    </Layout>
  );
}
