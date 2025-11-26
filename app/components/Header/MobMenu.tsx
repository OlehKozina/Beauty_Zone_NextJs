import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface MobMenuProps {
  onClose: () => void;
  socialLinks?: {
    label?: string;
    href?: string;
    icon?: any;
  }[];
  navigation?: {
    title?: string;
    slug?: string;
  }[];
}

const MobMenu: React.FC<MobMenuProps> = ({
  onClose,
  socialLinks,
  navigation,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-white z-40">
        <FontAwesomeIcon
          icon={faXmark}
          className="bg-transparent cursor-pointer absolute top-9 right-20 w-6"
          onClick={onClose}
        />
        <ul className="flex flex-col gap-5 m-5">
          <li>
            <a className="no-underline text-primary-dark" href="#">
              <Image
                className="mt-2"
                src="/logo.png"
                alt="logo"
                width={100}
                height={50}
              />
            </a>
          </li>
          {!!navigation?.length &&
            navigation.map((link) => (
              <li
                key={link.title}
                className="menu-btn-close hover:text-secondary-light"
              >
                <a href={`#${link.slug}`}>{link.title}</a>
              </li>
            ))}
          <div className="flex gap-4">
            {" "}
            {!!socialLinks?.length &&
              socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="hover:text-secondary-light w-6 h-6"
                >
                  {link.icon && (
                    <FontAwesomeIcon icon={link.icon} className="text-2xl" />
                  )}
                </a>
              ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default MobMenu;
