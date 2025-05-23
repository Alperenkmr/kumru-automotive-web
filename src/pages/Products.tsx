import React, { useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Products = () => {
  const { t, language } = useLanguage();
  
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
      imageSrc: "/lovable-uploads/02b1ce93-6964-4f30-b393-8c9afcfa2642.png",
      href: "/products/hydraulic-system",
      translationKey: "products.hydraulicSystem"
    },
    {
      id: 4,
      title: "INJECTION LINES",
      imageSrc: "/lovable-uploads/ed5f67d0-d961-4a03-bb88-202d2b11fb20.png",
      href: "/products/injection-lines",
      translationKey: "products.injectionLines"
    },
    {
      id: 5,
      title: "LEAK OF FUEL PIPE",
      imageSrc: "/lovable-uploads/e2dba826-cd9d-4e38-b90e-f7bd5996fb58.png",
      href: "/products/leak-of-fuel-pipe",
      translationKey: "products.leakOfFuelPipe"
    },
    {
      id: 6,
      title: "PTFE TEFLON HOSE",
      imageSrc: "/lovable-uploads/674e9aa2-f67e-4a64-a848-47c597a5c984.png",
      href: "/products/ptfe-teflon-hose",
      translationKey: "products.ptfeTeflonHose"
    },
    {
      id: 7,
      title: "STEERING HOSE",
      imageSrc: "/lovable-uploads/bb54b55e-7381-484a-abc8-e47684f61b1f.png",
      href: "/products/steering-hose",
      translationKey: "products.steeringHose"
    },
    {
      id: 8,
      title: "TRANSFER PUMP",
      imageSrc: "/lovable-uploads/41aa0121-afde-42ec-8f74-a34f6a546d99.png",
      href: "/products/transfer-pump",
      translationKey: "products.transferPump"
    },
    {
      id: 9,
      title: "TURBO PIPE HOSE",
      imageSrc: "/lovable-uploads/275bf039-d45d-41de-a94e-f90172412ef8.png",
      href: "/products/turbo-pipe-hose",
      translationKey: "products.turboPipeHose"
    },
    {
      id: 10,
      title: "TURBO TIMING PIPES AND HOSES",
      imageSrc: "/lovable-uploads/d126f5c5-9d5d-43f1-accc-6038b8d46deb.png",
      href: "/products/turbo-timing-pipes",
      translationKey: "products.turboTimingPipes"
    },
    {
      id: 11,
      title: "VALVE NOZZLE",
      imageSrc: "/lovable-uploads/e3f5f737-9acf-4731-a3ea-b624ef57653b.png",
      href: "/products/valve-nozzle",
      translationKey: "products.valveNozzle"
    },
    {
      id: 12,
      title: "VALVE RECORD",
      imageSrc: "/lovable-uploads/3ee29511-87e1-4ee4-908e-fc6c2314b152.png",
      href: "/products/valve-record",
      translationKey: "products.valveRecord"
    },
    {
      id: 13,
      title: "VALVE TIMING",
      imageSrc: "/lovable-uploads/a985dbe1-61b1-49ec-9e77-1cd23ded2e96.png",
      href: "/products/valve-timing",
      translationKey: "products.valveTiming"
    },
    {
      id: 14,
      title: "VESSEL LINES",
      imageSrc: "/lovable-uploads/6d1621b4-7c01-49fc-b354-f8ed8dfee654.png",
      href: "/products/vessel-lines",
      translationKey: "products.vesselLines"
    },
    {
      id: 15,
      title: "PRIMING PUMP",
      imageSrc: "/lovable-uploads/58f56706-3c9d-42ff-8437-ef0f1038f882.png",
      href: "/products/priming-pump",
      translationKey: "products.primingPump"
    },
    {
      id: 16,
      title: "SPECIAL ITEMS",
      imageSrc: "/lovable-uploads/a14e2a65-67c6-4864-b98a-bc86af414aa4.png",
      href: "/products/special-items",
      translationKey: "products.specialItems"
    }
  ];

  // Preprocess product data to get translated titles
  const translatedProducts = useMemo(() => {
    return productCategories.map(product => ({
      ...product,
      translatedTitle: t(product.translationKey) || product.title
    }));
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
