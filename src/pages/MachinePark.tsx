
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
  descTr: string;
  descEn: string;
}

const machineItems: MachineItem[] = [
  {
    id: 1,
    image: "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png",
    titleTr: "CNC Boru Bükme Makinası",
    titleEn: "CNC Pipe Bending Machine",
    descTr: "Modern CNC kontrollü boru bükme makinamız ile hassas açılarda ve ölçülerde bükümler gerçekleştirebiliyoruz.",
    descEn: "With our modern CNC-controlled pipe bending machine, we can perform precise bends at accurate angles and measurements."
  },
  {
    id: 2,
    image: "/lovable-uploads/01712518-8600-401d-ac51-f4ba12a53980.png",
    titleTr: "Hidrolik Test Ünitesi",
    titleEn: "Hydraulic Testing Unit",
    descTr: "Üretilen tüm hidrolik hatların kalite kontrolü için yüksek basınç test ünitesi ile test edilmektedir.",
    descEn: "All produced hydraulic lines are tested with a high-pressure test unit for quality control."
  },
  {
    id: 3,
    image: "/lovable-uploads/4246bf3a-255f-4174-808a-2759a8ea280e.png",
    titleTr: "CNC Torna",
    titleEn: "CNC Lathe",
    descTr: "CNC torna makinamız ile hassas bağlantı parçaları üretimi yapabilmekteyiz.",
    descEn: "With our CNC lathe machine, we can produce precision connection parts."
  },
  {
    id: 4,
    image: "/lovable-uploads/387ef443-1ad6-45ed-be70-5f73274718d2.png",
    titleTr: "Otomat Tezgahı",
    titleEn: "Automatic Lathe",
    descTr: "Yüksek hızlı üretim için özel otomat tezgahlarımız ile seri üretim yapabilmekteyiz.",
    descEn: "We can perform mass production with our special automatic lathes for high-speed production."
  },
  {
    id: 5,
    image: "/lovable-uploads/528b4908-3b16-47d4-804f-69d795971c8e.png",
    titleTr: "Kalite Kontrol İstasyonu",
    titleEn: "Quality Control Station",
    descTr: "Her ürünümüz gönderilmeden önce kalite kontrol istasyonumuzda detaylı kontrollere tabi tutulmaktadır.",
    descEn: "Before shipping, each of our products undergoes detailed inspections at our quality control station."
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
                  {machineItems.map((item, index) => (
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
                <h3 className="text-xl font-bold text-kumru-navy mb-3">
                  {language === 'tr' 
                    ? machineItems[activeSlide].titleTr 
                    : machineItems[activeSlide].titleEn
                  }
                </h3>
                <p className="text-gray-700">
                  {language === 'tr' 
                    ? machineItems[activeSlide].descTr 
                    : machineItems[activeSlide].descEn
                  }
                </p>
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
