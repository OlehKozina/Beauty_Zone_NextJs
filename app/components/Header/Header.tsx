"use client";
import React, { useState } from "react";
import MobMenu from "./MobMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Play } from "next/font/google";
import { NavigationType } from "@/types/Navigation";
import Image from "next/image";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Header = ({ header }: { header: NavigationType }) => {
  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);
  const openMenu = () => setIsMobMenuVisible(true);
  const closeMenu = () => setIsMobMenuVisible(false);
  const { navigation } = header;
  console.log("navigation", navigation);

  return (
    <>
      <header className="flex top-0 left-0 absolute w-full z-10">
        <div className="w-full max-w-[1288px] mx-auto">
          <div className="flex flex-grow items-center bg-transparent gap-[40px] z-2 justify-around lg:bg-[#ffffff40]">
            <nav className="flex items-center justify-between flex-grow gap-10">
              <a className="no-underline text-primary-dark" href="#">
                <Image
                  className="mt-2"
                  src="/logo.png"
                  alt="logo"
                  width={100}
                  height={50}
                />
              </a>
              <ul className="hidden lg:flex lg:flex-grow lg:justify-evenly lg:gap-[5px]">
                {!!navigation?.length &&
                  navigation.map((link) => (
                    <li
                      key={link.title}
                      className="no-underline text-primary-dark hover:text-secondary-light"
                    >
                      <a href={`#${link.slug}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
              <address>
                <ul className="hidden lg:flex lg:gap-10 lg:mr-5 hover:text-secondary-light">
                  <li>
                    <a href="tel:+18253337707">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/okayne__/"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/olliekayne"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                      />
                    </a>
                  </li>
                </ul>
              </address>
            </nav>
            <button type="button" onClick={openMenu}>
              <FontAwesomeIcon
                icon={faBars}
                className="m-5 bg-transparent text-white w-8 h-8 lg:hidden hover:text-secondary-light"
              />
            </button>
          </div>
        </div>
      </header>
      {isMobMenuVisible && <MobMenu onClose={closeMenu} />}
    </>
  );
};

export default Header;
