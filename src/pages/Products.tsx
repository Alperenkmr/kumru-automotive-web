
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/cabin-lifting-hose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/hydraulic-hose"
    },
    {
      id: 3,
      title: "HYDRAULIC SYSTEM",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/hydraulic-system"
    },
    {
      id: 4,
      title: "INJECTION LINES",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/injection-lines"
    },
    {
      id: 5,
      title: "LEAK OF FUEL PIPE",
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      href: "/products/leak-of-fuel-pipe"
    },
    {
      id: 6,
      title: "PTFE TEFLON HOSE",
      imageSrc: "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      href: "/products/ptfe-teflon-hose"
    },
    {
      id: 7,
      title: "STEERING HOSE",
      imageSrc: "https://source.unsplash.com/photo-1518770660439-4636190af475",
      href: "/products/steering-hose"
    },
    {
      id: 8,
      title: "TRANSFER PUMP",
      imageSrc: "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
      href: "/products/transfer-pump"
    },
    {
      id: 9,
      title: "TURBO PIPE HOSE",
      imageSrc: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      href: "/products/turbo-pipe-hose"
    },
    {
      id: 10,
      title: "TURBO TIMING PIPES AND HOSES",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/turbo-timing-pipes"
    },
    {
      id: 11,
      title: "VALVE NOZZLE",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/valve-nozzle"
    },
    {
      id: 12,
      title: "VALVE RECORD",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/valve-record"
    },
    {
      id: 13,
      title: "VALVE TIMING",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/valve-timing"
    },
    {
      id: 14,
      title: "VESSEL LINES",
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
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">Our Products</h1>
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
