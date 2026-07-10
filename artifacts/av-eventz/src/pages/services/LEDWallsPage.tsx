import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0047.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0048.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0049.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0050.jpg';
import Layout from '@/components/layout/Layout';

export default function LEDWallsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="LED Walls & Display Solutions | AV Eventz"
        seoDescription="Large-format LED screen rental, installation, and content display solutions."
        heroTitle="LED Walls & Screens"
        heroSubtitle="High-resolution LED displays, curved screens, and immersive visual solutions."
        heroImage={heroImg}
        overview="Visuals are critical to audience engagement. We provide top-tier LED video walls and display technology for crystal-clear presentations and stunning graphics. From standard backdrops to complex curved and mapped configurations, we bring your content to life."
        benefits={[
          'High-resolution indoor and outdoor LED panels (P2 to P4)',
          'Custom configurations: curved, split, or ceiling-mounted',
          'Professional media servers (Resolume, Watchout)',
          'Seamless content switching and PIP capabilities',
          'Experienced vision mixers and technicians',
          'Bright, flawless displays even in daylight',
        ]}
        process={[
          { step: '01', title: 'Requirement Analysis', desc: 'Determining the optimal pixel pitch and size based on venue and viewing distance.' },
          { step: '02', title: 'Content Mapping', desc: 'Preparing media servers to handle custom screen resolutions.' },
          { step: '03', title: 'Installation', desc: 'Precision rigging and panel alignment for a seamless canvas.' },
          { step: '04', title: 'Operation', desc: 'Flawless execution of content playback during the event.' },
        ]}
        gallery={[
          { src: g1, alt: 'Curved LED wall setup' },
          { src: g2, alt: 'Large format presentation screen' },
          { src: g3, alt: 'Split screen stage design' },
        ]}
        faqs={[
          { q: 'What resolution do you need for our presentation?', a: 'We will provide you with an exact pixel map (e.g., 3840x1080) for your design team to create pixel-perfect content.' },
          { q: 'Are your screens suitable for outdoor daytime events?', a: 'Yes, we use high-brightness outdoor-rated LED panels specifically designed to combat sunlight.' },
        ]}
        testimonial={{ quote: 'The clarity of the P2 LED wall was incredible. Even the smallest text on our financial slides was perfectly legible from the back of the hall.', name: 'Sanjay Dutt', title: 'CFO' }}
        relatedServices={[
          { title: 'Stage Production', href: '/services/stage-production' },
          { title: 'Conferences', href: '/services/conferences' },
          { title: 'Product Launches', href: '/services/product-launches' },
        ]}
      />
    </Layout>
  );
}
