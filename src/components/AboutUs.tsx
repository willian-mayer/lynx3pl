'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet,
            nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
            venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1c2luZXNzfGVufDB8fHx8fDE2Nzk4NTg0MTM&ixlib=rb-1.2.1&q=80&w=1080"
            alt="About Us Image"
            width={600}
            height={400}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
