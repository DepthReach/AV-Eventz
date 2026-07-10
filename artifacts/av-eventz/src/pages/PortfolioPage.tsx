import React from 'react';
import Layout from '@/components/layout/Layout';
import Portfolio from '@/components/Portfolio';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';

export default function PortfolioPage() {
  return (
    <Layout>
      <SEO title="Portfolio — Our Work" description="Browse AV Eventz's portfolio of corporate events, conferences, product launches, exhibitions, award nights, and more across Delhi NCR and India." />
      <PageHero
        title="Our Work"
        subtitle="A curated selection of events we've brought to life."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/portfolio' }]}
      />
      <div className="pt-20 pb-10 bg-[#111]">
        <Portfolio />
      </div>
    </Layout>
  );
}
