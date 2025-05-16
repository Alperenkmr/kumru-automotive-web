
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ProductNotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/products" className="text-kumru-navy hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductNotFound;
