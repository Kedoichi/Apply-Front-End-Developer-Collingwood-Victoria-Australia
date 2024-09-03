import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "How to Play",
    answer: (
      <div className="space-y-2">
        <p>1. The robot starts at position (0, 0) facing North.</p>
        <p>
          2. Use &LDQUO;Move Forwar&LDQUO; to move in the direction it&apos;s
          facing.
        </p>
        <p>
          3. Use &LDQUO;Rotate Left&LDQUO; and &LDQUO;Rotate Right&LDQUO; to
          change direction.
        </p>
        <p>4. The robot cannot move outside the 5x5 grid.</p>
        <p>5. Current position and direction are displayed below the grid.</p>
      </div>
    ),
  },
  {
    question: "About the Developer",
    answer: (
      <div className="space-y-2">
        <h3 className="font-semibold">Quoc T. Vu</h3>
        <p>
          A dedicated Software Engineer with a Bachelor&apos;s degree in
          Information Technology from La Trobe University. Specializing in
          innovative front-end and back-end development, focusing on scalable
          web solutions and enhanced user experience.
        </p>
        <p>
          This Robot Simulator demonstrates skills in TypeScript, Next.js,
          Tailwind CSS, and design inspired by Bellroy&apos;s aesthetic,
          showcasing the ability to create clean, modern interactive web
          applications.
        </p>
      </div>
    ),
  },
];

const ResponsiveInfo: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openBubbles, setOpenBubbles] = useState<boolean[]>([false, false]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleBubble = (index: number) => {
    setOpenBubbles((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  if (isMobile) {
    return (
      <div className="fixed bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg overflow-hidden">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-bellroy-blue">
                  {item.question}
                </span>
                <span className="transform transition-transform duration-200">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 text-sm">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`fixed ${
            index === 0 ? "bottom-4 left-4" : "bottom-4 right-4"
          }`}
        >
          <AnimatePresence>
            {openBubbles[index] && (
              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={`fixed ${
                  index === 0 ? "bottom-24 left-4" : "bottom-24 right-4"
                } bg-bellroy-blue text-white p-6 rounded-lg shadow-lg max-w-sm`}
              >
                <h3 className="text-2xl font-bold mb-4 tracking-wider">
                  {item.question}
                </h3>
                <div className="space-y-4 text-sm">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white ${
              openBubbles[index] ? "bg-bellroy-orange" : "bg-bellroy-blue"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleBubble(index)}
          >
            {openBubbles[index] ? "X" : index === 0 ? "?" : "i"}
          </motion.button>
        </div>
      ))}
    </>
  );
};

export default ResponsiveInfo;
