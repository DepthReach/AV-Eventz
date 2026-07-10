import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export default function SEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  const fullTitle = title
    ? `${title} | AV Eventz — Corporate Event Management`
    : 'AV Eventz | Corporate Event Management Company in Delhi NCR';
  const desc = description || 'AV Eventz is a leading corporate event management company offering conferences, exhibitions, product launches, annual meets, award ceremonies across Delhi NCR and India.';
  const url = canonical || 'https://aveventz.in/';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AV Eventz" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
