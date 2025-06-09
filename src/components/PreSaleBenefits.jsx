import React from 'react';

const PreSaleBenefits = () => {
  const benefits = [
    {
      title: "Starting Price",
      value: "$120,000"
    },
    {
      title: "ROI",
      value: "15%"
    },
    {
      title: "Contract",
      value: "30 years"
    },
    {
      title: "Capital Appreciation",
      value: "30%"
    },
    {
      title: "Exclusive Destination",
      value: "North Coast Bali"
    }
  ];

  return (
    <div className="bg-kaya-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-kaya-primary font-work text-3xl md:text-4xl font-semibold mb-12">
          PRE-SALE BENEFITS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-work text-kaya-primary text-lg mb-2 font-medium">
                {benefit.title}
              </h3>
              <p className="font-open text-kaya-accent text-2xl md:text-3xl font-semibold">
                {benefit.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreSaleBenefits;