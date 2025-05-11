'use client';

import Image from 'next/image';

type Step = {
  highlight: string;
  text: string;
};

type HowWeWorkProps = {
  title: string;
  description: string;
  steps: Step[];
};

export default function HowWeWork({ title, description, steps }: HowWeWorkProps) {
  return (
    <section id="how-it-works" className="w-full h-screen bg-white text-black flex flex-col md:flex-row items-center justify-center px-6 py-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">{title}</h2>
        <p className="text-xl md:text-3xl leading-relaxed">{description}</p>
        <div className="space-y-4 md:space-y-5">
          {steps.map((step, index) => (
            <p key={index} className="text-lg md:text-2xl text-start">
              <span className="font-semibold">{step.highlight}</span>
              <span className="font-normal">{step.text}</span>
            </p>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative h-64 md:h-[80%] mt-8 md:mt-0">
        <Image
          src="/how-we-work/image.jpg"
          alt="How We Work"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
