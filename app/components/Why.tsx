import React from "react";
import Image from "next/image";
import { Play } from "next/font/google";
import { getWhys } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export default async function Why() {
  const whys = await getWhys();
  return (
    <section
      className="relative pb-0 section"
      style={{ background: "rgb(255, 255, 255)" }}
      id="Why_us"
    >
      {/* Main Content */}
      <div className="container">
        <h2
          className={`section-titles text-center max-w-[450px] mt-0 relative z-10 ${play.className}`}
        >
          Why people{" "}
          <span className="text-secondary-light z-10">choose us</span>
        </h2>
        <div className="flex items-center justify-around gap-8 py-6 px-8">
          <ul className="flex items-center justify-center gap-10 pl-0 flex-wrap">
            {whys.map((why) => (
              <li
                key={why._id}
                className="border border-lightgray rounded-[32px] h-[181px] w-[316px] flex items-center py-6 px-8 bg-white z-10"
              >
                <article className="w-[252px] text-center flex flex-col items-center">
                  <Image width={48} height={48} src={why.image} alt="star" />
                  <div className="m-0">
                    <PortableText value={why.content} />
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <Image
            className="absolute z-0 w-full overflow-hidden"
            width={950}
            height={450}
            src="/wave.png"
            alt="wave"
          />
        </div>
      </div>
    </section>
  );
}
