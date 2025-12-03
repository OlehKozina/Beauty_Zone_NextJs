"use client";
import React, { useState, useEffect } from "react";
import { buildSocialLinks } from "../Header/utils";
import { faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { TopBarType } from "@/types/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = ({ topBar }: { topBar: TopBarType }) => {
  console.log("topBar", topBar);
  const { socialLinks: _socialLinks, address, phone, schedule } = topBar;
  const socialLinks = buildSocialLinks(_socialLinks);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 80) setHidden(true);
      else setHidden(false);
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  return (
    <section
      className={clsx(
        "fixed py-2 top-0 left-0 w-full bg-white shadow z-50 transition-all",
        hidden && "-translate-y-full"
      )}
    >
      <div className="max-w-[80rem] mx-auto flex justify-between text-base">
        {address && (
          <div className="flex gap-4 py-2">
            <a
              href={address.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <FontAwesomeIcon icon={faLocationDot} className="text-green" />
              {address.name}
            </a>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faClock} className="text-green" />
              {schedule}
            </div>
          </div>
        )}
        {phone && <div className="py-2">{phone}</div>}
        <div className="flex lg:gap-10 lg:mr-5 items-center">
          {!!socialLinks?.length &&
            socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="hover:border-green/100 transition-all w-10 h-10 border-green/70 border-4 rounded-full flex items-center justify-center"
              >
                {link.icon && (
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-xl text-green"
                  />
                )}
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
