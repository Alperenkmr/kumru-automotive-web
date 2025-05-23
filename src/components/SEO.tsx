
import React from 'react';
import { Helmet } from 'react-helmet';

interface SocialMediaProps {
  twitter?: {
    cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
  };
  facebook?: {
    appId?: string;
  };
}

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  keywords?: string[];
  language?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
  socialMedia?: SocialMediaProps;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "RSS Kumru Automotive - Otomotiv sektöründe lider, yüksek kaliteli hidrolik hortum ve boru sistemleri tedarikçisi. Kaliteli hizmet ve ürünlerimizle tanışın.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
  keywords = ["RSS Kumru", "Automotive", "hidrolik hortum", "otomotiv", "boru sistemleri"],
  language = "tr",
  author = "RSS Kumru Automotive",
  noindex = false,
  nofollow = false,
  socialMedia,
}) => {
  // Site adı
  const siteName = "RSS Kumru Automotive";
  
  // Başlık oluşturma - sayfa adı + site adı (toplam 60 karakterden az olacak şekilde)
  const fullTitle = `${title} | ${siteName}`;
  
  // Tam URL oluşturma
  const siteUrl = "https://rsskumru.com";
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Sosyal medya meta etiketleri
  const twitterCardType = socialMedia?.twitter?.cardType || "summary_large_image";
  const twitterSite = socialMedia?.twitter?.site || "@RSSKumru";
  const twitterCreator = socialMedia?.twitter?.creator || "@RSSKumru";

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />
      
      {/* Robots Direktifleri */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
      />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={language === "tr" ? "tr_TR" : "en_US"} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
    </Helmet>
  );
};

export default SEO;
