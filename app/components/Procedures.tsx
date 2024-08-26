"use client";
import React, { useEffect, useState } from "react";
import { getProcedures } from "@/sanity/sanity-utils";
import Image from "next/image";
import { Play } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

interface Procedure {
  _id: string;
  name: string;
  image: string;
}

export default function Procedures() {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const proceduresData = await getProcedures();
      setProcedures(proceduresData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSlidesPerPage(3);
      else if (window.innerWidth >= 640) setSlidesPerPage(2);
      else setSlidesPerPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesPerPage >= procedures.length
        ? 0
        : prevIndex + slidesPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? procedures.length - slidesPerPage
        : prevIndex - slidesPerPage
    );
  };

  const slideWidth = 100 / slidesPerPage; // Percentage width for each slide

  return (
    <section
      className="relative z-10 sm:w-[540px] md:w-[780px] lg:w-[1100px] mx-auto"
      id="Our_services"
    >
      <div className="container overflow-hidden relative ">
        <h2
          className={`services-section__title section-titles text-center mb-5 ${play.className}`}
        >
          Our <span className="text-secondary-light">procedures</span>
        </h2>
        <div
          className="flex transition-transform duration-300 sm:w-[540px] md:w-[780px] lg:w-[1100px] relative "
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            gap: "5px", // Adjust this to control the space between slides
          }}
        >
          {procedures.map((procedure) => (
            <div
              key={procedure._id}
              className="flex-shrink-0 "
              style={{ flexBasis: `${slideWidth}%` }}
            >
              <Image
                width={345}
                height={457}
                src={procedure.image}
                alt={procedure.name}
                className="cursor-pointer pb-[15px]"
                style={{ objectFit: "cover" }} // Ensure image fits properly
              />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute bg-white shadow rounded-full h-14 w-14 top-1/2 left-0 transform -translate-y-1/2 text-black p-2 z-5"
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-[24px]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute bg-white shadow rounded-full h-14 w-14 top-1/2 right-0 transform -translate-y-1/2 text-black p-2 z-5"
        >
          <FontAwesomeIcon icon={faAngleRight} className="text-[24px]" />
        </button>
      </div>
    </section>
  );
}
