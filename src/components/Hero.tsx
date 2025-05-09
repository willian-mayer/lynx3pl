'use client';

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        paddingTop: '64px'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl">{description}</p>
      </div>
    </section>
  );
}
