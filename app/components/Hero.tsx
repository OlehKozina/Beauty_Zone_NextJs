"use client";
import { useState } from "react";
import Form from "./Form";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  return (
    <>
      <section
        className="px-0 py-[100px] flex flex-col items-start justify-center h-[424px] bg-no-repeat bg-center bg-cover relative md:h-[824px] lg:h-[1024px]"
        style={{
          backgroundImage: `linear-gradient(0deg, #ffffff 1.62%, rgba(255, 255, 255, 0.850898) 5.31%, rgba(255, 255, 255, 0.193204) 58.65%, rgba(255, 255, 255, 0) 72.78%), url('/hero-title_image.jpg')`,
        }}
      >
        <div className="container">
          <p className="text-[21px] mb-4 text-secondary-dark pl-3 m-0 text-center lg:text-start">
            Cosmetology clinic
          </p>
          <h1
            className={`text-secondary-light text-6xl font-bold mb-0 leading-none mt-0 text-center md:text-8xl lg:text-start lg:max-w-[529px] lg:text-[120px] ${play.className}`}
            lang="en"
          >
            Beauty Zone
          </h1>
          <div className="flex justify-center lg:justify-start">
            {" "}
            <button className="button" type="button" onClick={openForm}>
              Request a call
            </button>
          </div>

          {isFormVisible && <Form onClose={closeForm} />}
          <p className="font-normal text-sm mt-5 text-center lg:text-start lg:max-w-[238px]">
            Sign up and get a free consultation from our beautician
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
