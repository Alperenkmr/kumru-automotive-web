import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
        "/lovable-uploads/395071ba-a18c-4d9d-b4e6-aabc0fcf811d.png",
        "/lovable-uploads/91afff90-ba4d-4b01-a817-bb9f8fa348d4.png",
        "/lovable-uploads/98d12566-e15e-4399-be6c-fb0854c106df.png", 
        "/lovable-uploads/4b10759c-eb86-484a-a6d1-695c97c3605f.png",
        "/lovable-uploads/2b8878a7-ee7b-40c1-8709-f96e04bf7f76.png",
        "/lovable-uploads/c8e142ce-26b4-4ee2-bbc2-7827ad360884.png",
        "/lovable-uploads/387ef443-1ad6-45ed-be70-5f73274718d2.png"
      ]
    },
    "leak-of-fuel-pipe": {
      title: "Leak of Fuel Pipe",
      description: "Specialized fuel pipe solutions designed to prevent leaks and ensure safe fuel transport. Engineered with premium materials for durability and chemical resistance.",
      images: [
        "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
        "/lovable-uploads/04acc924-07a4-4cc4-851f-19cda4219f9c.png",
        "/lovable-uploads/7534c77e-f1b8-4257-8769-fb95f8923cce.png",
        "/lovable-uploads/01dedfa7-7055-4fe2-97a4-47818831e1a2.png",
        "/lovable-uploads/aa75e716-e185-468f-a2bc-23f5233a6027.png",
        "/lovable-uploads/28f917cf-44b4-4ec5-ad86-5c27137d13a1.png"
      ]
    },
    "ptfe-teflon-hose": {
      title: "PTFE Teflon Hose",
      description: "Our PTFE hoses offer superior chemical resistance and exceptional performance at extreme temperatures. Ideal for applications requiring low friction and high purity, these lines are available in various configurations.",
      images: [
        "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
        "/lovable-uploads/da69821b-9f92-470a-943b-7ef7e6056815.png",
        "/lovable-uploads/c8e142ce-26b4-4ee2-bbc2-7827ad360884.png",
        "/lovable-uploads/ea78951e-2748-4ebe-b7ee-8f3d5a11e94b.png",
        "/lovable-uploads/4b853838-ce11-4b64-b18e-2a3d4ffdb6cf.png",
        "/lovable-uploads/463837ac-180d-4516-9b6d-58b38390a0bc.png",
        "/lovable-uploads/c6197df8-7082-49a2-95bf-4c24d4b7458d.png",
        "/lovable-uploads/57a851df-003a-4720-990b-5f587c5f1158.png",
        "/lovable-uploads/478da5c4-268a-456b-99d8-5eeaf9f6804d.png",
        "/lovable-uploads/31684c35-4b7c-4040-ab9d-8be4aeeaf2e1.png",
        "/lovable-uploads/32076c81-ec8b-4a67-b691-615053e3d05f.png",
      ]
    },
    "steering-hose": {
      title: "Steering Hose",
      description: "High-quality steering hoses for automotive and heavy equipment applications. Designed for precise control and long service life under variable pressure conditions.",
      images: [
        "/lovable-uploads/fd0c66ec-4343-42ab-92b7-800e73443d4f.png",
        "/lovable-uploads/6b0b97d8-3cc9-4580-93d5-de07179e7445.png",
        "/lovable-uploads/02613e90-5ff2-467c-9227-47c2c4867481.png",
      ]
    },
    "transfer-pump": {
      title: "Transfer Pump",
      description: "Efficient transfer pumps for moving fluids in various applications. Our pumps feature durable construction and reliable performance for industrial and automotive uses.",
      images: [
        "/lovable-uploads/41aa0121-afde-42ec-8f74-a34f6a546d99.png",
        "/lovable-uploads/0038105a-1864-4a64-b6e5-294c3a91c618.png",
        "/lovable-uploads/64d98740-1e88-44cc-847e-2a6cc0bafe71.png",
      ]
    },
    "turbo-pipe-hose": {
      title: "Turbo Pipe Hose",
      description: "Specialized hoses for turbocharger applications. Designed to withstand high temperatures and pressure variations for optimal turbo system performance.",
      images: [
        "/lovable-uploads/275bf039-d45d-41de-a94e-f90172412ef8.png",
        "/lovable-uploads/0fae216a-6e85-4d9d-998c-2dffc515c268.png",
        "/lovable-uploads/e049e1b8-e82d-4d4c-8086-af743cc75a6b.png",
        "/lovable-uploads/ccf3fbe4-fba1-47f3-90e2-e8664a99bd37.png",
        "/lovable-uploads/3268f846-0731-405a-a8b0-afb7781ddcf9.png",
        "/lovable-uploads/f153f704-1ed2-43fc-b02b-d9bc04d344aa.png",
        "/lovable-uploads/46bfa33e-fa51-4b2f-a3e1-14421fb5828d.png",
        "/lovable-uploads/b256034a-eae5-4658-805e-43f17cbb498f.png",
        "/lovable-uploads/b54afe8e-d42b-453e-8f87-879ccb901b2d.png",
        "/lovable-uploads/f212a026-d404-43b5-bcbe-2109daa81bc5.png",
        "/lovable-uploads/2dba85bd-88e0-4e28-957d-c6ca794a173c.png",
        "/lovable-uploads/322cb681-c7e7-4de6-8cc8-5ff16f7499a8.png",
      ]
    },
    "turbo-timing-pipes": {
      title: "Turbo Timing Pipes and Hoses",
      description: "Precision-engineered timing pipes and hoses for turbo systems. Our products ensure accurate timing and reliable performance in demanding engine environments.",
      images: [
        "/lovable-uploads/d126f5c5-9d5d-43f1-accc-6038b8d46deb.png",
        "/lovable-uploads/e2abf0eb-c86d-46ea-b472-1f167e84b96d.png",
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
  const isPtfeTeflonHose = productId === 'ptfe-teflon-hose';
  const isSteeringHose = productId === 'steering-hose';
  const isTransferPump = productId === 'transfer-pump';
  const isTurboPipeHose = productId === 'turbo-pipe-hose';
  const isTurboTimingPipes = productId === 'turbo-timing-pipes';

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
            )}
            
            {/* Hydraulic Hose Layout - Single Row with 3 items (2+1 on mobile) */}
            {isHydraulicHose && (
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              </div>
            )}
            
            {/* Hydraulic System Layout - 3x2 Grid (2x3 on mobile) */}
            {isHydraulicSystem && (
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Injection Lines Layout - 4x2 Grid on desktop (2x4 on mobile) */}
            {isInjectionLines && (
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Leak of Fuel Pipe Layout - 3x2 Grid on desktop (2x3 on mobile) */}
            {isLeakOfFuelPipe && (
              <div className="mb-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* PTFE Teflon Hose Layout - 4+4+3 Grid on desktop (2 or 1 column on mobile) */}
            {isPtfeTeflonHose && (
              <div className="mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={3/4}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {product.images.slice(4, 8).map((image, index) => (
                    <div key={index + 4} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={3/4}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 5}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.images.slice(8).map((image, index) => (
                    <div key={index + 8} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={3/4}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 9}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Steering Hose Layout - Vertical alignment (2+1 on mobile) */}
            {isSteeringHose && (
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.images.slice(0, 2).map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-md h-full">
                        <AspectRatio ratio={3/4}>
                          <img 
                            src={image} 
                            alt={`${product.title} - Image ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </AspectRatio>
                      </div>
                    ))}
                  </div>
                  <div className="md:w-1/3">
                    {product.images.slice(2, 3).map((image, index) => (
                      <div key={index + 2} className="overflow-hidden rounded-lg shadow-md h-full">
                        <AspectRatio ratio={3/4}>
                          <img 
                            src={image} 
                            alt={`${product.title} - Image ${index + 3}`} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                          />
                        </AspectRatio>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Transfer Pump Layout - 3 images in a row (1x3 on desktop, 1x3 or stacked on mobile) */}
            {isTransferPump && (
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Turbo Pipe Hose Layout - 4x3 grid on desktop (slider on mobile) */}
            {isTurboPipeHose && (
              <div className="mb-8">
                {/* Desktop Layout - 4x3 Grid */}
                <div className="hidden md:grid md:grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                      <AspectRatio ratio={3/4}>
                        <img 
                          src={image} 
                          alt={`${product.title} - Image ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>
                
                {/* Mobile Layout - Slider */}
                <div className="md:hidden">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {product.images.map((image, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div className="p-1">
                            <div className="overflow-hidden rounded-lg shadow-md">
                              <AspectRatio ratio={3/4}>
                                <img 
                                  src={image} 
                                  alt={`${product.title} - Image ${index + 1}`} 
                                  className="w-full h-full object-cover" 
                                />
                              </AspectRatio>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-4">
                      <CarouselPrevious className="static transform-none mx-2" />
                      <CarouselNext className="static transform-none mx-2" />
                    </div>
                  </Carousel>
                </div>
              </div>
            )}
            
            {/* Turbo Timing Pipes Layout - 2 images side by side on desktop, vertical on mobile */}
            {isTurboTimingPipes && (
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {product.images.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md md:w-1/2">
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
              </div>
            )}
            
            {/* Default Layout for other products */}
            {!isCabinLiftingHose && !isHydraulicHose && !isHydraulicSystem && 
             !isInjectionLines && !isLeakOfFuelPipe && !isPtfeTeflonHose && 
             !isSteeringHose && !isTransferPump && !isTurboPipeHose && 
             !isTurboTimingPipes && (
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
