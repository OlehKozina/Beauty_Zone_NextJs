import React, { useEffect } from "react";
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
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <>
      <div className="fixed top-14 left-0 w-full h-full bg-white z-40">
        <FontAwesomeIcon
          icon={faXmark}
          className="bg-transparent cursor-pointer absolute top-9 right-10 w-6"
          onClick={onClose}
        />
        <ul className="flex flex-col items-center gap-5 mx-5 my-10">
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
                onClick={onClose}
                className="menu-btn-close hover:text-secondary-light"
              >
                <a href={`#${link.slug}`}>{link.title}</a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MobMenu;
