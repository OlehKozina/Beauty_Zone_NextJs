import React from "react";
import Image from "next/image";
import { PortableTextBlock } from "next-sanity";
import { PortableText } from "next-sanity";

const Slide = ({
  image,
  content,
  name,
}: {
  image?: string;
  content?: PortableTextBlock[];
  name?: string;
}) => {
  return (
    <div className="max-md:max-w-[20rem] group font-medium mt-8 mb-4 hover:scale-105 transition-transform aspect-[336/170]">
      <div className="mx-auto relative w-full h-full rounded-3xl overflow-hidden p-6 border border-secondary-dark">
        {image && (
          <Image
            src={image}
            alt={name || ""}
            layout="responsive"
            width={48}
            height={48}
            className="!w-12 mx-auto"
          />
        )}
        {content && (
          <div className="flex flex-col gap-6 rounded-2xl">
            <div className="relative text-base font-thin">
              <PortableText value={content} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
