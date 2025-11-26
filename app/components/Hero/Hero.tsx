"use client";
import { useState } from "react";
import Form from "../Form/ModalForm";
import { Play } from "next/font/google";
import { PortableText } from "next-sanity";
import { HeroType } from "@/types/Hero";
import { motion } from "framer-motion";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = ({ hero }: { hero: HeroType }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);
  if (!hero) return;
  const { label, heading, form, privacyPolicy, videoUrl, content } = hero;
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
        <div className="container">
          <p className="text-[21px] mb-4 text-black pl-3 m-0 text-center lg:text-end">
            {label}
          </p>
          <h1
            className={`text-secondary-light text-6xl font-bold mb-0 whitespace-pre-line leading-none mt-0 text-center md:text-8xl lg:text-end lg:text-[120px] ${play.className}`}
            lang="en"
          >
            {heading}
          </h1>
          <div className="flex justify-center lg:justify-end">
            <button
              className="button transition-all"
              type="button"
              onClick={openForm}
            >
              Request a call
            </button>
          </div>

          {isFormVisible && (
            <Form
              onClose={closeForm}
              form={form}
              privacyPolicy={privacyPolicy}
            />
          )}
          <div className="font-normal text-sm mt-5 text-center lg:text-end whitespace-pre-line">
            {content && <PortableText value={content} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
