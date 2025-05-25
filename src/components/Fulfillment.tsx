import React from "react";
import fulfillmentData from "../data/fulfillment.json";
import { motion } from "framer-motion";

interface Step {
  name: string;
  content: string;
}

interface HowWorks {
  desc: string;
  steps: Step[];
}

interface Item {
  name: string;
  content: string;
}

interface FulfillmentSection {
  title: string;
  description: string;
  "how-works": HowWorks[];
  items: Item[];
}

const Fulfillment: React.FC = () => {
  const data: FulfillmentSection = fulfillmentData[0];

  return (
    <section className="w-full lg:h-screen flex flex-col lg:flex-row">
      {/* Parte 1: Imagen */}
      <div className="w-full lg:w-1/3 h-[300px] lg:h-full">
        <img
          src="/fulfillment/image.jpg"
          alt="Fulfillment"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Parte 2: Contenido */}
 <div className="w-full lg:w-2/3 p-6 lg:py-10 lg:px-12 bg-white dark:bg-gray-900 overflow-y-auto mt-0 lg:mt-[100px]">

        {/* Título y Descripción */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {data.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {data.description}
          </p>
        </div>

        {/* Cómo Funciona */}
        <div className="mb-10">
          {data["how-works"].map((section, idx) => (
            <div key={idx}>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                {section.desc}
              </p>
              <ul className="space-y-2">
                {section.steps.map((step, i) => (
                  <li
                    key={i}
                    className="pl-4 border-l-2 border-primary dark:border-blue-400"
                  >
                    <span className="font-semibold text-sm text-gray-800 dark:text-white block">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {step.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Items en Cuadrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
            >
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fulfillment;
