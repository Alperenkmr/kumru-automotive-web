
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();
  
  const productCategories = [
    {
      id: 1,
      title: t('products.cabinLiftingHose'),
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/cabin-lifting-hose"
    },
    {
      id: 2,
      title: t('products.hydraulicHose'),
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/hydraulic-hose"
    },
    {
      id: 3,
      title: t('products.hydraulicSystem'),
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/hydraulic-system"
    },
    {
      id: 4,
      title: t('products.injectionLines'),
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/injection-lines"
    },
    {
      id: 5,
      title: t('products.leakOfFuelPipe'),
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      href: "/products/leak-of-fuel-pipe"
    },
    {
      id: 6,
      title: t('products.ptfeTeflonHose'),
      imageSrc: "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      href: "/products/ptfe-teflon-hose"
    },
    {
      id: 7,
      title: t('products.steeringHose'),
      imageSrc: "https://source.unsplash.com/photo-1518770660439-4636190af475",
      href: "/products/steering-hose"
    },
    {
      id: 8,
      title: t('products.transferPump'),
      imageSrc: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
      href: "/products/transfer-pump"
    },
    {
      id: 9,
      title: t('products.turboPipeHose'),
      imageSrc: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      href: "/products/turbo-pipe-hose"
    },
    {
      id: 10,
      title: t('products.turboTimingPipes'),
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/turbo-timing-pipes"
    },
    {
      id: 11,
      title: t('products.valveNozzle'),
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/valve-nozzle"
    },
    {
      id: 12,
      title: t('products.valveRecord'),
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/valve-record"
    },
    {
      id: 13,
      title: t('products.valueTiming'),
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/valve-timing"
    },
    {
      id: 14,
      title: t('products.vesselLines'),
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      href: "/products/vessel-lines"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">{t('products.ourProducts')}</h1>
            <p className="text-lg mb-12 max-w-3xl">
              RSS Kumru Automotive specializes in designing and manufacturing high-quality hydraulic systems and custom-engineered lines for various applications. Explore our product categories below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <ProductCard
                  key={category.id}
                  title={category.title}
                  imageSrc={category.imageSrc}
                  href={category.href}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
