'use client'; // Ensure this is run on the client-side

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import LightRays from '../ui/animation/LightRays';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // When the component mounts, trigger the animation by updating the state
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 100); // Slight delay to ensure component is mounted before animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-black text-white min-h-screen max-w-7xl mx-auto flex justify-center items-center pt-16 text-center">

      {/* LightRays behind everything */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={5.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Container for image + content */}
      <div className="flex flex-col items-center relative z-10 gap-6">
        {/* Image */}
       <motion.img
  src="/section-images/hero-watch.png"
  alt="Apple Watch"
  className="w-64 h-64 object-cover rounded-full"
  initial={{ opacity: 0, scale: 0.3, rotate: 0 }}
  animate={{
    opacity: 1,
    scale: 1,
    rotate: 360, // Rotate full circle
  }}
  transition={{
    duration: 20, // Time for one full rotation in seconds
    repeat: Infinity, // Keep rotating
    repeatType: 'loop',
    ease: 'linear', // Smooth continuous rotation
  }}
/>


        {/* Text content */}
        <div className="text-center">
          <motion.h1 className="text-5xl !font-light">
            Have an Apple Watch? <br />
            <span className="!font-semibold">Your wrist, your world.</span>
          </motion.h1>

          <motion.h3 className="text-2xl !font-light text-gray-400">
            Apple Watch Series 9 — <span className="!font-semibold text-red-600">The most advanced health and fitness tracker.</span>
          </motion.h3>

          <motion.p className="max-w-xl mx-auto text-lg font-thin !leading-snug text-[#afa39b] !mb-8">
            Stay connected, track your health, and customize your fitness goals with the new Apple Watch. From heart rate monitoring to ECG, it’s built to help you lead a healthier, more connected life.
          </motion.p>

          <motion.a
            href="https://www.apple.com/apple-watch-series-9"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition "
          >
            BUY NOW
          </motion.a>
        </div>
      </div>

    </section>

  );
};

export default HeroSection;
