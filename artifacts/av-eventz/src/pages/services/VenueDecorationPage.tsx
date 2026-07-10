import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0055.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0058.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0059.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0060.jpg';
import Layout from '@/components/layout/Layout';

export default function VenueDecorationPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Venue Decoration & Thematic Styling | AV Eventz"
        seoDescription="Complete venue transformation — floral, fabric, lighting, and thematic décor."
        heroTitle="Venue Decoration"
        heroSubtitle="Transforming spaces with bespoke thematic décor, floral design, and styling."
        heroImage={heroImg}
        overview="We turn ordinary venues into extraordinary environments. Whether it's a sleek corporate gala, a vibrant themed party, or an elegant wedding, our design team curates every visual element — from floral arrangements and fabric draping to custom furniture and centerpieces."
        benefits={[
          'Bespoke thematic concept development',
          'Premium floral design and installations',
          'Custom fabric draping and masking',
          'Luxury furniture and prop rentals',
          'Integration of ambient up-lighting',
          'Attention to detail in table settings and centerpieces',
        ]}
        process={[
          { step: '01', title: 'Concept & Mood Boards', desc: 'Collaborating on the visual aesthetic and color palettes.' },
          { step: '02', title: 'Sourcing', desc: 'Procuring premium flowers, fabrics, and custom props.' },
          { step: '03', title: 'Production', desc: 'Building custom décor elements in advance.' },
          { step: '04', title: 'Transformation', desc: 'Rapid, precise installation at the venue to create the final look.' },
        ]}
        gallery={[
          { src: g1, alt: 'Thematic venue decor' },
          { src: g2, alt: 'Floral centerpiece' },
          { src: g3, alt: 'Elegant dining setup' },
        ]}
        faqs={[
          { q: 'Do you use real or artificial flowers?', a: 'We use high-quality real flowers, premium artificial silks, or a mix of both depending on the budget and design requirements.' },
          { q: 'Can you decorate outdoor spaces?', a: 'Yes, we specialize in outdoor venue styling, including temporary structures, fairy lighting, and weather-appropriate décor.' },
        ]}
        testimonial={{ quote: 'The transformation of the hotel ballroom was unbelievable. The floral installations and ambient lighting created the exact luxurious feel we wanted.', name: 'Geeta Nair', title: 'Client' }}
        relatedServices={[
          { title: 'Weddings', href: '/services/weddings' },
          { title: 'Birthdays', href: '/services/birthdays' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
