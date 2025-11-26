import React from "react";
import Image from "next/image";
import { Play } from "next/font/google";
import { CardsType } from "@/types/Cards";
import { PortableText } from "@portabletext/react";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export default function Cards({
  heading,
  cards,
  id,
}: {
  cards?: CardsType;
  heading?: string;
  id?: string;
}) {
  if (!cards) return;
  return (
    <section
      className="relative pb-0 section"
      style={{ background: "rgb(255, 255, 255)" }}
      id={id}
    >
      <div className="container">
        <h2
          className={`section-titles text-center max-w-[450px] mt-0 relative z-10 ${play.className}`}
        >
          {heading}
        </h2>
        <div className="flex items-center justify-around gap-8 py-6 px-8">
          <ul className="flex items-center justify-center gap-10 pl-0 flex-wrap">
            {!!cards?.length &&
              cards.map((card) => (
                <li
                  key={card.name}
                  className="border border-lightgray rounded-[32px] h-[181px] w-[316px] flex items-center py-6 px-8 bg-white z-10"
                >
                  <article className="w-[252px] text-center flex flex-col items-center">
                    {card.image && (
                      <Image
                        width={48}
                        height={48}
                        src={card.image}
                        alt="star"
                      />
                    )}
                    <div className="m-0">
                      {card.content && <PortableText value={card.content} />}
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
