import React from "react";
import { useNavigate } from "react-router-dom";
import { FeaturedSpotlight } from "./ui/feature-spotlight";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      titlePrefix: "Roof",
      titleSuffix: "Repair",
      description: "Fast response for leaks, missing shingles, and wear. We restore your home's protection and curb appeal efficiently.",
      imageUrl: "/roof-repair.png",
      index: "01",
      link: "/contact"
    },
    {
      titlePrefix: "Roof",
      titleSuffix: "Replacement",
      description: "Full residential roof replacements with premium asphalt, metal, or tile options. Lifetime warranties available.",
      imageUrl: "/roof-replacement.png",
      index: "02",
      link: "/contact"
    },
    {
      titlePrefix: "Storm",
      titleSuffix: "Restoration",
      description: "Expert damage assessment and restoration after severe weather. We help navigate insurance claims for your peace of mind.",
      imageUrl: "/storm-damage.png",
      index: "03",
      link: "/contact"
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        {services.map((service) => (
          <div key={service.index} className="flex justify-center">
            <FeaturedSpotlight
              titlePrefix={service.titlePrefix}
              titleSuffix={service.titleSuffix}
              description={service.description}
              imageUrl={service.imageUrl}
              index={service.index}
              label="Services"
              onLearnMore={() => navigate(service.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
