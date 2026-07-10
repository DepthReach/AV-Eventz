import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0017.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0047.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0048.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0049.jpg';
import Layout from '@/components/layout/Layout';

export default function AwardNightsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Award Nights & Gala Dinners | AV Eventz"
        seoDescription="Prestigious award ceremonies and gala nights executed with drama, precision, and elegance."
        heroTitle="Award Nights"
        heroSubtitle="Prestigious award ceremonies and gala nights with drama and precision."
        heroImage={heroImg}
        overview="Award nights are all about glamour, prestige, and flawless execution. We create spectacular environments that honor achievements and entertain guests. From red carpet arrivals to dramatic stage reveals and synchronized AV cues, we ensure every winner feels like a star."
        benefits={[
          'Spectacular stage design and thematic décor',
          'Precision show calling and AV synchronization',
          'Trophy and certificate management',
          'Red carpet and photo op experiences',
          'Top-tier entertainment and artist management',
          'Elegant lighting and sound design',
        ]}
        process={[
          { step: '01', title: 'Thematic Design', desc: 'Creating a luxurious visual identity for the ceremony.' },
          { step: '02', title: 'Technical Planning', desc: 'Programming lights, sound, and screen content for dramatic reveals.' },
          { step: '03', title: 'Run of Show', desc: 'Scripting the entire evening down to the second.' },
          { step: '04', title: 'Show Calling', desc: 'Expert backstage management ensuring seamless transitions.' },
        ]}
        gallery={[
          { src: g1, alt: 'Award stage setup' },
          { src: g2, alt: 'Winner on stage' },
          { src: g3, alt: 'Gala dinner ambiance' },
        ]}
        faqs={[
          { q: 'Can you manage the nomination and voting process?', a: 'While we focus on the event execution, we can integrate digital platforms to display live voting or nomination videos seamlessly.' },
          { q: 'Do you provide voiceover artists for announcements?', a: 'Yes, we provide professional "Voice of God" announcers and high-profile emcees.' },
        ]}
        testimonial={{ quote: 'The production quality was akin to a televised award show. The lighting cues and stage graphics made every award presentation thrilling.', name: 'Sameer Khan', title: 'Corporate Communications Head' }}
        relatedServices={[
          { title: 'Artist Management', href: '/services/artist-management' },
          { title: 'Stage Production', href: '/services/stage-production' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
