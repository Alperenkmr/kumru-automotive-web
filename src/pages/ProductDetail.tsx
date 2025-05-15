import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductImageGallery from "@/components/ui/ProductImageGallery";

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
        "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
        "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png",
        "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png"
      ]
    },
    "hydraulic-system": {
      title: "Hydraulic System",
      description: "Complete hydraulic systems designed for efficiency and reliability. Our systems are custom-engineered to meet specific requirements across various industries and applications.",
      images: [
        "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
        "/lovable-uploads/6e049ebd-b21b-495d-82cf-0fcdaf7e5050.png",
        "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png",
        "/lovable-uploads/dfa28104-5721-4b0c-b195-649f86819784.png",
        "/lovable-uploads/2b8159e8-7b12-4008-a3eb-eea36a55ac94.png",
        "/lovable-uploads/d6229e80-8a15-4d6d-b8e3-fb9a52cfaaf5.png"
      ]
    },
    "injection-lines": {
      title: "Injection Lines",
      description: "Our high-precision injection lines are manufactured to exacting standards for fuel systems. These lines provide consistent flow and pressure stability, ensuring optimal engine performance and fuel efficiency.",
      images: [
        "/lovable-uploads/119f8271-e8c4-45da-9d2c-5e67c9b22103.png",
        "/lovable-uploads/db898c48-6fb7-48c9-86c0-d0903005310f.png",
        "/lovable-uploads/b1714be7-5552-4dff-93f2-63b6f713be35.png",
        "/lovable-uploads/3067d991-6b78-4a33-b661-9e496c75e0d1.png",
        "/lovable-uploads/a04c2ee5-d5d5-40f5-80bb-ee57288592bd.png",
        "/lovable-uploads/7f577f9f-378a-46ca-83e5-ec25588776b6.png",
        "/lovable-uploads/30959692-0935-45c0-9070-bc7d5f69c633.png",
        "/lovable-uploads/c598e639-61ee-4f26-9865-e860667d5e07.png"
      ]
    },
    "leak-of-fuel-pipe": {
      title: "Leak of Fuel Pipe",
      description: "Specialized fuel pipe solutions designed to prevent leaks and ensure safe fuel transport. Engineered with premium materials for durability and chemical resistance.",
      images: [
        "/lovable-uploads/67380dcf-b5f1-4771-84bd-ca582dedcfe3.png",
        "/lovable-uploads/bc73c8ac-88f0-41a4-9bcf-734811cfdfde.png",
        "/lovable-uploads/22433bb0-37b0-42ca-95b9-adbc7458a5dd.png",
        "/lovable-uploads/42862ca5-3179-409e-ab9f-779f35ffddf5.png",
        "/lovable-uploads/3e0e6f4a-7f75-475c-8f0d-e4645e64e31f.png",
        "/lovable-uploads/907fc852-03d5-4588-a52b-16691afc08c1.png"
      ]
    },
    "ptfe-teflon-hose": {
      title: "PTFE Teflon Hose",
      description: "Our PTFE hoses offer superior chemical resistance and exceptional performance at extreme temperatures. Ideal for applications requiring low friction and high purity, these lines are available in various configurations.",
      images: [
        "/lovable-uploads/481252b3-3d57-4fe9-ad96-2e92e292421c.png",
        "/lovable-uploads/23271511-12cb-40de-95a4-dd58f47020f8.png",
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

  // Check which layout to use
  const isCabinLiftingHose = productId === 'cabin-lifting-hose';
  const isHydraulicHose = productId === 'hydraulic-hose';
  const isHydraulicSystem = productId === 'hydraulic-system';
  const isInjectionLines = productId === 'injection-lines';
  const isLeakOfFuelPipe = productId === 'leak-of-fuel-pipe';

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
            
            {/* Cabin Lifting Hose Layout - 2x2 Grid */}
            {isCabinLiftingHose && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-2x2" 
              />
            )}
            
            {/* Hydraulic Hose Layout - Single Row with 3 items (2+1 on mobile) */}
            {isHydraulicHose && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-3x1" 
              />
            )}
            
            {/* Hydraulic System Layout - 3x2 Grid (2x3 on mobile) */}
            {isHydraulicSystem && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-3x2" 
              />
            )}

            {/* Injection Lines Layout - 4x2 Grid (2x4 on mobile) */}
            {isInjectionLines && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-4x2" 
              />
            )}

            {/* Leak of Fuel Pipe Layout - 3x2 Grid (2x3 on mobile) */}
            {isLeakOfFuelPipe && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-3x2" 
              />
            )}
            
            {/* Default Layout for other products */}
            {!isCabinLiftingHose && !isHydraulicHose && !isHydraulicSystem && 
              !isInjectionLines && !isLeakOfFuelPipe && (
              <ProductImageGallery 
                images={product.images} 
                title={product.title} 
                layout="grid-default" 
              />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
