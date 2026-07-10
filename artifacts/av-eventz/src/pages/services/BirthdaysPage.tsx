import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0021.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0030.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0031.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0032.jpg';
import Layout from '@/components/layout/Layout';

export default function BirthdaysPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Premium Birthday Celebrations & Parties | AV Eventz"
        seoDescription="Premium birthday celebrations, milestone parties, and private events executed to perfection."
        heroTitle="Birthdays & Private Events"
        heroSubtitle="Premium milestone celebrations designed with creativity and care."
        heroImage={heroImg}
        overview="Celebrate life's milestones with extraordinary style. We design and execute premium birthday parties, anniversaries, and private gatherings that are visually stunning and highly entertaining, tailored specifically to the personality of the host."
        benefits={[
          'Custom thematic concepts and personalized décor',
          'Curated entertainment, DJs, and live bands',
          'Premium lighting and sound setups for private venues',
          'Catering and bar management coordination',
          'Interactive activities and photo booths',
          'Complete setup and teardown management',
        ]}
        process={[
          { step: '01', title: 'Theme Selection', desc: 'Collaborating on a unique theme or aesthetic.' },
          { step: '02', title: 'Venue Styling', desc: 'Transforming the chosen space with custom décor and lighting.' },
          { step: '03', title: 'Entertainment', desc: 'Booking artists, DJs, or interactive performers.' },
          { step: '04', title: 'The Party', desc: 'Managing the flow of the evening so you can focus on your guests.' },
        ]}
        gallery={[
          { src: g1, alt: 'Milestone birthday setup' },
          { src: g2, alt: 'Thematic party decor' },
          { src: g3, alt: 'Private event lighting' },
        ]}
        faqs={[
          { q: 'Can you transform a private residence for a party?', a: 'Yes, we specialize in transforming backyards, farmhouses, and private estates into spectacular event spaces.' },
          { q: 'Do you manage kids’ birthday parties?', a: 'We focus primarily on premium milestone celebrations (18th, 21st, 50th, etc.) and luxury private events.' },
        ]}
        testimonial={{ quote: 'The 50th birthday party they organized for my husband was spectacular. The attention to detail in the theme was incredible.', name: 'Shalini Mehra', title: 'Client' }}
        relatedServices={[
          { title: 'Venue Decoration', href: '/services/venue-decoration' },
          { title: 'Sound & Light', href: '/services/sound-light' },
          { title: 'Artist Management', href: '/services/artist-management' },
        ]}
      />
    </Layout>
  );
}
