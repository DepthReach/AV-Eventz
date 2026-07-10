import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0013.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0050.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0051.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0052.jpg';
import Layout from '@/components/layout/Layout';

export default function ArtistManagementPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Artist Management & Celebrity Booking | AV Eventz"
        seoDescription="Talent sourcing, booking, and management for performers, speakers, and emcees."
        heroTitle="Artist Management"
        heroSubtitle="Talent sourcing, booking, and management for performers, speakers, and emcees."
        heroImage={heroImg}
        overview="The right talent elevates an event from good to unforgettable. We handle the sourcing, negotiation, and on-ground management of a wide array of artists — from celebrity performers and renowned keynote speakers to professional emcees and specialized entertainers."
        benefits={[
          'Direct access to a vast network of talent',
          'Transparent negotiation and contracting',
          'Management of artist technical riders',
          'Handling of travel, accommodation, and hospitality logistics',
          'On-site green room management and show calling',
          'Contingency planning for talent-related issues',
        ]}
        process={[
          { step: '01', title: 'Talent Curation', desc: 'Recommending artists that fit your event theme and budget.' },
          { step: '02', title: 'Contracting', desc: 'Handling negotiations and finalizing performance agreements.' },
          { step: '03', title: 'Rider Fulfillment', desc: 'Ensuring all technical and hospitality requirements are met.' },
          { step: '04', title: 'Show Management', desc: 'Managing the artist on-site from arrival to stage performance.' },
        ]}
        gallery={[
          { src: g1, alt: 'Live band performance' },
          { src: g2, alt: 'Celebrity guest on stage' },
          { src: g3, alt: 'Professional emcee hosting' },
        ]}
        faqs={[
          { q: 'Can you book Bollywood celebrities?', a: 'Yes, we have direct connections with management agencies for top Bollywood celebrities, singers, and comedians.' },
          { q: 'Do you handle the technical requirements for bands?', a: 'Absolutely. Our technical team works directly with the artist’s sound engineer to fulfill complex tech riders.' },
        ]}
        testimonial={{ quote: 'Getting the celebrity to the venue and onto the stage was handled with such professionalism. The performance was the highlight of our gala.', name: 'Ravi Verma', title: 'Event Sponsor' }}
        relatedServices={[
          { title: 'Award Nights', href: '/services/award-nights' },
          { title: 'Sound & Light', href: '/services/sound-light' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
