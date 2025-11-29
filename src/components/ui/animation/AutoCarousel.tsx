"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/cards-images/apple-watch-feature (1).jpg",
  "/cards-images/apple-watch-feature (2).jpg",
  "/cards-images/apple-watch-feature (3).jpg",
  "/cards-images/apple-watch-feature (4).jpg",
  "/cards-images/apple-watch-feature (5).jpg",
];

// Helper for circular positions
const toRad = (deg: number) => (deg * Math.PI) / 180;

export default function SevenCardFanCarousel() {
  const [index, setIndex] = useState(0);

  const getImage = (offset: number) => {
    const newIndex = (index + offset + images.length) % images.length;
    return images[newIndex];
  };

  // ⭐ 7 cards → angles from -60° to +60°
  const angles = [-60, -40, -20, 0, 20, 40, 60];

  // Circle radius for card arc
  const R = 380; // bigger radius = wider arc

  const cardSizes = {
    w: 220,
    h: 420,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-end justify-center">

      {angles.map((angle, i) => {
        const rad = toRad(angle);

        // Beautiful arc positions
        const x = Math.sin(rad) * R;
        const y = Math.cos(rad) * 40 - 40; // slight curvature downward

        // Rotation equals angle (looks natural)
        const rotate = angle * 0.85;

        // Wave circles behind
        const circleSize = 180 + Math.abs(angle) * 1.5;

        return (
          <motion.div
            key={index + "-card-" + i}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              x,
              y,
              rotate,
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="absolute bottom-0 origin-bottom"
          >
            {/* WAVE CIRCLE */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-4 
                         rounded-full bg-white/12 blur-xl"
              style={{
                width: circleSize,
                height: circleSize,
              }}
            />

            {/* CARD */}
            <div
              className="relative border-8 border-white/12 rounded-2xl overflow-hidden shadow-xl"
              style={{
                width: cardSizes.w,
                height: cardSizes.h,
              }}
            >
              <Image
                src={getImage(i - 3)}
                alt="card"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        );
      })}

    </div>
  );
}
