import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0051.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0052.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0053.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0054.jpg';
import Layout from '@/components/layout/Layout';

export default function SoundLightPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Sound & Lighting Equipment | AV Eventz"
        seoDescription="Pro-grade sound systems, automated lighting rigs, and technical crew for corporate events."
        heroTitle="Sound & Lighting"
        heroSubtitle="Professional audio systems and dynamic lighting design."
        heroImage={heroImg}
        overview="Crystal clear audio and dynamic lighting are the invisible pillars of a successful event. We deploy industry-standard PA systems, line arrays, and intelligent lighting rigs, operated by seasoned engineers to ensure your event looks and sounds spectacular."
        benefits={[
          'Top-tier audio brands (JBL, L-Acoustics, d&b audiotechnik)',
          'Clear speech intelligibility for conferences',
          'High-impact sound for concerts and gala nights',
          'Intelligent moving heads, wash lights, and profile spots',
          'Custom lighting design and programming',
          'Experienced sound engineers and lighting designers',
        ]}
        process={[
          { step: '01', title: 'Acoustic & Venue Assessment', desc: 'Evaluating the room to design the optimal audio coverage and lighting plots.' },
          { step: '02', title: 'System Design', desc: 'Specifying the exact equipment needed for the desired impact.' },
          { step: '03', title: 'Rigging & Tuning', desc: 'Installing equipment and using SMAART software to tune the room.' },
          { step: '04', title: 'Live Mixing', desc: 'Expert operation during the event for perfect sound levels and lighting cues.' },
        ]}
        gallery={[
          { src: g1, alt: 'Audio mixing console' },
          { src: g2, alt: 'Intelligent lighting rig' },
          { src: g3, alt: 'Line array speakers' },
        ]}
        faqs={[
          { q: 'Can you handle technical riders for live bands?', a: 'Yes, our inventory and engineers are fully equipped to meet the strict technical riders of top-tier artists.' },
          { q: 'Do you provide wireless lapel and headset microphones?', a: 'We provide high-end Shure and Sennheiser wireless systems ensuring drop-free, clear audio for speakers.' },
        ]}
        testimonial={{ quote: 'The audio was crystal clear throughout the massive hall, and the lighting design completely changed the mood of the room for the evening party.', name: 'Vivek Sharma', title: 'Event Organizer' }}
        relatedServices={[
          { title: 'Stage Production', href: '/services/stage-production' },
          { title: 'Award Nights', href: '/services/award-nights' },
          { title: 'Artist Management', href: '/services/artist-management' },
        ]}
      />
    </Layout>
  );
}
