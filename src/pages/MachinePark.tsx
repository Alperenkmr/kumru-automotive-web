
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import SEO from "@/components/SEO";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

// Machine park images and descriptions
interface MachineItem {
  id: number;
  image: string;
  titleTr: string;
  titleEn: string;
}

const machineItems: MachineItem[] = [
  {
    id: 1,
    image: "/lovable-uploads/4fae47ef-d433-43ca-afa2-478a16cd1e39.png",
    titleTr: "CNC İşleme Merkezi",
    titleEn: "CNC Machining Center"
  },
  {
    id: 3,
    image: "/lovable-uploads/b7ed632c-3b91-4c1f-a1aa-15d2256afe1f.png",
    titleTr: "Endüstriyel Robot Kolu",
    titleEn: "Industrial Robot Arm"
  },
  {
    id: 4,
    image: "/lovable-uploads/b5b5a004-e059-41c9-8d06-ad0fa567f24d.png",
    titleTr: "Hassas Ölçüm Cihazı",
    titleEn: "Precision Measuring Device"
  },
  {
    id: 5,
    image: "/lovable-uploads/3ffea39c-0207-42ac-936a-87fd2b984ca7.png",
    titleTr: "Ham Malzeme Depolama Sistemi",
    titleEn: "Raw Material Storage System"
  },
  {
    id: 6,
    image: "/lovable-uploads/03bfd6fa-a2c0-43ae-ac1b-c8cb6bf817a3.png",
    titleTr: "Boru Malzeme Stok Alanı",
    titleEn: "Pipe Material Stock Area"
  },
  {
    id: 7,
    image: "/lovable-uploads/eb2d97fb-aacd-4b4b-b3be-4803469d57a3.png",
    titleTr: "CNC Tezgah Üretim Hattı",
    titleEn: "CNC Machine Production Line"
  },
  {
    id: 9,
    image: "/lovable-uploads/e71d2aa2-6c9d-4713-b7aa-48d69d4040b7.png",
    titleTr: "Atölye Üretim Alanı",
    titleEn: "Workshop Production Area"
  },
  {
    id: 10,
    image: "/lovable-uploads/46611d63-27b2-4d14-bf5e-c9d26320cdd9.png",
    titleTr: "CNC Freze Makinası",
    titleEn: "CNC Milling Machine"
  }
];

const MachinePark: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  // Update emblaApi event listeners to track active slide
  React.useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveSlide(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', onSelect);
      // Initial call to set the starting slide
      onSelect();
      
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
    return undefined;
  }, [emblaApi]);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "Makine Parkımız" : "Our Machine Park"} 
        description={language === 'tr' ? "RSS Kumru Automotive modern makine parkı ile yüksek kaliteli üretim yapmaktadır." : "RSS Kumru Automotive performs high-quality production with its modern machine park."} 
        canonicalUrl="/machine-park" 
      />
      <Header />
      <main className="pt-24 pb-16">
        <section className="section-padding">
          <Container>
            <h1 className="section-title text-kumru-navy mb-16">
              {language === 'tr' ? 'Makine Parkımız' : 'Our Machine Park'}
            </h1>
            
            <div className="relative mx-auto max-w-4xl">
              <Carousel ref={emblaRef} className="w-full" opts={{ loop: true, align: "center" }}>
                <CarouselContent>
                  {machineItems.map((item) => (
                    <CarouselItem key={item.id}>
                      <div className="p-2">
                        <div className="overflow-hidden rounded-xl shadow-lg">
                          <img
                            src={item.image}
                            alt={language === 'tr' ? item.titleTr : item.titleEn}
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
              
              <div className="mt-6 bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-2xl font-bold text-kumru-navy">
                  {language === 'tr' 
                    ? machineItems[activeSlide].titleTr 
                    : machineItems[activeSlide].titleEn
                  }
                </h3>
              </div>
            </div>
            
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                {language === 'tr' 
                  ? 'Modern makine parkımız ile yüksek kaliteli ve hassas ürünler üretebilmekteyiz. Teknolojik altyapımız sayesinde müşterilerimizin özel ihtiyaçlarına uygun çözümler sunabiliyoruz.'
                  : 'With our modern machine park, we can produce high-quality and precision products. Thanks to our technological infrastructure, we can provide solutions tailored to the specific needs of our customers.'
                }
              </p>
              <p className="text-gray-700">
                {language === 'tr'
                  ? 'Tüm makinelerimiz periyodik bakımlarla desteklenerek sürekli en yüksek verimlilikte çalışması sağlanmaktadır.'
                  : 'All our machines are supported by periodic maintenance to ensure they continuously operate at the highest efficiency.'
                }
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MachinePark;
