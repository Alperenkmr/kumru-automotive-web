
import React from 'react';
import { Helmet } from 'react-helmet';

// Schema.org türleri için desteklenen türler
type SchemaType = 
  | 'WebPage' 
  | 'Organization' 
  | 'Product' 
  | 'Article' 
  | 'BlogPosting' 
  | 'BreadcrumbList'
  | 'FAQPage'
  | 'LocalBusiness'
  | 'WebSite'
  | 'ContactPage'
  | 'AboutPage'
  | 'Person';

interface SocialMediaProps {
  twitter?: {
    cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
    site?: string;
    creator?: string;
  };
  facebook?: {
    appId?: string;
  };
  instagram?: {
    username?: string;
  };
  linkedin?: {
    companyName?: string;
  };
}

interface GeoLocationProps {
  latitude: string;
  longitude: string;
  placeName: string;
}

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  additionalImages?: string[];
  keywords?: string[];
  language?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  category?: string;
  structuredData?: Record<string, any>;
  breadcrumbs?: Array<{name: string, url: string}>;
  noindex?: boolean;
  nofollow?: boolean;
  socialMedia?: SocialMediaProps;
  geolocation?: GeoLocationProps;
  alternateLanguages?: Array<{locale: string, url: string}>;
  videoUrl?: string;
  audioUrl?: string;
}

// Safe stringify function to handle potential Symbol values and circular references
const safeStringify = (obj: any): string => {
  try {
    // Create a new object with all Symbol values converted to strings
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key: string, value: any) => {
        // Handle Symbol values
        if (typeof value === 'symbol') {
          return value.toString();
        }
        
        // Handle circular references
        if (typeof value === 'object' && value !== null) {
          if (seen.has(value)) {
            return '[Circular]';
          }
          seen.add(value);
        }
        return value;
      };
    };
    
    return JSON.stringify(obj, getCircularReplacer());
  } catch (error) {
    console.error('Error stringifying data:', error);
    return '{}';
  }
};

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "RSS Kumru Automotive - Otomotiv sektöründe lider, yüksek kaliteli hidrolik hortum ve boru sistemleri tedarikçisi. Kaliteli hizmet ve ürünlerimizle tanışın.",
  canonicalUrl,
  ogType = "website",
  ogImage = "/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
  additionalImages = [],
  keywords = ["RSS Kumru", "Automotive", "hidrolik hortum", "otomotiv", "boru sistemleri"],
  language = "tr",
  author = "RSS Kumru Automotive",
  publishedTime,
  modifiedTime,
  category,
  structuredData,
  breadcrumbs,
  noindex = false,
  nofollow = false,
  socialMedia,
  geolocation,
  alternateLanguages,
  videoUrl,
  audioUrl,
}) => {
  // Site adı
  const siteName = "RSS Kumru Automotive";
  
  // Başlık oluşturma - sayfa adı + site adı (toplam 60 karakterden az olacak şekilde)
  const fullTitle = `${title} | ${siteName}`;
  
  // Tam URL oluşturma
  const siteUrl = "https://rsskumru.com";
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  
  // Breadcrumb schema.org yapılandırılmış veri oluşturma
  const breadcrumbsSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  } : null;
  
  // Safely stringify structured data
  const serializedStructuredData = structuredData ? safeStringify(structuredData) : null;
  const serializedBreadcrumbsSchema = breadcrumbsSchema ? safeStringify(breadcrumbsSchema) : null;

  // Sosyal medya meta etiketleri
  const twitterCardType = socialMedia?.twitter?.cardType || "summary_large_image";
  const twitterSite = socialMedia?.twitter?.site || "@RSSKumru";
  const twitterCreator = socialMedia?.twitter?.creator || "@RSSKumru";
  const facebookAppId = socialMedia?.facebook?.appId || "";

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
      
      {/* Hreflang Etiketleri - Çok dilli siteler için */}
      {alternateLanguages && alternateLanguages.map(({ locale, url: langUrl }) => (
        <link 
          key={locale}
          rel="alternate" 
          hrefLang={locale} 
          href={`${siteUrl}${langUrl}`}
        />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={language === "tr" ? "tr_TR" : "en_US"} />
      <meta property="og:site_name" content={siteName} />
      
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {category && <meta property="article:section" content={category} />}
      
      {/* Ek Görseller */}
      {additionalImages.map((img, index) => (
        <meta 
          key={`og:image:${index}`} 
          property="og:image" 
          content={img.startsWith('http') ? img : `${siteUrl}${img}`} 
        />
      ))}
      
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCardType} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      
      {/* Video ve Audio içeriği için meta etiketler */}
      {videoUrl && (
        <>
          <meta property="og:video" content={videoUrl.startsWith('http') ? videoUrl : `${siteUrl}${videoUrl}`} />
          <meta name="twitter:player" content={videoUrl.startsWith('http') ? videoUrl : `${siteUrl}${videoUrl}`} />
        </>
      )}
      
      {audioUrl && (
        <meta property="og:audio" content={audioUrl.startsWith('http') ? audioUrl : `${siteUrl}${audioUrl}`} />
      )}

      {/* Coğrafi konum bilgisi */}
      {geolocation && (
        <>
          <meta name="geo.position" content={`${geolocation.latitude};${geolocation.longitude}`} />
          <meta name="geo.placename" content={geolocation.placeName} />
          <meta name="geo.region" content="TR" />
        </>
      )}
      
      {/* Yapılandırılmış Veri (Schema.org) */}
      {serializedStructuredData && (
        <script type="application/ld+json">
          {serializedStructuredData}
        </script>
      )}
      
      {/* Ekmek kırıntıları için yapılandırılmış veri */}
      {serializedBreadcrumbsSchema && (
        <script type="application/ld+json">
          {serializedBreadcrumbsSchema}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
