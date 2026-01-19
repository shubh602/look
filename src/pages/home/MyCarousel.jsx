//Not so clear 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Get Started",
    image: "images/watch1.png",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Get started",
    image: "images/watch1.png",
  },
  {
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet consectetur.",
    cta: "Get Started",
    image: "images/watch1.png",
  },
];

export function MyCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // 🔁 Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] bg-black overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          className="absolute inset-0 grid grid-cols-2 items-center"
          initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >

          {/* 🔹 LEFT COLUMN — TEXT */}
          <div className="flex flex-col justify-center px-4 md:px-16">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-[12px] md:text-lg"
            >
              {slides[index].desc}
            </motion.p>

            <motion.button
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 w-fit bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm whitespace-nowrap"
            >
              {slides[index].cta}
            </motion.button>
          </div>

          {/* 🔹 RIGHT COLUMN — IMAGE */}
          <div className="relative overflow-hidden">
            <motion.img
              src={slides[index].image}
              alt=""
              className="h-80 w-80 md:w-full md:h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.9 }}
            />
          </div>

        </motion.div>
      </AnimatePresence>

      {/* 🔘 DOTS */}
      <div className="z-10 absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}         
          />
        ))}
      </div>
    </section>
  );
}




