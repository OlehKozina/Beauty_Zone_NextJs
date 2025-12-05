"use client";
import { useState } from "react";
import Form from "../Form/ModalForm";
import { Raleway } from "next/font/google";
import { PortableText } from "next-sanity";
import { HeroType } from "@/types/Hero";
import { motion, AnimatePresence } from "framer-motion";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = ({ hero }: { hero: HeroType }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);
  if (!hero) return;
  const { heading, form, videoUrl, content, button } = hero;
  return (
    <>
      <section className="px-0 py-[100px] flex flex-col items-end justify-center h-[424px] bg-no-repeat bg-center bg-cover relative md:h-[824px] lg:h-[1024px]">
        <motion.div className="absolute inset-0 bg-cover bg-top -z-[1]">
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container flex flex-col items-end">
          <h1
            className={`text-secondary-light text-end text-6xl font-thin mb-0 whitespace-pre-line leading-none mt-0 md:text-8xl lg:text-[120px] ${raleway.className}`}
            lang="en"
          >
            {heading}
          </h1>
          <div className="font-normal text-base mt-5 text-center lg:text-end max-w-[25rem] font-light">
            {content && <PortableText value={content} />}
          </div>
          <div className="flex gap-4">
            <button
              className="button hover:bg-opacity-60 transition-all bg-secondary-light text-white hover:scale-105"
              type="button"
              onClick={openForm}
            >
              Request a call
            </button>
            <a
              className="button transition-all hover:scale-105"
              href={`#${button?.link}`}
            >
              {button?.name}
            </a>
          </div>
          <AnimatePresence>
            {isFormVisible && form && (
              <Form form={form} onClose={() => setIsFormVisible(false)} />
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Hero;
