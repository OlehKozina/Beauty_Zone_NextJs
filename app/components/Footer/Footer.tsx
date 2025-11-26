"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Play } from "next/font/google";
import Image from "next/image";
import { NavigationType } from "@/types/Navigation";
import { buildContactLinks, buildSocialLinks } from "../Header/utils";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

function Footer({ footer }: { footer?: NavigationType }) {
  if (!footer) return;
  const {
    navigation,
    socialLinks: _socialLinks,
    email,
    phone,
    address,
    image,
  } = footer;

  const contactLinks = buildContactLinks(phone, email, address);
  const socialLinks = buildSocialLinks(_socialLinks);

  return (
    <footer className="bg-secondary-dark relative">
      <div className="container min-h-[200px]">
        <div className="block items-start gap-10 lg:flex">
          <nav className="block text-center lg:flex lg:items-start lg:flex-grow lg:gap-10">
            <a className="link" href="BeautyZoneSite.html">
              <Image
                className="mt-0 relative top-3 ml-3 md:mt-9 md:top-3 lg:top-0 invert"
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </a>
            <div className="block gap-0 flex-grow justify-evenly mt-4 lg:gap-[64px] lg:flex">
              <ul className="pl-0 lg:pl-10">
                {!!navigation?.length &&
                  navigation.map((link) => (
                    <li
                      key={link.title}
                      className="text-primary-light no-underline transition-all hover:text-secondary-light"
                    >
                      <a href={`#${link.slug}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
              <address>
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
                <ul className="flex gap-6 pl-0 justify-center pl-18">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className="text-white w-6 h-6 hover:text-secondary-light transition-all"
                    >
                      {link.icon && (
                        <FontAwesomeIcon
                          icon={link.icon}
                          className="text-2xl"
                        />
                      )}
                    </a>
                  ))}
                </ul>
              </address>
            </div>
            <div className="mt-0 mr-3 pl-0 lg:pl-10 lg:mt-4">
              <p className="text-[#747272] text-sm font-normal relative">
                &copy;Data is protected!
              </p>
            </div>
          </nav>
        </div>
      </div>
      {image && (
        <Image
          className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0"
          src={image}
          alt="medicine"
          width={247}
          height={152}
        />
      )}
    </footer>
  );
}

export default Footer;
