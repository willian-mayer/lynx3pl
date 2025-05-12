import React from "react";

interface WarehouseProps {
  title: string;
  description: string[];
  imageUrl: string;
}

const Warehouse: React.FC<WarehouseProps> = ({ title, description, imageUrl }) => {
  return (
    <section className="h-screen w-full flex flex-col lg:flex-row-reverse overflow-hidden relative">
      {/* Right: Image with green overlay */}
      <div className="relative w-full lg:w-3/5 h-1/2 lg:h-full">
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-900 z-0 clip-diagonal-green-lg-reverse" />

        {/* Image */}
        <img
          src={imageUrl}
          alt="Warehouse Service"
          className="absolute inset-0 w-full h-full object-cover z-10 clip-diagonal-lg-reverse"
        />
      </div>

      {/* Left: Text */}
      <div className="w-full lg:w-2/5 h-1/2 lg:h-full bg-white flex flex-col justify-center p-6 lg:p-12 z-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-6">{title}</h2>
        {description.map((para, idx) => (
          <p key={idx} className="mb-4 text-gray-700 leading-relaxed text-base lg:text-lg">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Warehouse;
