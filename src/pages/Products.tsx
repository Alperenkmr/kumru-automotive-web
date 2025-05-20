
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      href: "/products/cabin-lifting-hose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      href: "/products/hydraulic-hose"
    },
    {
      id: 3,
      title: "HYDRAULIC SYSTEM",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      href: "/products/hydraulic-system"
    },
    {
      id: 4,
      title: "INJECTION LINES",
      imageSrc: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      href: "/products/injection-lines"
    },
    {
      id: 5,
      title: "LEAK OF FUEL PIPE",
      imageSrc: "/lovable-uploads/01712518-8600-401d-ac51-f4ba12a53980.png",
      href: "/products/leak-of-fuel-pipe"
    },
    {
      id: 6,
      title: "PTFE TEFLON HOSE",
      imageSrc: "/lovable-uploads/674e9aa2-f67e-4a64-a848-47c597a5c984.png",
      href: "/products/ptfe-teflon-hose"
    },
    {
      id: 7,
      title: "STEERING HOSE",
      imageSrc: "/lovable-uploads/fd0c66ec-4343-42ab-92b7-800e73443d4f.png",
      href: "/products/steering-hose"
    },
    {
      id: 8,
      title: "TRANSFER PUMP",
      imageSrc: "/lovable-uploads/41aa0121-afde-42ec-8f74-a34f6a546d99.png",
      href: "/products/transfer-pump"
    },
    {
      id: 9,
      title: "TURBO PIPE HOSE",
      imageSrc: "/lovable-uploads/275bf039-d45d-41de-a94e-f90172412ef8.png",
      href: "/products/turbo-pipe-hose"
    },
    {
      id: 10,
      title: "TURBO TIMING PIPES AND HOSES",
      imageSrc: "/lovable-uploads/d126f5c5-9d5d-43f1-accc-6038b8d46deb.png",
      href: "/products/turbo-timing-pipes"
    },
    {
      id: 11,
      title: "VALVE NOZZLE",
      imageSrc: "/lovable-uploads/e3f5f737-9acf-4731-a3ea-b624ef57653b.png",
      href: "/products/valve-nozzle"
    },
    {
      id: 12,
      title: "VALVE RECORD",
      imageSrc: "/lovable-uploads/3ee29511-87e1-4ee4-908e-fc6c2314b152.png",
      href: "/products/valve-record"
    },
    {
      id: 13,
      title: "VALVE TIMING",
      imageSrc: "/lovable-uploads/a985dbe1-61b1-49ec-9e77-1cd23ded2e96.png",
      href: "/products/valve-timing"
    },
    {
      id: 14,
      title: "VESSEL LINES",
      imageSrc: "/lovable-uploads/74038727-0d72-411d-addb-cbc9d2a2f175.png",
      href: "/products/vessel-lines"
    },
    {
      id: 15,
      title: "FITTINGS",
      imageSrc: "/lovable-uploads/4369c6f1-28c4-434b-b45c-a8385a2b459b.png",
      href: "/products/fittings"
    },
    {
      id: 16,
      title: "CONNECTORS",
      imageSrc: "/lovable-uploads/186b26a1-3a9b-46f8-b16d-db14890ba8a9.png",
      href: "/products/connectors"
    }
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
