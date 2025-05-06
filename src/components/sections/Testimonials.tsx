
import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "RSS Kumru's custom hydraulic hoses have significantly improved our manufacturing efficiency. Their attention to detail and quality is unmatched.",
      author: "John Anderson",
      company: "Anderson Heavy Industries",
      rating: 5,
    },
    {
      quote:
        "We've been working with RSS Kumru for over 5 years. Their reliable products and responsive service keep our agricultural equipment running smoothly.",
      author: "Sarah Thompson",
      company: "Thompson Farming Solutions",
      rating: 5,
    },
    {
      quote:
        "The technical expertise at RSS Kumru is exceptional. They helped us design custom fittings that solved our pressure loss problems.",
      author: "Michael Chen",
      company: "Chen Engineering Corp.",
      rating: 4,
    },
    {
      quote:
        "Fast shipping and consistently high quality. RSS Kumru is our go-to supplier for all hydraulic systems in our automotive manufacturing.",
      author: "Elena Rodriguez",
      company: "Rodriguez Auto Parts",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      className={cn(
        "section-padding bg-gray-50 overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by industries worldwide for quality hydraulic solutions.
        </p>

        <div className="mt-12 relative">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="w-full lg:w-1/2">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-500 transform",
                    activeIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 absolute translate-x-full"
                  )}
                >
                  {activeIndex === index && (
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      company={testimonial.company}
                      rating={testimonial.rating}
                      className="animate-fade-in"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-colors duration-300",
                  activeIndex === index ? "bg-kumru-teal" : "bg-gray-300"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-kumru-orange hover:bg-kumru-orange/90">
            View All Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
