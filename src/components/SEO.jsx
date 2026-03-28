import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, name, type }) {
  // Structured Data to encourage Google Sitelinks
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://imaarmep.co.uk/#website",
        "url": "https://imaarmep.co.uk/",
        "name": "IMAAR MEP",
        "image": "https://imaarmep.co.uk/favicon.png",
        "description": "Premium Mechanical, Electrical, and Plumbing engineering services globally."
      },
      {
        "@type": "SiteNavigationElement",
        "@id": "https://imaarmep.co.uk/#navigation",
        "name": ["About Us", "Our Services", "Contact Us"],
        "url": [
          "https://imaarmep.co.uk/about",
          "https://imaarmep.co.uk/services",
          "https://imaarmep.co.uk/Contact-Us"
        ]
      }
    ]
  };

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
      <meta property='og:url' content='https://imaarmep.co.uk/' />
      <meta property='og:image' content='/src/assets/logo/logo1.png' />

      {/* Twitter cards */}
      <meta name='twitter:creator' content={name} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/src/assets/logo/logo1.png' />

      {/* JSON-LD for Sitelinks */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
