'use client';

import { motion } from 'framer-motion';
import HeroSection from "@/components/layout/hero-section";
import SectionTitle from "@/components/ui/text/SectionTitle";
import Image from "next/image";
import { InfiniteMovingCards } from '@/components/ui/animation/infinite-moving-cards';
import { InfiniteImageScroller } from '@/components/ui/animation/infinite-moving-image-cards';
import { FaBolt, FaHeart, FaMobileAlt, FaPalette } from 'react-icons/fa';
import AutoCarousel from '@/components/ui/animation/AutoCarousel';

export default function Home() {
  return (
    <div className="bg-black">
      <main className="relative">
        {/* Sticky Hero Section */}
        <div className="sticky top-0 w-full z-10">
          <HeroSection />
        </div>

        {/* Experience the Future */}
        <motion.section
          className="py-16  md:py-24 xl:py-32 flex flex-col items-center justify-center w-full border-dashed border-t-2 border-white/8 rounded-t-full pt-48 relative z-20 mt-32 bg-black/32 backdrop-blur-2xl"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
        >
          <SectionTitle
            heading="Experience the Future on Your Wrist"
            description="The new Apple Watch Series 9 brings effortless connectivity, advanced health monitoring, and intelligent fitness tracking right to your wrist. With customizable watch faces, enhanced sensors, and seamless integration with your iPhone, you can stay on top of your day like never before."
            headingAlignment="center"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="2xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />

          <div className="w-full flex justify-center mt-8">
            <Image
              src="/section-images/apple-watches.jpg"
              alt="Apple Watch Series 9"
              width={1200}
              height={400}
              className="object-cover rounded-lg h-[400px] w-auto"
            />
          </div>
        </motion.section>

        <section className='py-16  md:py-24 xl:py-32 flex flex-col items-center justify-center w-full   relative z-20 gap-12  bg-black backdrop-blur-2xl'>

          <SectionTitle
            heading="Why Users Love Apple Watch Series 9"
            description="From fitness enthusiasts to tech lovers, Apple Watch Series 9 keeps you connected, healthy, and on top of your game."
            headingAlignment="center"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="2xl"
            descriptionMaxWidth="2xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />

          <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            <InfiniteImageScroller
              items={[
                { src: "/cards-images/apple-watch-feature (1).jpg" },
                { src: "/cards-images/apple-watch-feature (2).jpg" },
                { src: "/cards-images/apple-watch-feature (3).jpg" },
                { src: "/cards-images/apple-watch-feature (4).jpg" },
                { src: "/cards-images/apple-watch-feature (5).jpg" },
                { src: "/cards-images/apple-watch-feature (6).jpg" },
                { src: "/cards-images/apple-watch-feature (7).jpg" },
                { src: "/cards-images/apple-watch-feature (8).jpg" },
              ]}

              direction="left"
              speed="slow"
              pauseOnHover={true}
            />

            <InfiniteImageScroller
              items={[
                { src: "/cards-images/apple-watch-feature (1).jpg" },
                { src: "/cards-images/apple-watch-feature (2).jpg" },
                { src: "/cards-images/apple-watch-feature (3).jpg" },
                { src: "/cards-images/apple-watch-feature (4).jpg" },
                { src: "/cards-images/apple-watch-feature (5).jpg" },
                { src: "/cards-images/apple-watch-feature (6).jpg" },
                { src: "/cards-images/apple-watch-feature (7).jpg" },
                { src: "/cards-images/apple-watch-feature (8).jpg" },
              ]}

              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>

        </section>

        <section className="py-16  md:py-24 xl:py-32  flex flex-col  items-start max-w-5xl mx-auto justify-center w-full relative z-10 bg-black backdrop-blur-2xl">
          <SectionTitle
            heading="Empower Your Wrist."
            description=""
            headingAlignment="left"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="6xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />

          <div className=" h-[400px] w-5xl border-2 border-dashed border-white/12 overflow-hidden p-2 rounded-3xl mt-8">
            <Image
              src="/cards-images/apple-watch-double-tap.webp"
              alt="Apple Watch"
              width={950}   // explicit width
              height={400}  // explicit height
              className="h-full w-full !object-cover rounded-2xl"
            />
          </div>

          <div className="flex gap-8 max-w-4xl mx-auto mt-12">
            <div>
              <h4 className='text-2xl !font-medium'>
                Advanced Health, Seamless Connectivity, Infinite Possibilities.
              </h4>
              <p className='text-base text-[#afa39b] !leading-snug'>
                Track your health like never before with Apple Watch Series 9. From heart rate monitoring to ECG, sleep tracking, and blood oxygen levels, every metric is designed to help you stay in control of your wellness journey
              </p>
            </div>
            <p className='text-base text-[#afa39b] !leading-snug'>
              Stay connected effortlessly with notifications, calls, and messages right on your wrist. Customize watch faces, set fitness goals, and access apps instantly — Apple Watch makes your day smarter, healthier, and more productive.
            </p>
          </div>
        </section>

        <section className='py-16  md:py-24 xl:py-32 flex flex-col items-center justify-center w-full   relative z-20   bg-black backdrop-blur-2xl max-w-7xl mx-auto'>

          <SectionTitle
            heading="Track Life, Master Your Day"
            headingAlignment="center"
            headingFontSize="secondary"
            headingFontWeight="font-semibold"
            headingMaxWidth="5xl"
            headingFontColor="text-[#afa39b]"
          />

          <div className="border-4 border-gray-900 w-full h-auto overflow-hidden rounded-2xl mt-8">
            <AutoCarousel />
          </div>

          <div className='max-w-3xl mx-auto mt-8 text-center'>
            <h4 className='text-2xl !font-medium'>
              Advanced Health, Seamless Connectivity, Infinite Possibilities.
            </h4>
            <p className='text-base text-[#afa39b] !leading-snug'>
              Track your health like never before with Apple Watch Series 9. From heart rate monitoring to ECG, sleep tracking, and blood oxygen levels, every metric is designed to help you stay in control of your wellness journey
            </p>
          </div>


        </section>

        <section className="py-16  md:py-24 xl:py-32 flex flex-col items-start max-w-5xl mx-auto justify-center w-full relative z-10 bg-black backdrop-blur-2xl">
          <SectionTitle
            heading="Apple Watch Pro Features"
            description=""
            headingAlignment="left"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="6xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />

          <div className="h-[500px] w-full border-2 border-dashed border-white/12 overflow-hidden p-2 rounded-3xl mt-6">
            <Image
              src="/cards-images/apple-watch-megafeature.webp"
              alt="Apple Watch Pro Features"
              width={950}
              height={400}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="border-2 border-dashed border-white/24 rounded-md w-10 h-10 flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl !font-medium text-white">{feature.title}</h4>
                  <p className="text-base text-[#afa39b] !leading-snug ">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16  md:py-24 xl:py-32 flex flex-col items-start max-w-7xl mx-auto justify-center w-full relative z-10 bg-black backdrop-blur-2xl">
          <SectionTitle
            heading="AutoMotion for Apple Watch"
            description=""
            headingAlignment="left"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="6xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />

          <div className="grid grid-cols-3 w-full gap-12 mt-8">
            <div className='col-span-1'>
              <h4 className="text-xl !font-medium text-white mt-8">AutoMotion Remote View</h4>
              <p className="text-base text-[#afa39b] !leading-snug ">
                Camera Remote app on your Apple Watch, AutoMotion monitors the exposure settings of your connected iPhone. It biases the iPhone's automatic settings to prioritize a 180° shutter angle for better-looking, cinematic movement.
              </p>

              <p className="text-base text-[#afa39b] !leading-snug ">
                Sweet Spot Visual Feedback If the available light on your iPhone supports the desired cinematic setting (180° shutter rule), the 'Auto' label on your Watch screen turns green. This provides quick, glanceable feedback that you are set up for capturing motion perfectly with your iPhone.
              </p>

              <h4 className="text-xl !font-medium text-white mt-8">ND Filter Guidance</h4>
              <p className="text-base text-[#afa39b] !leading-snug ">
                Bright day out? As you adjust an ND filter on your iPhone's lens, watch the 'Auto' label on your Apple Watch! The watch display will instantly turn green when you have adjusted the filter's density to the ideal spot for cinematic motion, letting you adjust your iPhone settings without ever touching the phone.
              </p>

            </div>

            <div className="h-[500px] w-full border-2 border-dashed border-white/12 overflow-hidden p-2 rounded-3xl mt-6 col-span-2">
              <Image
                src="/cards-images/apple-watch-ultra.jpg"
                alt="Apple Watch Pro Features"
                width={950}
                height={400}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>


        </section>

        <section className="py-16  md:py-24 xl:py-32 flex flex-col items-center max-w-5xl mx-auto justify-center w-full relative z-10 bg-black backdrop-blur-2xl">

          <div className="h-[300px]  border-2 border-dashed border-white/12 overflow-hidden p-2 rounded-3xl mb-6">
            <Image
              src="/cards-images/handicon.webp"
              alt="Apple Watch Pro Features"
              width={250}
              height={200}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>

          <SectionTitle
            heading="Private by Design"
            description=""
            headingAlignment="center"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />


          <div className='max-w-xl mx-auto text-center mt-5'>
            <h4 className="text-xl !font-medium text-white">Collects no data — video, photo, analytics or otherwise.</h4>
            <p className="text-base  text-[#afa39b] !leading-snug ">
              Your Apple Watch deserves the same privacy you expect from your most personal device. WristVibe is built with a simple belief: your data stays yours. No tracking. No analytics. No hidden collection — ever.
            </p>
          </div>

        </section>

        <section className="py-16  md:py-24 xl:py-32 flex flex-col items-center max-w-5xl mx-auto justify-center w-full relative z-10 bg-black backdrop-blur-2xl">

          <SectionTitle
            heading="Explore WristVibe Today"
            description=""
            headingAlignment="center"
            descriptionAlignment="center"
            headingFontSize="secondary"
            descriptionFontSize="secondary"
            headingFontWeight="font-semibold"
            descriptionFontWeight="font-normal"
            headingMaxWidth="5xl"
            descriptionMaxWidth="4xl"
            headingFontColor="text-[#afa39b]"
            descriptionFontColor="text-[#afa39b]"
          />




          <div className="h-[500px] w-full border-2 border-dashed border-white/12 overflow-hidden p-2 rounded-3xl mt-6 col-span-2 my-8">
            <Image
              src="/cards-images/watch-ultra-3.png"
              width={950}
              height={400}
              className="h-full w-full object-cover rounded-2xl" alt={''} />
          </div>
          <div className='max-w-7xl mx-auto text-center'>
            <h4 className="text-xl !font-medium text-white">Available Now for Apple Watch Users</h4>
            <p className="text-sm   text-[#afa39b] !leading-snug ">
              Dive into a new way to customize, upgrade, and style your Apple Watch — privately and effortlessly.
            </p>
          </div>

        </section>


      </main>
    </div>
  );
}


const features = [
  {
    icon: <FaHeart size={24} />,
    title: 'Health & Fitness Tracking',
    description:
      'Monitor your heart rate, ECG, blood oxygen, and daily activity seamlessly. Stay on top of your health goals effortlessly.',
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: 'Connectivity & Notifications',
    description:
      'Receive calls, messages, and app notifications directly on your wrist. Stay connected without constantly checking your phone.',
  },
  {
    icon: <FaPalette size={24} />,
    title: 'Customizable Watch Faces',
    description:
      'Personalize your Apple Watch with a variety of watch faces and complications that match your style and daily needs.',
  },
  {
    icon: <FaBolt size={24} />,
    title: 'Advanced Sensors',
    description:
      'With motion sensors, GPS, gyroscope, and ambient light sensors, Apple Watch adapts to your environment and tracks your performance accurately.',
  },
];