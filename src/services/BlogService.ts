
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/locales/types";

export type BlogPost = {
  id: string;
  title: string;
  titleKey: string;
  excerpt: string;
  content: string;
  contentKey: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  banner: string;
  href: string;
  relatedImages?: string[];
};

// Blog post database with translated content
const blogPostsData: Record<string, {
  titleKey: string;
  contentKey: string;
  date: string;
  author: string;
  category: string;
  banner: string;
  relatedImages?: string[];
}> = {
  "hydraulic-hose-pressure-ratings": {
    titleKey: 'blog.post.hydraulicHosePressure.title',
    contentKey: 'blog.post.hydraulicHosePressure.content',
    date: "May 2, 2023",
    author: "Alperen Kumru",
    category: "Technical",
    banner: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
    relatedImages: [
      "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png",
      "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png"
    ]
  },
  "ptfe-vs-rubber-hoses-comparison": {
    titleKey: 'blog.post.ptfeVsRubber.title',
    contentKey: 'blog.post.ptfeVsRubber.content',
    date: "April 18, 2023",
    author: "Furkan Kumru",
    category: "Product Comparison",
    banner: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
    relatedImages: [
      "/lovable-uploads/da69821b-9f92-470a-943b-7ef7e6056815.png",
      "/lovable-uploads/c8e142ce-26b4-4ee2-bbc2-7827ad360884.png"
    ]
  },
  "hydraulic-hose-maintenance-tips": {
    titleKey: 'blog.post.maintenance.title',
    contentKey: 'blog.post.maintenance.content',
    date: "April 5, 2023",
    author: "Ufuk Şahin",
    category: "Maintenance",
    banner: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
    relatedImages: [
      "/lovable-uploads/6e049ebd-b21b-495d-82cf-0fcdaf7e5050.png",
      "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png"
    ]
  },
  "turbo-oil-pipe-innovations": {
    titleKey: 'blog.post.turboOil.title',
    contentKey: 'blog.post.turboOil.content',
    date: "March 22, 2023",
    author: "Selami Kumru",
    category: "Technology",
    banner: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
    relatedImages: [
      "/lovable-uploads/04acc924-07a4-4cc4-851f-19cda4219f9c.png",
      "/lovable-uploads/7534c77e-f1b8-4257-8769-fb95f8923cce.png"
    ]
  },
  "selecting-right-fittings": {
    titleKey: 'blog.post.fittings.title',
    contentKey: 'blog.post.fittings.content',
    date: "March 10, 2023",
    author: "Süleyman Kumru",
    category: "Technical Guide",
    banner: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
    relatedImages: [
      "/lovable-uploads/395071ba-a18c-4d9d-b4e6-aabc0fcf811d.png",
      "/lovable-uploads/91afff90-ba4d-4b01-a817-bb9f8fa348d4.png"
    ]
  },
  "hydraulic-systems-electric-vehicles": {
    titleKey: 'blog.post.evHydraulics.title',
    contentKey: 'blog.post.evHydraulics.content',
    date: "February 25, 2023",
    author: "Talha Kırmızıaslan",
    category: "Industry Trends",
    banner: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
    relatedImages: [
      "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png",
      "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png"
    ]
  }
};

// Function to get all blog posts with translations
export const getAllBlogPosts = (language: string): BlogPost[] => {
  const posts: BlogPost[] = [];
  
  // Get translations through a hook-compatible function
  const { t } = useLanguage();
  
  // Transform data into BlogPost objects with translations
  Object.entries(blogPostsData).forEach(([id, post]) => {
    posts.push({
      id,
      title: t(post.titleKey as TranslationKey),
      titleKey: post.titleKey,
      excerpt: t(`${post.titleKey}.excerpt` as TranslationKey),
      content: t(post.contentKey as TranslationKey),
      contentKey: post.contentKey,
      date: post.date,
      author: post.author,
      category: post.category,
      imageSrc: post.banner,
      banner: post.banner,
      href: `/blog/${id}`,
      relatedImages: post.relatedImages
    });
  });
  
  return posts;
};

