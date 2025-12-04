"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function MarqueeWithText({ logos }: { logos?: { logo?: string }[] }) {
  if (!logos) return null;

  return (
    <section className="my-10 md:my-20">
      <Marquee
        gradient={false}
        speed={50}
        className="rounded-3xl md:rounded-none bg-brand-dark bg-opacity-80 flex gap-6"
      >
        {!!logos?.length &&
          logos.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <Image
                className="w-32 h-32 mr-8"
                src={item?.logo || ""}
                width={40}
                height={20}
                alt="logo"
              />
            </div>
          ))}
      </Marquee>
    </section>
  );
}

export default MarqueeWithText;
