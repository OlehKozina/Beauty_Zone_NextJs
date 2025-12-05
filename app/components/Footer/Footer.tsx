"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Play } from "next/font/google";
import Image from "next/image";
import { NavigationType } from "@/types/Navigation";
import { buildContactLinks, buildSocialLinks } from "../Header/utils";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return;
  const { navigation, socialLinks: _socialLinks, phone, address } = footer;

  const contactLinks = buildContactLinks(phone, address);
  const socialLinks = buildSocialLinks(_socialLinks);

  return (
    <footer className="relative">
      <div className="container p-4 bg-primary-light rounded-t-xl">
        <div className="block">
          <nav className="max-sm:flex-col max-sm:items-center text-center flex md:items-start md:flex-grow gap-4 md:gap-10">
            <a className="link" href="BeautyZoneSite.html">
              <Image
                className="relative ml-3 top-0 invert"
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </a>
            <div className="block gap-0 flex-grow justify-evenly md:gap-2 md:flex">
              <ul className="flex max-sm:gap-2 max-sm:flex-col justify-evenly grow">
                {!!navigation?.length &&
                  navigation.map((link) => (
                    <li
                      key={link.title}
                      className="text-white no-underline transition-all hover:text-secondary-light"
                    >
                      <a href={`#${link.slug}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
              <ul className="flex gap-6 pl-0 justify-center pl-18 max-md:hidden">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="text-white w-6 h-6 hover:text-secondary-light transition-all"
                  >
                    {link.icon && (
                      <FontAwesomeIcon icon={link.icon} className="text-2xl" />
                    )}
                  </a>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="bg-white py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.10)] z-50 w-full px-4">
        <div className="max-w-[80rem] mx-auto flex justify-between max-xxs:flex-col gap-2 max-xxs:items-center">
          <a
            href={address?.link}
            className="flex gap-2 items-center max-sm:text-sm"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-green" />
            {address?.name}
          </a>
          <div className="flex gap-2 items-center max-sm:hidden">
            <FontAwesomeIcon icon={faPhone} className="text-green" />
            {phone}
          </div>
          <p className="text-black/50 text-sm font-normal relative">
            &copy;Data is protected!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
