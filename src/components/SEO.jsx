import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, name, type }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      
      {/* Open Graph tags for social media */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type || 'website'} />
      <meta property='og:image' content='/src/assets/logo/logo1.png' />

      {/* Twitter cards */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/src/assets/logo/logo1.png' />
    </Helmet>
  );
}
