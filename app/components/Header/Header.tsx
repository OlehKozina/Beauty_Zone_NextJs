"use client";
import React, { useState } from "react";
import MobMenu from "./MobMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Play } from "next/font/google";
import { NavigationType } from "@/types/Navigation";
import Image from "next/image";
import { buildSocialLinks } from "./utils";

const Header = ({ header }: { header: NavigationType }) => {
  const [isMobMenuVisible, setIsMobMenuVisible] = useState(false);
  const openMenu = () => setIsMobMenuVisible(true);
  const closeMenu = () => setIsMobMenuVisible(false);
  const { navigation, socialLinks: _socialLinks } = header;
  const socialLinks = buildSocialLinks(_socialLinks);

  return (
    <>
      <header className="mt-14 flex top-0 left-0 absolute w-full z-10">
        <div className="w-full max-w-[80rem] mx-auto">
          <div className="flex p-4 rounded-b-xl flex-grow items-center gap-[40px] z-2 justify-around bg-primary-light">
            <nav className="flex items-center justify-between flex-grow gap-10">
              <a className="no-underline text-white" href="#">
                <Image
                  className="mt-2 invert"
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
                      className="no-underline transition-all text-white hover:text-secondary-light"
                    >
                      <a href={`#${link.slug}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>
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
      {isMobMenuVisible && (
        <MobMenu
          onClose={closeMenu}
          socialLinks={socialLinks}
          navigation={navigation}
        />
      )}
    </>
  );
};

export default Header;
