
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface WhatWeDoProps {
  className?: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ className }) => {
  const { t } = useLanguage();
  
  const services = [
    { nameKey: "services.hoses", icon: "🔄" },
    { nameKey: "services.fittings", icon: "🔩" },
    { nameKey: "services.ptfeLines", icon: "📊" },
    { nameKey: "services.turboPipes", icon: "💨" },
    { nameKey: "services.injectionLines", icon: "💉" },
  ];

  return (
    <section
      id="what-we-do"
      className={cn(
        "section-padding bg-kumru-white",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kumru-black">{t('whatWeDo.title')}</h2>
            <p className="text-lg mb-6">
              {t('whatWeDo.content')}
            </p>
          </div>
          
          <div className="bg-kumru-navy rounded-xl p-8 text-white animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6">{t('services.title')}</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-center text-lg">
                  <span className="mr-4 text-2xl">{service.icon}</span>
                  <span>{t(service.nameKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
