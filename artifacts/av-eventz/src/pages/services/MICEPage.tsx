import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0014.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0105.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0106.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0107.jpg';
import Layout from '@/components/layout/Layout';

export default function MICEPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="MICE Services - Meetings, Incentives, Conferences & Exhibitions | AV Eventz"
        seoDescription="Complete MICE solutions offering end-to-end management for corporate meetings, incentive travel, and conferences."
        heroTitle="MICE Solutions"
        heroSubtitle="Meetings, incentives, conferences, and exhibitions — complete end-to-end management."
        heroImage={heroImg}
        overview="We provide comprehensive MICE (Meetings, Incentives, Conferences, and Exhibitions) services, combining precise event execution with seamless hospitality and travel logistics. Whether you are hosting an intimate board meeting or an international incentive trip, we deliver a flawless experience."
        benefits={[
          'Turnkey solutions combining events and hospitality',
          'Destination selection and venue sourcing',
          'Flight, transfer, and accommodation management',
          'Customized incentive travel itineraries',
          'On-site hospitality desks and dedicated support',
          'Integration of world-class event production',
        ]}
        process={[
          { step: '01', title: 'Destination Scouting', desc: 'Finding the perfect location that fits the budget and objective.' },
          { step: '02', title: 'Logistics Integration', desc: 'Syncing travel schedules with the event agenda.' },
          { step: '03', title: 'Event Production', desc: 'Designing and executing the core meetings or gala events.' },
          { step: '04', title: 'Guest Experience', desc: 'Managing VIP hospitality, local tours, and personalized care.' },
        ]}
        gallery={[
          { src: g1, alt: 'Corporate offsite location' },
          { src: g2, alt: 'Incentive trip group' },
          { src: g3, alt: 'Conference meeting setup' },
        ]}
        faqs={[
          { q: 'Do you handle international MICE groups?', a: 'Yes, we manage logistics and production for groups traveling to popular international MICE destinations.' },
          { q: 'Can you handle visas and ticketing?', a: 'We partner with specialized travel agencies to provide seamless visa, ticketing, and insurance support as part of our MICE package.' },
        ]}
        testimonial={{ quote: 'Taking 300 employees to Goa for an offsite could have been a logistical nightmare, but AV Eventz handled the flights, hotels, and the events flawlessly.', name: 'Nisha Desai', title: 'Operations Director' }}
        relatedServices={[
          { title: 'Conferences', href: '/services/conferences' },
          { title: 'Dealer Meets', href: '/services/dealer-meets' },
          { title: 'Corporate Events', href: '/services/corporate-events' },
        ]}
      />
    </Layout>
  );
}
