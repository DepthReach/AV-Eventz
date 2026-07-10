import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0012.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0066.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0067.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0068.jpg';
import Layout from '@/components/layout/Layout';

export default function BrandPromotionsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Brand Promotions & Activations | AV Eventz"
        seoDescription="On-ground brand activation campaigns that create lasting impressions and drive engagement."
        heroTitle="Brand Promotions"
        heroSubtitle="On-ground brand activation campaigns that create lasting impressions."
        heroImage={heroImg}
        overview="Connect directly with your target audience through innovative on-ground brand activations. We design interactive and memorable promotional campaigns in malls, corporate parks, colleges, and public spaces to drive engagement, product trials, and brand recall."
        benefits={[
          'Creative activation concepts and interactive zones',
          'High-quality fabrication of promotional kiosks',
          'Trained promoters and brand ambassadors',
          'Permissions and licensing management',
          'Integration of digital interactions and photo ops',
          'Data capture and lead generation setups',
        ]}
        process={[
          { step: '01', title: 'Concept Creation', desc: 'Designing an engaging activity that highlights the product’s USP.' },
          { step: '02', title: 'Fabrication', desc: 'Building attractive, durable kiosks and interactive setups.' },
          { step: '03', title: 'Deployment', desc: 'Setting up at high-footfall locations and managing local permissions.' },
          { step: '04', title: 'Engagement', desc: 'Active audience interaction, sampling, and data collection.' },
        ]}
        gallery={[
          { src: g1, alt: 'Mall activation setup' },
          { src: g2, alt: 'Interactive brand kiosk' },
          { src: g3, alt: 'Product sampling activity' },
        ]}
        faqs={[
          { q: 'Do you handle mall permissions?', a: 'Yes, we manage all necessary permits and negotiations with venues for promotional space.' },
          { q: 'Can you integrate digital games or AR?', a: 'Absolutely. We frequently incorporate touchscreens, AR experiences, and digital gamification into our activations.' },
        ]}
        testimonial={{ quote: 'The mall activation drew incredible crowds. The interactive setup and enthusiastic promoters significantly boosted our local sales.', name: 'Pooja Reddy', title: 'Marketing Manager' }}
        relatedServices={[
          { title: 'Road Shows', href: '/services/road-shows' },
          { title: 'Product Launches', href: '/services/product-launches' },
          { title: 'Exhibitions', href: '/services/exhibitions' },
        ]}
      />
    </Layout>
  );
}
