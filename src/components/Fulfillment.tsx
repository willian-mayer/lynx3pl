import React from "react";

interface FulfillmentProps {
  title: string;
  description: string[];
  imageUrl: string;
}

const Fulfillment: React.FC<FulfillmentProps> = ({ title, description, imageUrl }) => {
  return (
    <section id="fulfillment" className="h-screen w-full flex flex-col lg:flex-row overflow-hidden relative">
      {/* Left: Image with green overlay */}
      <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-900 z-0 clip-diagonal-green-lg" />

        {/* Image */}
        <img
          src={imageUrl}
          alt="Fulfillment Service"
          className="absolute inset-0 w-full h-full object-cover z-10 clip-diagonal-lg"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full lg:w-2/5 h-1/2 lg:h-full bg-white flex flex-col justify-center p-6 lg:p-12 z-20">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">{title}</h2>
        {description.map((para, idx) => (
          <p key={idx} className="mb-4 text-gray-700 leading-relaxed text-base lg:text-lg">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Fulfillment;
