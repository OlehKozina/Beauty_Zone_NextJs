import React from "react";
import Image from "next/image";
import { Play } from "next/font/google";
import Heading from "../Heading";
import { PortableText, PortableTextBlock } from "@portabletext/react";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

interface MediaWithTextProps {
  id?: string;
  heading?: string;
  content?: PortableTextBlock;
  image?: string;
  horizontalImage?: string;
}

const MediaWithText = ({
  heading,
  content,
  horizontalImage,
  image,
  id,
}: MediaWithTextProps) => {
  return (
    <section className="pb-0  section" id={id}>
      <div className="container">
        <div className="relative flex">
          <div className="flex flex-col gap-10 text-xl text-center lg:max-w-[709px] lg:text-start">
            <Heading
              heading={heading}
              className={`mb-0 mt-0 font-bold ml-1 lg:ml-0 lg:mb-[53px] lg:mt-[53px] section-titles ${play.className}`}
            />
            {content && <PortableText value={content} />}
          </div>
          <ul className="hidden lg:block">
            <li>
              {image && (
                <Image
                  width={327}
                  height={327}
                  className="rounded-full hidden lg:block"
                  src={image}
                  alt="before"
                />
              )}
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
              {horizontalImage && (
                <Image
                  width={327}
                  height={327}
                  className="relative left-[172px] rounded-full hidden lg:block"
                  src={horizontalImage}
                  alt="after"
                />
              )}
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

export default MediaWithText;
