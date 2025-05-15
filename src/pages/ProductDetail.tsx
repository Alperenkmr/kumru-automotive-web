import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // Product data for all categories
  const productData = {
    "cabin-lifting-hose": {
      title: "Cabin Lifting Hose",
      description: "Our cabin lifting hoses are designed for heavy-duty applications in construction and mining equipment. Engineered for reliable performance and durability in extreme conditions.",
      images: [
        "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
        "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png",
        "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png", 
        "/lovable-uploads/89d2dd09-faaf-47b0-be0f-b97e4cdd24c5.png"
      ]
    },
    "hydraulic-hose": {
      title: "Hydraulic Hose",
      description: "Our premium hydraulic hoses are engineered for maximum durability and performance across a wide range of industrial applications. Available in various pressure ratings, sizes, and materials.",
      images: [
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      ]
    },
    "hydraulic-system": {
      title: "Hydraulic System",
      description: "Complete hydraulic systems designed for efficiency and reliability. Our systems are custom-engineered to meet specific requirements across various industries and applications.",
      images: [
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "injection-lines": {
      title: "Injection Lines",
      description: "Our high-precision injection lines are manufactured to exacting standards for fuel systems. These lines provide consistent flow and pressure stability, ensuring optimal engine performance and fuel efficiency.",
      images: [
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "leak-of-fuel-pipe": {
      title: "Leak of Fuel Pipe",
      description: "Specialized fuel pipe solutions designed to prevent leaks and ensure safe fuel transport. Engineered with premium materials for durability and chemical resistance.",
      images: [
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      ]
    },
    "ptfe-teflon-hose": {
      title: "PTFE Teflon Hose",
      description: "Our PTFE hoses offer superior chemical resistance and exceptional performance at extreme temperatures. Ideal for applications requiring low friction and high purity, these lines are available in various configurations.",
      images: [
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "steering-hose": {
      title: "Steering Hose",
      description: "High-quality steering hoses for automotive and heavy equipment applications. Designed for precise control and long service life under variable pressure conditions.",
      images: [
        "https://source.unsplash.com/photo-1518770660439-4636190af475",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      ]
    },
    "transfer-pump": {
      title: "Transfer Pump",
      description: "Efficient transfer pumps for moving fluids in various applications. Our pumps feature durable construction and reliable performance for industrial and automotive uses.",
      images: [
        "https://source.unsplash.com/photo-1531297484001-80022131f5a1",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "turbo-pipe-hose": {
      title: "Turbo Pipe Hose",
      description: "Specialized hoses for turbocharger applications. Designed to withstand high temperatures and pressure variations for optimal turbo system performance.",
      images: [
        "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      ]
    },
    "turbo-timing-pipes": {
      title: "Turbo Timing Pipes and Hoses",
      description: "Precision-engineered timing pipes and hoses for turbo systems. Our products ensure accurate timing and reliable performance in demanding engine environments.",
      images: [
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      ]
    },
    "valve-nozzle": {
      title: "Valve Nozzle",
      description: "High-precision valve nozzles for controlled fluid delivery. Engineered for consistent performance and durability across various industrial applications.",
      images: [
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      ]
    },
    "valve-record": {
      title: "Valve Record",
      description: "Premium valve record components for industrial and automotive systems. Our products meet strict quality standards for reliable performance in critical applications.",
      images: [
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      ]
    },
    "valve-timing": {
      title: "Valve Timing",
      description: "Precision valve timing components for optimal engine performance. Engineered for accuracy and durability to ensure consistent engine operation.",
      images: [
        "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "vessel-lines": {
      title: "Vessel Lines",
      description: "Specialized lines for marine vessel applications. Designed to withstand harsh maritime conditions while providing reliable fluid transfer and system performance.",
      images: [
        "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
        "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      ]
    },
    "hoses": {
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
    "fittings": {
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

  // Special layout for cabin lifting hose
  const isCabinLiftingHose = productId === 'cabin-lifting-hose';

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
            
            {isCabinLiftingHose ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {product.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-md">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={image} 
                        alt={`${product.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            ) : (
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
