import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PageHero from '@/components/shared/PageHero';

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy | AV Eventz" />
      <PageHero title="Privacy Policy" breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <div className="py-20 bg-[#111]">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl prose prose-invert prose-headings:font-serif prose-a:text-primary">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8">Last Updated: July 2025</p>
          <h2>Introduction</h2>
          <p>At AV Eventz, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
          
          <h2>Data Collection</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul>
            <li>Identity Data: First name, last name, username or similar identifier.</li>
            <li>Contact Data: Billing address, email address, and telephone numbers.</li>
            <li>Usage Data: Information about how you use our website, products and services.</li>
          </ul>

          <h2>Cookies</h2>
          <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at avevent@zoho.in.</p>
        </div>
      </div>
    </Layout>
  );
}
