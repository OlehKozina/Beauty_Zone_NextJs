"use client";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

function MarqueeWithImage({ logos }: { logos?: { logo?: string }[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  if (!logos) return null;

  const handleImageClick = (imageUrl: string) => {
    if (!imageUrl) return;
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <section>
      <Marquee
        gradient={false}
        speed={50}
        className="py-10 flex"
        pauseOnHover={true}
      >
        {!!logos?.length &&
          logos.map((item, i) => (
            <button
              key={i}
              onClick={() => item.logo && handleImageClick(item.logo)}
              aria-label={`View logo ${i + 1} in full screen`}
              className="flex items-center hover:scale-105 transition-transform border-button bg-button p-4 rounded-3xl overflow-hidden bg-opacity-80 h-[20rem]"
            >
              <Image
                className="h-full w-auto rounded-3xl object-contain"
                src={item.logo || ""}
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
                alt={`Logo ${i + 1}`}
              />
            </button>
          ))}
      </Marquee>
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          imageUrl={selectedImage}
        />
      )}
    </section>
  );
}

export default MarqueeWithImage;
