"use client";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import React from "react";
import Heading from "../Heading";
import Illustration from "./Illustration";

interface MediaWithTextProps {
  id?: string;
  heading?: string;
  content?: PortableTextBlock;
  image?: string;
  horizontalImage?: string;
}

function MediaWithText({ heading, content, image, id }: MediaWithTextProps) {
  return (
    <section
      className="py-10 text-white md:py-20 text-sm md:text-base relative overflow-hidden scroll-mt-10 max-md:scroll-mt-16 text-primary-dark bg-primary-light/80"
      id={id}
    >
      <div className="container relative">
        <div className="flex flex-col md:flex-row items-start max-md:items-center justify-center gap-10 md:gap-0 md:space-x-10 text-base md:text-xl">
          <div className="max-w-[35rem] lg:max-w-[43rem]">
            <Heading
              heading={heading}
              className="mb-6 mx-auto text-center md:mb-10"
            />
            {content && (
              <div className="mb-5 font-extrathin">
                <PortableText value={content} />
              </div>
            )}
          </div>
          <div className="max-w-[25rem] w-full hidden md:block">
            <Illustration image={image} className="rounded-t-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaWithText;
