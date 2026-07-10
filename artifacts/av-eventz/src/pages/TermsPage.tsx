import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';

export default function TermsPage() {
  return (
    <Layout>
      <SEO title="Terms of Service | AV Eventz" />
      <PageHero title="Terms of Service" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms' }]} />
      <div className="py-20 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl prose prose-invert prose-headings:font-serif prose-a:text-primary">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">Last Updated: July 2025</p>
          <h2>1. Terms</h2>
          <p>By accessing the website at aveventz.in, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          
          <h2>2. Service Terms</h2>
          <p>AV Eventz provides corporate event management services. Specific service agreements, deliverables, and timelines will be detailed in individual contracts or proposals provided to clients.</p>

          <h2>3. Payment and Cancellations</h2>
          <p>Payment terms and cancellation policies are specific to each event contract. Generally, a non-refundable deposit is required to secure dates and services. Cancellations made within specific timeframes prior to the event may incur additional fees as outlined in the contract.</p>

          <h2>4. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Haryana, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
    </Layout>
  );
}
