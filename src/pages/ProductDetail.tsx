
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // Mock product data - in a real app, this would come from an API
  const productData = {
    hoses: {
      title: "Hydraulic Hoses",
      description: "Our premium hydraulic hoses are engineered for maximum durability and performance across a wide range of industrial applications. Available in various pressure ratings, sizes, and materials.",
      images: [
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      ]
    },
    fittings: {
      title: "Precision Fittings",
      description: "Our precision-engineered fittings provide reliable, leak-free connections for hydraulic systems. Available in various materials including steel, stainless steel, and brass to meet your specific requirements.",
      images: [
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      ]
    },
    "ptfe-lines": {
      title: "PTFE Lines",
      description: "Our PTFE lines offer superior chemical resistance and exceptional performance at extreme temperatures. Ideal for applications requiring low friction and high purity, these lines are available in various configurations.",
      images: [
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      ]
    },
    "turbo-pipes": {
      title: "Turbo Oil Pipes",
      description: "Our turbo oil pipes are designed to withstand high temperatures and pressures in turbocharger systems. Engineered for optimal oil flow and cooling, these pipes ensure reliable performance in demanding conditions.",
      images: [
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      ]
    },
    "injection-lines": {
      title: "Injection Lines",
      description: "Our high-precision injection lines are manufactured to exacting standards for fuel systems. These lines provide consistent flow and pressure stability, ensuring optimal engine performance and fuel efficiency.",
      images: [
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      ]
    }
  };

  const product = productId && productData[productId as keyof typeof productData];

  if (!product) {
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
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <Link to="/products" className="text-kumru-navy hover:underline mb-6 inline-block">
              ← Back to Products
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">
              {product.title}
            </h1>
            
            <div className="mb-12">
              <p className="text-lg">{product.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={image} 
                    alt={`${product.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
