import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0062.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0032.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0034.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0036.jpg';
import Layout from '@/components/layout/Layout';

export default function ConferencesPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Conference Management Services | AV Eventz"
        seoDescription="Professional conference management services offering seamless execution, stage design, AV production, and speaker management."
        heroTitle="Conferences"
        heroSubtitle="Multi-day conference design, seamless logistics, and flawless technical execution."
        heroImage={heroImg}
        overview="Conferences require meticulous planning, precise timing, and robust technical support. From keynote presentations to breakout sessions, we manage the entire lifecycle of your conference to ensure a smooth flow of events and an engaging experience for all attendees."
        benefits={[
          'End-to-end conference logistics management',
          'State-of-the-art AV, lighting, and stage design',
          'Registration and attendee flow management',
          'Speaker coordination and green room management',
          'Custom branding and directional signage',
          'Comprehensive contingency planning',
        ]}
        process={[
          { step: '01', title: 'Planning & Strategy', desc: 'Developing the conference framework, timeline, and budget allocations.' },
          { step: '02', title: 'Venue & Layout', desc: 'Selecting venues and designing layouts for main halls and breakout rooms.' },
          { step: '03', title: 'Technical Design', desc: 'Mapping out AV requirements, staging, and lighting for maximum impact.' },
          { step: '04', title: 'Execution', desc: 'Flawless on-day execution with dedicated stage managers and technical crew.' },
        ]}
        gallery={[
          { src: g1, alt: 'Main conference hall' },
          { src: g2, alt: 'Speaker on stage' },
          { src: g3, alt: 'Audience at conference' },
        ]}
        faqs={[
          { q: 'Can you handle simultaneous breakout sessions?', a: 'Yes, we provide dedicated AV setups and personnel for multiple concurrent breakout sessions.' },
          { q: 'Do you offer live streaming?', a: 'Absolutely. We provide high-quality multi-camera live streaming and hybrid event solutions.' },
        ]}
        testimonial={{ quote: 'Our three-day conference ran flawlessly. The technical team was brilliant and the stage design was exactly what we envisioned.', name: 'Vikram Singh', title: 'Event Director' }}
        relatedServices={[
          { title: 'Corporate Events', href: '/services/corporate-events' },
          { title: 'Stage Production', href: '/services/stage-production' },
          { title: 'MICE', href: '/services/mice' },
        ]}
      />
    </Layout>
  );
}
