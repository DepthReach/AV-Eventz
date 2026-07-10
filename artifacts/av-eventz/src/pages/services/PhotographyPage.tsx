import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0034.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0036.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0041.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0042.jpg';
import Layout from '@/components/layout/Layout';

export default function PhotographyPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Event Photography & Videography | AV Eventz"
        seoDescription="Professional event photography, videography, live streaming, and post-production services."
        heroTitle="Photography & Videography"
        heroSubtitle="Capturing your event's best moments with professional precision."
        heroImage={heroImg}
        overview="Great events deserve to be remembered and shared. We provide comprehensive visual coverage using top-tier equipment and experienced professionals. From capturing candid interactions to producing high-end after-movies and executing live multi-camera broadcasts."
        benefits={[
          'Experienced corporate event photographers',
          'Cinematic videography and after-movie production',
          'Multi-camera setups for live switching and streaming',
          'Drone coverage for large outdoor events',
          'Same-day edits for social media integration',
          'Professional post-production and color grading',
        ]}
        process={[
          { step: '01', title: 'Briefing', desc: 'Understanding key moments, VIPs to capture, and deliverables.' },
          { step: '02', title: 'Setup', desc: 'Deploying the right gear, from gimbals to multi-cam control rooms.' },
          { step: '03', title: 'Coverage', desc: 'Unobtrusive, comprehensive capturing of the entire event.' },
          { step: '04', title: 'Post-Production', desc: 'Editing, color grading, and delivering final assets promptly.' },
        ]}
        gallery={[
          { src: g1, alt: 'Camera crew at event' },
          { src: g2, alt: 'Live streaming setup' },
          { src: g3, alt: 'Event photography in action' },
        ]}
        faqs={[
          { q: 'Can you provide a same-day highlight video?', a: 'Yes, we offer same-day edit services so you can share highlights at the closing session or on social media immediately.' },
          { q: 'Do you offer live streaming to multiple platforms?', a: 'We can stream high-quality feeds simultaneously to YouTube, Facebook, LinkedIn, or secure corporate portals.' },
        ]}
        testimonial={{ quote: 'The after-movie perfectly captured the energy of our launch. The quality was highly cinematic and delivered exactly on schedule.', name: 'Priyanka Bose', title: 'Digital Marketing Lead' }}
        relatedServices={[
          { title: 'Conferences', href: '/services/conferences' },
          { title: 'Product Launches', href: '/services/product-launches' },
          { title: 'Award Nights', href: '/services/award-nights' },
        ]}
      />
    </Layout>
  );
}
