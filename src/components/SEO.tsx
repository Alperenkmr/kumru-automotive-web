
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "RSS Kumru Automotive - Otomotiv sektöründe lider, yüksek kaliteli hidrolik hortum ve boru sistemleri tedarikçisi. Kaliteli hizmet ve ürünlerimizle tanışın.",
  canonicalUrl,
  ogType = "website",
  ogImage = "./lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
  structuredData
}) => {
  // Site adı
  const siteName = "RSS Kumru Automotive";
  
  // Başlık oluşturma - sayfa adı + site adı (toplam 60 karakterden az olacak şekilde)
  const fullTitle = `${title} | ${siteName}`;
  
  // Tam URL oluşturma
  const siteUrl = "https://rsskumru.com";
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      
      {/* Yapılandırılmış Veri (Schema.org) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
