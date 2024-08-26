import React from "react";
import Image from "next/image";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Intro = () => {
  return (
    <section className="pb-0  section" id="About_us">
      <div className="container">
        <div className="relative flex">
          <div className="flex flex-col gap-10 text-xl text-center lg:max-w-[709px] lg:text-start">
            <h2
              className={`mb-0 mt-0 font-bold ml-1 lg:ml-0 lg:mb-[53px] lg:mt-[53px] section-titles ${play.className}`}
            >
              Transform in <br />
              <span className="text-secondary-light">beauty zone!</span>
            </h2>
            <p className="intro-section__info">
              Our cosmetology clinic offers you professional services for facial
              and body skin care.
            </p>
            <p className="py-0 px-12 md:px-[200px] lg:p-0">
              At Beauty zone, we guarantee the highest quality standards and
              pleasant service. Our cosmetology procedures and drugs will help
              you maintain your beauty and youth. Beauty is with us forever!
            </p>
          </div>
          <ul className="hidden lg:block">
            <li>
              <Image
                width={327}
                height={327}
                className="rounded-full hidden lg:block"
                src="/before.jpg"
                alt="before"
              />
            </li>
            <li>
              <Image
                width={56}
                height={56}
                className="absolute top-[361px] right-[376px]"
                src="/star_big.svg"
                alt="star"
              />
            </li>
            <li>
              <Image
                width={327}
                height={327}
                className="relative left-[172px] rounded-full hidden lg:block"
                src="/after.jpg"
                alt="after"
              />
            </li>
            <li>
              <Image
                width={56}
                height={56}
                className="absolute top-[18px] right-[-30px]"
                src="/star_small.svg"
                alt="star"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
