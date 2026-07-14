import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';
import Portfolio from '@/components/Portfolio';

export default function GalleryPage() {
  return (
    <Layout>
      <SEO
        title="Gallery | AV Eventz"
        description="Explore our gallery of corporate events, conferences, exhibitions and productions."
      />

      <PageHero
        title="Gallery"
        subtitle="A visual journey through our executed events."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />

      <section className="bg-[#111] py-16">
        <Portfolio />
      </section>
    </Layout>
  );
}
