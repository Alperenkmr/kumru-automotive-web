
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ className }) => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const benefits = [
    {
      title: "Over 20 Years' Expertise",
      description:
        "Two decades of industry experience and technical knowledge in hydraulic systems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
    {
      title: "ISO-Certified Quality",
      description:
        "Our manufacturing processes meet international quality standards for reliability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      ),
    },
    {
      title: "Fast Global Shipping",
      description:
        "Efficient logistics network ensures quick delivery to any location worldwide.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Anında görünür olması için bir süre beklemeden tüm kartları animasyon ile göster
    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animated');
      }, 100 * index); // Küçük bir gecikme ile animasyonları başlat
    });
    
    // Seksiyon görünürken is-visible sınıfını ekle
    if (sectionRef.current) {
      sectionRef.current.classList.add('is-visible');
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={cn(
        "section-padding bg-kumru-white min-h-[500px]",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="section-title">{t('whyChooseUs.title')}</h2>
        <p className="section-subtitle">
          {t('whyChooseUs.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-kumru-teal mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