export const useBlogService = () => {
  const { t } = useLanguage();
  
  // Create blog post entries in a type-safe way
  const blogPosts: Record<string, BlogPost> = {
    "hydraulic-hose-pressure-ratings": {
      id: "hydraulic-hose-pressure-ratings",
      title: t('blog.post.hydraulicHosePressure.title' as TranslationKey),
      titleKey: 'blog.post.hydraulicHosePressure.title',
      excerpt: t('blog.post.hydraulicHosePressure.excerpt' as TranslationKey),
      content: t('blog.post.hydraulicHosePressure.content' as TranslationKey),
      contentKey: 'blog.post.hydraulicHosePressure.content',
      date: "May 2, 2023",
      author: "Alperen Kumru",
      category: "Technical",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      banner: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      href: "/blog/hydraulic-hose-pressure-ratings",
      relatedImages: [
        "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png",
        "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png"
      ]
    },
    "ptfe-vs-rubber-hoses-comparison": {
      id: "ptfe-vs-rubber-hoses-comparison",
      title: t('blog.post.ptfeVsRubber.title' as TranslationKey),
      titleKey: 'blog.post.ptfeVsRubber.title',
      excerpt: t('blog.post.ptfeVsRubber.excerpt' as TranslationKey),
      content: t('blog.post.ptfeVsRubber.content' as TranslationKey),
      contentKey: 'blog.post.ptfeVsRubber.content',
      date: "April 18, 2023",
      author: "Furkan Kumru",
      category: "Product Comparison",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      banner: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      href: "/blog/ptfe-vs-rubber-hoses-comparison",
      relatedImages: [
        "/lovable-uploads/da69821b-9f92-470a-943b-7ef7e6056815.png",
        "/lovable-uploads/c8e142ce-26b4-4ee2-bbc2-7827ad360884.png"
      ]
    },
    "hydraulic-hose-maintenance-tips": {
      id: "hydraulic-hose-maintenance-tips",
      title: t('blog.post.maintenance.title' as TranslationKey),
      titleKey: 'blog.post.maintenance.title',
      excerpt: t('blog.post.maintenance.excerpt' as TranslationKey),
      content: t('blog.post.maintenance.content' as TranslationKey),
      contentKey: 'blog.post.maintenance.content',
      date: "April 5, 2023",
      author: "Ufuk Şahin",
      category: "Maintenance",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      banner: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      href: "/blog/hydraulic-hose-maintenance-tips",
      relatedImages: [
        "/lovable-uploads/6e049ebd-b21b-495d-82cf-0fcdaf7e5050.png",
        "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png"
      ]
    },
    "turbo-oil-pipe-innovations": {
      id: "turbo-oil-pipe-innovations",
      title: t('blog.post.turboOil.title' as TranslationKey),
      titleKey: 'blog.post.turboOil.title',
      excerpt: t('blog.post.turboOil.excerpt' as TranslationKey),
      content: t('blog.post.turboOil.content' as TranslationKey),
      contentKey: 'blog.post.turboOil.content',
      date: "March 22, 2023",
      author: "Selami Kumru",
      category: "Technology",
      imageSrc: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
      banner: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
      href: "/blog/turbo-oil-pipe-innovations",
      relatedImages: [
        "/lovable-uploads/04acc924-07a4-4cc4-851f-19cda4219f9c.png",
        "/lovable-uploads/7534c77e-f1b8-4257-8769-fb95f8923cce.png"
      ]
    },
    "selecting-right-fittings": {
      id: "selecting-right-fittings",
      title: t('blog.post.fittings.title' as TranslationKey),
      titleKey: 'blog.post.fittings.title',
      excerpt: t('blog.post.fittings.excerpt' as TranslationKey),
      content: t('blog.post.fittings.content' as TranslationKey),
      contentKey: 'blog.post.fittings.content',
      date: "March 10, 2023",
      author: "Süleyman Kumru",
      category: "Technical Guide",
      imageSrc: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      banner: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      href: "/blog/selecting-right-fittings",
      relatedImages: [
        "/lovable-uploads/395071ba-a18c-4d9d-b4e6-aabc0fcf811d.png",
        "/lovable-uploads/91afff90-ba4d-4b01-a817-bb9f8fa348d4.png"
      ]
    },
    "hydraulic-systems-electric-vehicles": {
      id: "hydraulic-systems-electric-vehicles",
      title: t('blog.post.evHydraulics.title' as TranslationKey),
      titleKey: 'blog.post.evHydraulics.title',
      excerpt: t('blog.post.evHydraulics.excerpt' as TranslationKey),
      content: t('blog.post.evHydraulics.content' as TranslationKey),
      contentKey: 'blog.post.evHydraulics.content',
      date: "February 25, 2023",
      author: "Talha Kırmızıaslan",
      category: "Industry Trends",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      banner: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      href: "/blog/hydraulic-systems-electric-vehicles",
      relatedImages: [
        "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png",
        "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png"
      ]
    }
  };

  const getBlogPost = (blogId: string | undefined): { post: BlogPost | null, title: string, content: string } => {
    if (!blogId) {
      return { post: null, title: "", content: "" };
    }
    
    const post = blogPosts[blogId] || null;
    
    if (!post) {
      return { post: null, title: "", content: "" };
    }
    
    // Get translated content from translations
    const title = t(post.titleKey as TranslationKey);
    const content = t(post.contentKey as TranslationKey);
    
    return { post, title, content };
  };

  return {
    getBlogPost
  };
};
