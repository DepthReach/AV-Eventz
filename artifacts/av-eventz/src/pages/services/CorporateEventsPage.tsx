import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Services/IMG-20260709-WA0061.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0028.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0029.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0030.jpg';
import g4 from '@assets/AV_Images/Extras/IMG-20260709-WA0031.jpg';
import Layout from '@/components/layout/Layout';

export default function CorporateEventsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Corporate Events Management | AV Eventz"
        seoDescription="Expert corporate event management for annual conferences, town halls, leadership offsites, and company gatherings across Delhi NCR and India."
        heroTitle="Corporate Events & Annual Meets"
        heroSubtitle="From intimate leadership offsites to 2,000-person annual conferences — precision-managed, brand-aligned, flawlessly delivered."
        heroImage={heroImg}
        overview="Corporate events are the backbone of your company's culture and communication. Whether it's a company-wide annual meet, a leadership offsite, a town hall, or a multi-department conference, every element must reflect your brand's values and ambition. We handle the strategy, logistics, production, and execution so your team can focus on the moment."
        benefits={[
          'Single point of contact from brief to wrap-up — no coordination chaos',
          'Venue sourcing and negotiation across 20+ cities',
          'Complete AV and technical production in-house',
          'Brand-aligned décor, staging, and visual identity',
          'Attendee registration, name badges, and hospitality',
          'Post-event reporting with attendance and engagement data',
        ]}
        process={[
          { step: '01', title: 'Discovery & Brief', desc: 'We begin with a detailed brief: objectives, audience, scale, budget, and brand guidelines.' },
          { step: '02', title: 'Concept & Venue', desc: 'We develop a creative concept and source the ideal venue — city, capacity, infrastructure.' },
          { step: '03', title: 'Production Planning', desc: 'Run-of-show, AV specs, décor mock-ups, vendor confirmations, and contingency planning.' },
          { step: '04', title: 'On-Ground Execution', desc: 'Our team is on-site from setup to teardown, managing every moment of the event.' },
          { step: '05', title: 'Post-Event', desc: 'Debrief, media deliverables, and a complete post-event report within 5 working days.' },
        ]}
        gallery={[
          { src: g1, alt: 'Corporate event stage setup' },
          { src: g2, alt: 'Annual conference setup' },
          { src: g3, alt: 'Corporate town hall' },
          { src: g4, alt: 'Leadership offsite' },
        ]}
        faqs={[
          { q: 'What is the minimum budget for a corporate event?', a: 'Corporate events typically start from ₹3–5 lakhs for smaller gatherings. For conferences with 200+ attendees, budgets usually range from ₹10–50 lakhs depending on city, venue, and production requirements.' },
          { q: 'Can you manage multi-city simultaneous events?', a: 'Yes — we regularly execute multi-city corporate events with a dedicated team in each location and a central command to maintain consistency.' },
        ]}
        testimonial={{ quote: "Working with AV Eventz was the first time in my career I didn't dread the event day. Everything was managed — I just showed up and watched it unfold.", name: 'Priya Mehta', title: 'Marketing Head' }}
        relatedServices={[
          { title: 'Conferences', href: '/services/conferences' },
          { title: 'Annual Meets', href: '/services/annual-meets' },
          { title: 'Award Nights', href: '/services/award-nights' },
          { title: 'Stage Production', href: '/services/stage-production' },
        ]}
      />
    </Layout>
  );
}
