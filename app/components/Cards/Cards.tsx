"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardsType } from "@/types/Cards";
import { PortableText } from "@portabletext/react";
import Heading from "../Heading";
import { motion, AnimatePresence } from "framer-motion";

export default function Cards({
  heading,
  cards,
  id,
}: {
  cards?: CardsType;
  heading?: string;
  id?: string;
}) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [hasMore, setHasMore] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const ITEMS_PER_LOAD = 4;
  const INITIAL_COUNT = 4;

  if (!cards) return null;

  const visibleCards = cards.slice(0, visibleCount);

  useEffect(() => {
    if (cards.length <= visibleCount) {
      setHasMore(false);
      setShowAll(true);
    } else {
      setHasMore(true);
      setShowAll(false);
    }
  }, [visibleCount, cards.length]);

  const handleLoadMore = () => {
    const newCount = visibleCount + ITEMS_PER_LOAD;
    setVisibleCount(Math.min(newCount, cards.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <section className="relative pb-0 section bg-white" id={id}>
      <div className="container flex flex-col items-center">
        <Heading
          className="text-center max-w-xl mt-0 relative z-10"
          heading={heading}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 px-4 w-full">
          <AnimatePresence>
            {visibleCards.map((card, index) => (
              <motion.a
                key={`${card.name}-${index}`}
                href="#"
                initial={
                  index >= visibleCount - ITEMS_PER_LOAD &&
                  index >= INITIAL_COUNT
                    ? { opacity: 0, y: 20 }
                    : false
                }
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.3,
                  delay: (index % ITEMS_PER_LOAD) * 0.1,
                }}
                className="flex group items-center gap-6 p-6 border border-primary-dark rounded-2xl bg-primary-light text-white hover:shadow-2xl transition-shadow"
              >
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.name || "card-logo"}
                    width={128}
                    height={128}
                    className="w-32 h-32 flex-shrink-0 rounded-lg object-cover"
                  />
                )}
                <div className="flex-1 text-left">
                  {card.name && (
                    <h3 className="text-2xl font-semibold mb-2">{card.name}</h3>
                  )}
                  {card.content && <PortableText value={card.content} />}
                  <p className="mt-4 group-hover:underline transition-all">
                    Learn More
                  </p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-8 flex gap-4">
          {hasMore && (
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-dark text-white rounded-full font-semibold text-lg hover:bg-primary-darker transition-all"
            >
              Load More
            </motion.button>
          )}
          {showAll && visibleCount > INITIAL_COUNT && (
            <motion.button
              onClick={handleShowLess}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gray-300 text-white text-gray-800 rounded-full bg-primary-dark font-semibold text-lg hover:bg-gray-400 transition-all"
            >
              Show Less
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
