"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Heading from "../Heading";
import ArrowButton from "./ArrowButton";
import clsx from "clsx";
import { PortableTextBlock } from "next-sanity";
import Slide from "./Slide";

interface SliderProps {
  id: string;
  slides: {
    image: string;
    content: PortableTextBlock[];
    name: string;
    _key?: string;
  }[];
  heading?: string;
}

export default function Slider({ heading, slides, id }: SliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false,
    align: "start",
    loop: true,
  });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("pointerDown", () => setIsDragging(true));
    emblaApi.on("pointerUp", () => setIsDragging(false));
    emblaApi.on("select", () => setIsDragging(false));
  }, [emblaApi]);

  return (
    <section className="relative text-white bg-secondary-dark/40" id={id}>
      <div className="container mx-auto px-4 bg-brand-dark bg-opacity-80 rounded-3xl py-10">
        <Heading
          heading={heading}
          className="mb-6 text-center md:mb-10 relative z-10"
        />
        <div className="relative max-w-[21rem] sm:max-w-[42rem] md:max-w-[69rem] mx-auto">
          <div
            className={clsx(
              "overflow-hidden",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            ref={emblaRef}
          >
            <div className="flex">
              {slides.map((slide) => {
                const { content, image, name } = slide;
                return (
                  <div
                    key={name}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.3333%] px-4"
                  >
                    <Slide {...{ content, image, name }} />
                  </div>
                );
              })}
            </div>
          </div>
          <ArrowButton direction="left" onClick={scrollPrev} />
          <ArrowButton direction="right" onClick={scrollNext} />
        </div>
      </div>
    </section>
  );
}
