
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
  structuredData?: object;
  publishDate?: string;
  modifiedDate?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "RSS Kumru Automotive - Otomotiv sektöründe lider, yüksek kaliteli hidrolik hortum ve boru sistemleri tedarikçisi. Kaliteli hizmet ve ürünlerimizle tanışın.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
  keywords = ["RSS Kumru", "Automotive", "hidrolik hortum", "otomotiv", "boru sistemleri", "PTFE hortum", "teflon hortum", "turbo hortum"],
  language = "tr",
  author = "RSS Kumru Automotive",
  noindex = false,
  nofollow = false,
  socialMedia,
  structuredData,
  publishDate,
  modifiedDate,
}) => {
  // Site adı
  const siteName = "RSS Kumru Automotive";
  
  // Başlık oluşturma - sayfa adı + site adı (toplam 60 karakterden az olacak şekilde)
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  
  // Tam URL oluşturma
  const siteUrl = "https://rsskumru.com";
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  // Sosyal medya meta etiketleri
  const twitterCardType = socialMedia?.twitter?.cardType || "summary_large_image";
  const twitterSite = socialMedia?.twitter?.site || "@RSSKumru";
  const twitterCreator = socialMedia?.twitter?.creator || "@RSSKumru";

  // Schema.org yapılandırılmış veri
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": `${siteUrl}/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png`,
    "description": description,
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3",
      "addressLocality": "Gebze",
      "addressRegion": "Kocaeli",
      "postalCode": "41400",
      "addressCountry": "TR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+902627248824",
        "contactType": "customer service",
        "areaServed": ["TR", "EU", "US"],
        "availableLanguage": ["Turkish", "English"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/alperen-kumru-519596307/",
      "https://www.instagram.com/rss_kumru_automotive/",
      "https://www.facebook.com/rsskumru"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Temel Meta Etiketleri */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords.join(", ")} />
      
      {/* Gelişmiş SEO Meta Etiketleri */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0A1F44" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Publisher ve Copyright */}
      <meta name="publisher" content={siteName} />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteName}`} />
      
      {/* Tarih bilgileri */}
      {publishDate && <meta name="article:published_time" content={publishDate} />}
      {modifiedDate && <meta name="article:modified_time" content={modifiedDate} />}
      
      {/* Robots Direktifleri */}
      <meta 
        name="robots" 
        content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`} 
      />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${siteName} - ${title}`} />
      <meta property="og:locale" content={language === "tr" ? "tr_TR" : "en_US"} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Article specific */}
      {ogType === 'article' && publishDate && (
        <meta property="article:published_time" content={publishDate} />
      )}
      {ogType === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={`${siteName} - ${title}`} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      
      {/* Favicon ve Apple Touch Icon */}
      <link rel="icon" href="/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png" />
      
      {/* Schema.org Yapılandırılmış Veri */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
