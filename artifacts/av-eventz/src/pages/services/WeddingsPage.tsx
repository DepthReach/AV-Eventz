import React from 'react';
import ServiceTemplate from '@/components/shared/ServiceTemplate';
import heroImg from '@assets/AV_Images/Extras/IMG-20260709-WA0020.jpg';
import g1 from '@assets/AV_Images/Extras/IMG-20260709-WA0021.jpg';
import g2 from '@assets/AV_Images/Extras/IMG-20260709-WA0028.jpg';
import g3 from '@assets/AV_Images/Extras/IMG-20260709-WA0029.jpg';
import Layout from '@/components/layout/Layout';

export default function WeddingsPage() {
  return (
    <Layout>
      <ServiceTemplate
        seoTitle="Luxury Wedding Planning & Execution | AV Eventz"
        seoDescription="Luxury wedding planning with flawless execution, bespoke décor, and timeless elegance."
        heroTitle="Weddings"
        heroSubtitle="Luxury wedding planning with flawless execution and timeless elegance."
        heroImage={heroImg}
        overview="We bring our signature precision and production quality to luxury weddings. Understanding that this is your most personal event, we blend spectacular design, premium hospitality, and flawless execution to create a celebration that is uniquely yours."
        benefits={[
          'Bespoke thematic décor and floral design',
          'Premium technical setups for Sangeet and Reception',
          'Complete vendor and artist management',
          'Guest hospitality and logistics coordination',
          'High-end photography and cinematography integration',
          'Stress-free execution allowing families to celebrate',
        ]}
        process={[
          { step: '01', title: 'Consultation', desc: 'Understanding your vision, style, and cultural requirements.' },
          { step: '02', title: 'Design & Curation', desc: 'Creating mood boards, selecting venues, and finalizing décor.' },
          { step: '03', title: 'Planning', desc: 'Detailed itineraries, menu tasting, and entertainment booking.' },
          { step: '04', title: 'The Big Day', desc: 'Invisible, precise management ensuring everything runs beautifully.' },
        ]}
        gallery={[
          { src: g1, alt: 'Luxury wedding stage' },
          { src: g2, alt: 'Sangeet stage production' },
          { src: g3, alt: 'Wedding floral decor' },
        ]}
        faqs={[
          { q: 'Do you do destination weddings?', a: 'Yes, we provide complete destination wedding management including guest travel and local logistics.' },
          { q: 'Can you handle technical setups for large Sangeet events?', a: 'Absolutely. We apply our corporate-grade AV and stage production expertise to create concert-level Sangeet experiences.' },
        ]}
        testimonial={{ quote: 'They took all the stress away. The décor was breathtaking, and the execution was incredibly professional. We actually got to enjoy our own wedding.', name: 'Anjali & Rahul', title: 'Clients' }}
        relatedServices={[
          { title: 'Venue Decoration', href: '/services/venue-decoration' },
          { title: 'Artist Management', href: '/services/artist-management' },
          { title: 'Photography & Videography', href: '/services/photography-videography' },
        ]}
      />
    </Layout>
  );
}
