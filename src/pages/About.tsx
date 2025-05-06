
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Company Story Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">About RSS Kumru</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-4">
                  Founded over two decades ago, RSS Kumru Automotive has established itself as a leader in precision hydraulic systems and custom-engineered lines for the automotive and industrial sectors.
                </p>
                <p className="text-lg mb-4">
                  Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for manufacturers around the globe. We specialize in designing and producing high-performance hydraulic hoses, fittings, and complete line assemblies tailored to our clients' exact specifications.
                </p>
                <p className="text-lg">
                  With ISO-certified manufacturing processes and a team of dedicated engineers, we deliver solutions that meet the highest standards of durability, reliability, and performance.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-xl h-full flex items-center justify-center p-8">
                  <img 
                    src="public/lovable-uploads/c42d9fdb-64c7-4345-9c1a-6f16b2878860.png" 
                    alt="RSS Kumru Logo" 
                    className="max-w-full max-h-64 mx-auto"
                  />
                </div>
                <img 
                  src="public/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
                  alt="RSS Kumru Robot Mascot" 
                  className="absolute -bottom-10 right-10 h-48 opacity-60"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-kumru-navy">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">Excellence</h3>
                <p>We are committed to excellence in every aspect of our business, from product design and manufacturing to customer service and support.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">Innovation</h3>
                <p>We continuously invest in research and development to create innovative solutions that address the evolving needs of our clients.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">Integrity</h3>
                <p>We conduct our business with the highest standards of integrity, maintaining transparent relationships with our clients, partners, and employees.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
