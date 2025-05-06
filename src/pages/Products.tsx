
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "Hoses",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/hoses"
    },
    {
      id: 2,
      title: "Fittings",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/fittings"
    },
    {
      id: 3,
      title: "PTFE Lines",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/ptfe-lines"
    },
    {
      id: 4,
      title: "Turbo Oil Pipes",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/turbo-pipes"
    },
    {
      id: 5,
      title: "Injection Lines",
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      href: "/products/injection-lines"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
