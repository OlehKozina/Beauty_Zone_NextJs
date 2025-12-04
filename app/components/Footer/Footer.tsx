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
        <div className="block gap-4 lg:flex lg:flex-col">
          <nav className="block text-center lg:flex lg:items-start lg:flex-grow lg:gap-10">
            <a className="link" href="BeautyZoneSite.html">
              <Image
                className="relative top-3 ml-3 md:top-3 lg:top-0 invert"
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </a>
            <div className="block gap-0 flex-grow justify-evenly lg:gap-[64px] lg:flex">
              <ul className="pl-0 lg:pl-10 flex justify-center gap-20 grow">
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
              {/* <address>
                <ul className="hidden lg:block">
                  {contactLinks.map(
                    (link) =>
                      link?.label && (
                        <li
                          key={link.href}
                          className="no-underline text-primary-light hover:text-secondary-light transition-all"
                        >
                          <a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className="font-thin hover:text-brand-default transition-all flex flex-col md:flex-row"
                          >
                            {link.label}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </address> */}
              <ul className="flex gap-6 pl-0 justify-center pl-18">
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
      <div className="bg-white py-4 shadow-[0_-4px_10px_rgba(0,0,0,0.10)] z-50 w-full">
        <div className="max-w-[80rem] mx-auto flex justify-between">
          <a href={address?.link} className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-green" />
            {address?.name}
          </a>
          <div className="flex gap-2 items-center">
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
