import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0010.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0058.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0059.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0060.jpg';
import Layout from '@/components/layout/Layout';

export default function AnnualMeetsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Annual Meets & Offsites | AV Eventz"
        seoDescription="Year-end celebrations and annual gatherings that your team looks forward to."
        heroTitle="Annual Meets"
        heroSubtitle="Year-end celebrations and annual gatherings that your team looks forward to."
        heroImage={heroImg}
        overview="Annual meets are a crucial time to reflect on achievements and set the vision for the future. We transform standard corporate gatherings into memorable experiences that boost morale, foster team bonding, and celebrate company milestones in style."
        benefits={[
          'Thematic event conceptualization',
          'Comprehensive venue selection and management',
          'High-quality AV for leadership presentations',
          'Entertainment and party management',
          'Employee recognition setups',
          'Seamless transition from business to leisure',
        ]}
        process={[
          { step: '01', title: 'Theme Development', desc: 'Creating a cohesive theme that reflects the year’s achievements.' },
          { step: '02', title: 'Logistics Planning', desc: 'Coordinating travel, accommodation, and venue setup.' },
          { step: '03', title: 'Technical Rehearsals', desc: 'Ensuring all presentations and AV cues are flawless.' },
          { step: '04', title: 'Execution', desc: 'Managing the event flow from daytime meetings to evening celebrations.' },
        ]}
        gallery={[
          { src: g1, alt: 'Annual meet stage' },
          { src: g2, alt: 'Team building activity' },
          { src: g3, alt: 'Evening celebration' },
        ]}
        faqs={[
          { q: 'Can you integrate team-building activities?', a: 'Yes, we can organize indoor and outdoor team-building exercises tailored to your group size and objectives.' },
          { q: 'How do you handle large crowds for annual parties?', a: 'We use structured crowd management, efficient food and beverage flow planning, and robust security protocols.' },
        ]}
        testimonial={{ quote: 'Our best annual day yet. The transition from the serious morning sessions to the spectacular evening party was incredibly smooth.', name: 'Kavita Iyer', title: 'HR Director' }}
        relatedServices={[
          { title: 'Corporate Events', href: '/services/corporate-events' },
          { title: 'Award Nights', href: '/services/award-nights' },
          { title: 'Venue Decoration', href: '/services/venue-decoration' },
        ]}
      />
    </Layout>
  );
}
