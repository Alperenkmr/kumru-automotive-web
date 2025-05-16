
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";

interface ProductDetailsLayoutProps {
  productId: string | undefined;
  productTitle: string;
  productDescription: string;
  children: React.ReactNode;
}

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({
  productId,
  productTitle,
  productDescription,
  children
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <Link to="/products" className="text-kumru-navy hover:underline mb-6 inline-block">
              ← Back to Products
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">
              {productTitle}
            </h1>
            
            <div className="mb-12">
              <p className="text-lg">{productDescription}</p>
            </div>
            
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailsLayout;
