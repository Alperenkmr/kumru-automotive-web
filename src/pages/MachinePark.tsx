
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

// Machine park images and descriptions (removing b5b5a004 image)
interface MachineItem {
  id: number;
  image: string;
  titleTr: string;
  titleEn: string;
}

const machineItems: MachineItem[] = [
  {
    id: 3,
    image: "/lovable-uploads/b7ed632c-3b91-4c1f-a1aa-15d2256afe1f.png",
    titleTr: "Endüstriyel Robot Kolu",
    titleEn: "Industrial Robot Arm"
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

// Laboratory images
const laboratoryImages: MachineItem[] = [
  {
    id: 1,
    image: "/lovable-uploads/34d2855c-48b9-4ba8-8c4c-ed83aab896a1.png",
    titleTr: "Hassas Ölçüm ve Test Cihazları",
    titleEn: "Precision Measurement and Testing Equipment"
  },
  {
    id: 2,
    image: "/lovable-uploads/4fe5efe8-e261-4ddf-a50f-327fca78ec0c.png",
    titleTr: "Kalite Kontrol Ölçüm Cihazı",
    titleEn: "Quality Control Measurement Device"
  },
  {
    id: 3,
    image: "/lovable-uploads/be0c7630-38bd-4126-bf83-f60033cedb18.png",
    titleTr: "Laboratuvar Analiz Sistemi",
    titleEn: "Laboratory Analysis System"
  },
  {
    id: 4,
    image: "/lovable-uploads/0aa99fbc-33e1-436b-8bd9-62171f90f83a.png",
    titleTr: "Test ve Doğrulama Ekipmanı",
    titleEn: "Testing and Validation Equipment"
  },
  {
    id: 5,
    image: "/lovable-uploads/9d71a663-30f8-4eab-8713-8be3851b8fbf.png",
    titleTr: "Dijital Ölçüm Kalibre Sistemi",
    titleEn: "Digital Measurement Calibration System"
  },
  {
    id: 6,
    image: "/lovable-uploads/8e5ef222-aaaf-4dc3-bfeb-55c2242d32f4.png",
    titleTr: "CNC İşleme ve Kalite Kontrol Sistemi",
    titleEn: "CNC Machining and Quality Control System"
  },
  {
    id: 7,
    image: "/lovable-uploads/13dbe576-659c-4690-b2d2-180415fb6145.png",
    titleTr: "3D Boyutsal Ölçüm ve Analiz Sistemi",
    titleEn: "3D Dimensional Measurement and Analysis System"
  }
];

const MachinePark: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [labActiveSlide, setLabActiveSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [labEmblaRef, labEmblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  // Update emblaApi event listeners to track active slide
  React.useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveSlide(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', onSelect);
      onSelect();
      
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
    return undefined;
  }, [emblaApi]);

  // Laboratory carousel event listeners
  React.useEffect(() => {
    if (labEmblaApi) {
      const onSelect = () => {
        setLabActiveSlide(labEmblaApi.selectedScrollSnap());
      };

      labEmblaApi.on('select', onSelect);
      onSelect();
      
      return () => {
        labEmblaApi.off('select', onSelect);
      };
    }
    return undefined;
  }, [labEmblaApi]);

  // Get the correct title based on language
  const framesTitle = language === 'tr' ? "Fabrikamızdan Kareler" : "Frames from Our Factory";
  const labTitle = language === 'tr' ? "Laboratuvarımız" : "Our Laboratory";
  const developmentTitle = language === 'tr' ? "Ürünlerimizi Nasıl Geliştiriyoruz" : "How We Develop Our Products";

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "Fabrikamız" : "Our Factory"}
        description={language === 'tr' ? "RSS Kumru Automotive modern fabrikası ile yüksek kaliteli üretim yapmaktadır." : "RSS Kumru Automotive performs high-quality production with its modern factory."} 
        canonicalUrl="/machine-park" 
      />
      <Header />
      <main className="pt-24 pb-16">
        <section className="section-padding">
          <Container>
            {/* Factory Images Section */}
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-kumru-navy mb-8 text-center">
                {framesTitle}
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
              </div>
              
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <p className="text-gray-700 mb-6">
                  {language === 'tr' 
                    ? 'Modern fabrikamız ile yüksek kaliteli ve hassas ürünler üretebilmekteyiz. Teknolojik altyapımız sayesinde müşterilerimizin özel ihtiyaçlarına uygun çözümler sunabiliyoruz.'
                    : 'With our modern factory, we can produce high-quality and precision products. Thanks to our technological infrastructure, we can provide solutions tailored to the specific needs of our customers.'
                  }
                </p>
                <p className="text-gray-700">
                  {language === 'tr'
                    ? 'Tüm makinelerimiz periyodik bakımlarla desteklenerek sürekli en yüksek verimlilikte çalışması sağlanmaktadır.'
                    : 'All our machines are supported by periodic maintenance to ensure they continuously operate at the highest efficiency.'
                  }
                </p>
              </div>
            </div>

            {/* Laboratory Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Laboratory Images */}
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-kumru-navy mb-8">
                  {labTitle}
                </h2>
                
                <div className="relative">
                  <Carousel ref={labEmblaRef} className="w-full" opts={{ loop: true, align: "center" }}>
                    <CarouselContent>
                      {laboratoryImages.map((item) => (
                        <CarouselItem key={item.id}>
                          <div className="p-2">
                            <div className="overflow-hidden rounded-xl shadow-lg">
                              <img
                                src={item.image}
                                alt={language === 'tr' ? item.titleTr : item.titleEn}
                                className="w-full h-[350px] object-cover"
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>

              {/* Right - Development Process Text */}
              <div>
                <h3 className="text-2xl font-montserrat font-bold text-kumru-navy mb-6">
                  {developmentTitle}
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  {language === 'tr' ? (
                    <>
                      <div>
                        <h4 className="text-lg font-bold text-kumru-navy mb-3">
                          Tersine Mühendislikte Uzmanlık, Kalitede Taviz Yok
                        </h4>
                        <p className="mb-4">
                          RSS Kumru olarak, yıllara dayanan tecrübemiz ve yüksek mühendislik altyapımızla tersine mühendislik süreçlerinde fark yaratıyoruz. Elimizde yalnızca teknik bilgi ya da örnek çizim bulunsa bile, ürünü eksiksiz şekilde yeniden tasarlayıp üretebiliyoruz. Hatta, bazı durumlarda fiziksel numunesi dahi olmayan parçaları üretime kazandırma kabiliyetine sahibiz.
                        </p>
                        <p className="mb-4">
                          Sürecin her aşamasında titizlikle yürüttüğümüz kalite kontrol uygulamalarımız, sektör standartlarının ötesine geçer. Malzeme analizinden ölçüsel doğrulamaya, dayanım testlerinden montaj uyumluluğuna kadar tüm kontroller, uzman mühendis ve teknisyen kadromuz tarafından hassasiyetle yürütülür.
                        </p>
                        <p>
                          RSS Kumru olarak sadece ürün üretmiyor, güven inşa ediyoruz. Geniş bilgi birikimimiz, mühendislik gücümüz ve çözüm odaklı yaklaşımımızla; size özel, yüksek kaliteli çözümler sunmaya hazırız.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="text-lg font-bold text-kumru-navy mb-3">
                          Expertise in Reverse Engineering, Uncompromising in Quality
                        </h4>
                        <p className="mb-4">
                          At RSS Kumru, we leverage years of experience and strong engineering capabilities to stand out in reverse engineering. Even with only technical data or drawings, we can fully redesign and manufacture a product from scratch. In some cases, we can even develop and produce components without a physical sample.
                        </p>
                        <p className="mb-4">
                          Our rigorous quality control processes exceed industry standards at every stage. From material analysis to dimensional verification, durability testing to assembly compatibility checks, every step is handled with precision by our experienced engineers and technical team.
                        </p>
                        <p>
                          At RSS Kumru, we don't just manufacture products — we build trust. With our extensive know-how, engineering strength, and solution-oriented mindset, we are ready to deliver high-quality, tailor-made solutions for your needs.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MachinePark;
