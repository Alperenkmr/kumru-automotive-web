
import React, { useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Products = () => {
  const { t, language } = useLanguage();
  
  console.log('Products page: Rendering products list');
  
  const productCategories = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      href: "/products/cabin-lifting-hose",
      translationKey: "products.cabinLiftingHose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "/lovable-uploads/ab213c6a-f04b-4b0e-b847-f3bedda77422.png",
      href: "/products/hydraulic-hose",
      translationKey: "products.hydraulicHose"
    },
    {
      id: 3,
      title: "HYDRAULIC SYSTEM",
      imageSrc: "/lovable-uploads/8ba224ad-ba9b-4e72-bb83-d36c7da4ab4c.png",
      href: "/products/hydraulic-system",
      translationKey: "products.hydraulicSystem"
    },
    {
      id: 4,
      title: "STEERING HOSE",
      imageSrc: "/lovable-uploads/bb54b55e-7381-484a-abc8-e47684f61b1f.png",
      href: "/products/steering-hose",
      translationKey: "products.steeringHose"
    },
    {
      id: 5,
      title: "PTFE TEFLON HOSE",
      imageSrc: "/lovable-uploads/674e9aa2-f67e-4a64-a848-47c597a5c984.png",
      href: "/products/ptfe-teflon-hose",
      translationKey: "products.ptfeTeflonHose"
    },
    {
      id: 6,
      title: "TURBO PIPE HOSE",
      imageSrc: "/lovable-uploads/275bf039-d45d-41de-a94e-f90172412ef8.png",
      href: "/products/turbo-pipe-hose",
      translationKey: "products.turboPipeHose"
    },
    {
      id: 7,
      title: "LEAK OF FUEL PIPE",
      imageSrc: "/lovable-uploads/e2dba826-cd9d-4e38-b90e-f7bd5996fb58.png",
      href: "/products/leak-of-fuel-pipe",
      translationKey: "products.leakOfFuelPipe"
    },
    {
      id: 8,
      title: "TURBO TIMING PIPES AND HOSES",
      imageSrc: "/lovable-uploads/d126f5c5-9d5d-43f1-accc-6038b8d46deb.png",
      href: "/products/turbo-timing-pipes",
      translationKey: "products.turboTimingPipes"
    },
    {
      id: 9,
      title: "INJECTION LINES",
      imageSrc: "/lovable-uploads/ed5f67d0-d961-4a03-bb88-202d2b11fb20.png",
      href: "/products/injection-lines",
      translationKey: "products.injectionLines"
    },
    {
      id: 10,
      title: "VESSEL LINES",
      imageSrc: "/lovable-uploads/e935a121-8959-42f0-843a-27e1e0d545fe.png",
      href: "/products/vessel-lines",
      translationKey: "products.vesselLines"
    },
    {
      id: 11,
      title: "TRANSFER PUMP",
      imageSrc: "/lovable-uploads/41aa0121-afde-42ec-8f74-a34f6a546d99.png",
      href: "/products/transfer-pump",
      translationKey: "products.transferPump"
    },
    {
      id: 12,
      title: "PRIMING PUMP",
      imageSrc: "/lovable-uploads/964d3bf4-9d67-4487-9b05-59d0f170aeaa.png",
      href: "/products/priming-pump",
      translationKey: "products.primingPump"
    },
    {
      id: 13,
      title: "VALVE NOZZLE",
      imageSrc: "/lovable-uploads/a4c0d917-95af-419d-a060-037e44da21d9.png",
      href: "/products/valve-nozzle",
      translationKey: "products.valveNozzle"
    },
    {
      id: 14,
      title: "VALVE TIMING",
      imageSrc: "/lovable-uploads/a985dbe1-61b1-49ec-9e77-1cd23ded2e96.png",
      href: "/products/valve-timing",
      translationKey: "products.valveTiming"
    },
    {
      id: 15,
      title: "SPECIAL ITEMS",
      imageSrc: "/lovable-uploads/704024bb-d372-468e-b79f-31f8c4620a59.png",
      href: "/products/special-items",
      translationKey: "products.specialItems"
    }
  ];

  // Preprocess product data to get translated titles
  const translatedProducts = useMemo(() => {
    const products = productCategories.map(product => ({
      ...product,
      translatedTitle: t(product.translationKey) || product.title
    }));
    
    console.log('Products page: Generated product links:', products.map(p => p.href));
    return products;
  }, [productCategories, t]);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">{t('nav.products')}</h1>
            <p className="text-lg mb-12 max-w-3xl">
              {language === 'tr' 
                ? 'RSS Kumru Otomotiv, çeşitli uygulamalar için yüksek kaliteli hidrolik sistemler ve özel tasarlanmış hatlar üretmekte uzmanlaşmıştır. Aşağıdaki ürün kategorilerimizi keşfedin.'
                : 'RSS Kumru Automotive specializes in designing and manufacturing high-quality hydraulic systems and custom-engineered lines for various applications. Explore our product categories below.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <ProductCard
                  key={category.id}
                  title={category.title}
                  imageSrc={category.imageSrc}
                  href={category.href}
                  className="h-full"
                  translationKey={category.translationKey}
                />
              ))}
            </div>
            
            {/* Catalog Download Button */}
            <div className="mt-16 text-center">
              <a href="https://drive.google.com/file/d/1TcZasw69ZIQan0tQrSk9v0F6S_EcR2Hl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-kumru-navy text-kumru-navy hover:bg-kumru-navy hover:text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  {language === 'tr' ? '2025 Kataloğumuz' : 'Our 2025 Catalog'}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
