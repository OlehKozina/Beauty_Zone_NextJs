"use client";
import React from "react";
import Image from "next/image";
import Heading from "../Heading";
import { useInView } from "react-intersection-observer";

export interface MediaGridWithTextProps {
  id: string;
  heading?: string;
  imageTop?: string;
  imageBottom?: string;
  text?: string;
}

const MediaGridWithText = ({
  heading,
  imageTop,
  imageBottom,
  text,
  id,
}: MediaGridWithTextProps) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section
      className="relative pt-8 text-white max-md:scroll-mt-16 scroll-mt-24 bg-secondary-light/40"
      id={id}
    >
      <div className="container p-7 sm:p-14 relative">
        {heading && (
          <Heading
            className="text-3xl font-bold text-left absolute top-0 z-above-content"
            heading={heading}
          />
        )}

        <div
          ref={ref}
          className="grid w-full max-w-full grid-cols-12 grid-rows-[4rem_4rem_4rem_3rem_0rem_auto] md:grid-rows-[8rem_8rem_8rem_6rem_4rem_auto] gap-x-6 relative"
        >
          {imageTop && (
            <div className="col-start-1 col-end-8 row-start-1 row-end-4 z-content rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={imageTop}
                alt="products"
                width={626}
                height={414}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {imageBottom && (
            <div className="col-start-6 col-end-13 row-start-3 row-end-7 z-base overflow-hidden">
              <Image
                src={imageBottom}
                alt="products"
                width={626}
                height={414}
                className="object-cover rounded-3xl"
              />
            </div>
          )}
          {text && (
            <div className="col-start-1 col-end-12 row-start-7 sm:col-end-6 sm:row-start-5 md:row-start-4 z-content flex items-end p-2 sm:p-4 sm:pt-8">
              <p className="md:text-xl mb-0">{text}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaGridWithText;
