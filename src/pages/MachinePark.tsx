
import React, { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ImagePlus } from "lucide-react";

const MachinePark = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Use translation keys for page title
  const pageTitle = t('machinePark.title') || (language === 'tr' ? 'Makine Parkımız' : 'Our Machine Park');
  
  // Kategori çevirileri
  const categories = useMemo(() => {
    return [
      {
        id: 'all',
        name: language === 'tr' ? 'Tümü' : 'All',
      },
      {
        id: 'bending',
        name: language === 'tr' ? 'Bükme Makineleri' : 'Bending Machines',
      },
      {
        id: 'cutting',
        name: language === 'tr' ? 'Kesme Makineleri' : 'Cutting Machines',
      },
      {
        id: 'welding',
        name: language === 'tr' ? 'Kaynak Makineleri' : 'Welding Machines',
      },
      {
        id: 'turning',
        name: language === 'tr' ? 'Torna Makineleri' : 'Turning Machines',
      },
      {
        id: 'quality',
        name: language === 'tr' ? 'Kalite Kontrol Ekipmanları' : 'Quality Control Equipment',
      },
    ];
  }, [language]);
  
  // Makine verileri
  const machines = [
    {
      id: 1,
      name: "CNC T6 Boru Bükme",
      category: "bending",
      imageSrc: "/lovable-uploads/788351f1-e284-449e-999c-2826bb7c56c8.png",
    },
    {
      id: 2,
      name: "Hidrolik Pres 4 Eksen",
      category: "bending",
      imageSrc: "/lovable-uploads/b933cc1b-c157-465d-aba0-7b9c3156f5a5.png",
    },
    {
      id: 3,
      name: "Universal Torna Tezgahı",
      category: "turning",
      imageSrc: "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png",
    },
    {
      id: 4,
      name: "CNC Torna Tezgahı",
      category: "turning",
      imageSrc: "/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png",
    },
    {
      id: 5,
      name: "Şerit Testere",
      category: "cutting",
      imageSrc: "/lovable-uploads/ef893e80-66f5-4c60-a31a-88506cae124d.png",
    },
    {
      id: 6,
      name: "Kesme ve Soğutma Presi",
      category: "cutting",
      imageSrc: "/lovable-uploads/29ec307d-8b0a-43f2-ab15-53e95b85506c.png",
    },
    {
      id: 7,
      name: "Baskı Test Cihazı",
      category: "quality",
      imageSrc: "/lovable-uploads/fd0c66ec-4343-42ab-92b7-800e73443d4f.png",
    },
    {
      id: 8,
      name: "TIG Kaynak Makinesi",
      category: "welding",
      imageSrc: "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png",
    },
  ];
  
  // Filtrelenmiş makineler
  const filteredMachines = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'all') {
      return machines;
    }
    return machines.filter(machine => machine.category === selectedCategory);
  }, [selectedCategory, machines]);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="section-padding">
          <Container>
            <h1 className="section-title text-kumru-navy mb-16">
              {pageTitle}
            </h1>
            
            {/* Kategori filtreleme butonları */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* Makine galerisi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMachines.map((machine) => (
                <div key={machine.id} className="rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
                  <AspectRatio ratio={4/3} className="bg-gray-100">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      {machine.imageSrc ? (
                        <img 
                          src={machine.imageSrc} 
                          alt={machine.name} 
                          className="max-w-full max-h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <ImagePlus size={48} />
                          <span className="mt-2">Görsel Yok</span>
                        </div>
                      )}
                    </div>
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{machine.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">
                      {categories.find(c => c.id === machine.category)?.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredMachines.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  {language === 'tr' ? 'Bu kategoride makine bulunamadı.' : 'No machines found in this category.'}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MachinePark;
