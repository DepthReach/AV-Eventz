import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0006.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0053.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0054.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0055.jpg';
import Layout from '@/components/layout/Layout';

export default function DealerMeetsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Dealer Meets & Channel Partner Events | AV Eventz"
        seoDescription="Energising dealer and distributor meets that align teams, reward performance, and drive business growth."
        heroTitle="Dealer Meets"
        heroSubtitle="Energising dealer and distributor meets that align teams and drive performance."
        heroImage={heroImg}
        overview="Your channel partners and dealers are essential to your success. We design dealer meets that motivate, educate, and reward your network. From engaging business sessions to spectacular gala dinners, we create environments that foster loyalty and enthusiasm for your brand."
        benefits={[
          'End-to-end logistics and hospitality management',
          'Engaging stage designs for business presentations',
          'Entertainment and artist booking for gala nights',
          'Award and recognition segment planning',
          'Thematic décor and brand integration',
          'Team building and interactive activities',
        ]}
        process={[
          { step: '01', title: 'Objective Alignment', desc: 'Understanding the core message and goals for your channel partners.' },
          { step: '02', title: 'Itinerary Planning', desc: 'Balancing business sessions, networking, and entertainment.' },
          { step: '03', title: 'Production Setup', desc: 'Deploying stage, AV, and branding for all event segments.' },
          { step: '04', title: 'Event Management', desc: 'Seamlessly running the show from the welcome address to the final dinner.' },
        ]}
        gallery={[
          { src: g1, alt: 'Dealer meet business session' },
          { src: g2, alt: 'Gala dinner setup' },
          { src: g3, alt: 'Channel partner awards' },
        ]}
        faqs={[
          { q: 'Can you arrange for motivational speakers or entertainers?', a: 'Yes, through our artist management division, we can book industry-leading speakers and top-tier entertainment.' },
          { q: 'Do you manage travel and accommodation?', a: 'Yes, as part of our MICE services, we can handle end-to-end travel, transfers, and hotel logistics for your dealers.' },
        ]}
        testimonial={{ quote: 'The perfect balance of business and celebration. Our dealers left energized and more aligned with our brand vision than ever.', name: 'Alok Nath', title: 'VP Sales' }}
        relatedServices={[
          { title: 'Award Nights', href: '/services/award-nights' },
          { title: 'Artist Management', href: '/services/artist-management' },
          { title: 'MICE', href: '/services/mice' },
        ]}
      />
    </Layout>
  );
}
