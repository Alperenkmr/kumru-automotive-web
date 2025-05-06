
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CareersProps {
  className?: string;
}

const Careers: React.FC<CareersProps> = ({ className }) => {
  return (
    <section
      id="careers"
      className={cn(
        "section-padding bg-gray-50",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="bg-kumru-yellow rounded-xl p-8 md:p-12 text-center text-kumru-black animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about engineering excellence and automotive innovation. At RSS Kumru, you'll work with cutting-edge technology and contribute to projects for leading manufacturers worldwide.
          </p>
          <Button className="bg-kumru-navy text-white hover:bg-kumru-navy/90 py-6 px-8 rounded-xl text-lg">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
