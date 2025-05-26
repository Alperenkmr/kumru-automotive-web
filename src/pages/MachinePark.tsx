
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
  const pageTitle = language === 'tr' ? "Fabrikamız" : "Our Factory";
  const framesTitle = language === 'tr' ? "Fabrikamızdan Kareler" : "Frames from Our Factory";
  const labTitle = language === 'tr' ? "Laboratuvarımız" : "Our Laboratory";
  const developmentTitle = language === 'tr' ? "Ürünlerimizi Nasıl Geliştiriyoruz" : "How We Develop Our Products";

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={pageTitle}
        description={language === 'tr' ? "RSS Kumru Automotive modern fabrikası ile yüksek kaliteli üretim yapmaktadır." : "RSS Kumru Automotive performs high-quality production with its modern factory."} 
        canonicalUrl="/machine-park" 
      />
      <Header />
      <main className="pt-24 pb-16">
        <section className="section-padding">
          <Container>
            <h1 className="section-title text-kumru-navy mb-16">
              {pageTitle}
            </h1>
            
            {/* Factory Images Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-montserrat font-bold text-kumru-navy mb-8 text-center">
                {framesTitle}
              </h2>
              
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
                
                <div className="space-y-4 text-gray-700">
                  {language === 'tr' ? (
                    <>
                      <p>
                        <strong>Ters Mühendislik Yaklaşımımız:</strong> Mevcut ürünleri detaylı olarak analiz ederek, 
                        onların güçlü yönlerini koruyup zayıf noktalarını iyileştirerek daha üstün performans 
                        gösteren ürünler geliştiriyoruz.
                      </p>
                      <p>
                        <strong>Detaylı Kalite Kontrol Süreci:</strong> Laboratuvarımızda her ürün, üretim öncesi 
                        ve sonrası olmak üzere çok aşamalı test süreçlerinden geçirilir. Hassas ölçüm cihazlarımız 
                        ile mikrometrik toleranslar kontrol edilir.
                      </p>
                      <p>
                        <strong>Uzman Kadromuz:</strong> Alanında deneyimli mühendis ve teknisyen kadromuz, 
                        müşterilerimizin en karmaşık ihtiyaçlarını bile karşılayabilecek çözümler üretir. 
                        Sürekli araştırma ve geliştirme faaliyetlerimizle sektörde öncü olmaya devam ediyoruz.
                      </p>
                      <p>
                        <strong>İnovasyon ve Teknoloji:</strong> Modern test ekipmanlarımız ve dijital ölçüm 
                        sistemlerimiz sayesinde, endüstri 4.0 standartlarında üretim yapabilmekteyiz.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Reverse Engineering Approach:</strong> We analyze existing products in detail, 
                        preserving their strengths while improving their weaknesses to develop superior 
                        performance products.
                      </p>
                      <p>
                        <strong>Detailed Quality Control Process:</strong> In our laboratory, every product 
                        undergoes multi-stage testing processes both before and after production. 
                        Micrometric tolerances are controlled with our precision measuring instruments.
                      </p>
                      <p>
                        <strong>Expert Team:</strong> Our experienced team of engineers and technicians 
                        produces solutions that can meet even the most complex needs of our customers. 
                        We continue to be pioneers in the industry with our continuous research and 
                        development activities.
                      </p>
                      <p>
                        <strong>Innovation and Technology:</strong> Thanks to our modern testing equipment 
                        and digital measurement systems, we can produce according to Industry 4.0 standards.
                      </p>
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
