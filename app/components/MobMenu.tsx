import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

interface MobMenuProps {
  onClose: () => void;
}

const MobMenu: React.FC<MobMenuProps> = ({ onClose }) => {
  return (
    <>
      {" "}
      <div className="fixed top-0 left-0 w-full h-full bg-white z-40">
        <FontAwesomeIcon
          icon={faXmark}
          className="bg-transparent cursor-pointer absolute top-9 right-20 w-6"
          onClick={onClose}
        />
        <ul className="flex flex-col gap-5 m-5">
          <li>
            <p className="my-5 text-secondary-light">
              Beauty <br />
              zone
            </p>
          </li>
          <li>
            <a
              className="hover:text-secondary-light menu-btn-close"
              href="#About_us"
              onClick={onClose}
            >
              About us
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-light menu-btn-close"
              href="#Why_us"
              onClick={onClose}
            >
              Why us
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-light menu-btn-close"
              href="#Our_services"
              onClick={onClose}
            >
              Our procedures
            </a>
          </li>
          <li>
            <a
              className="hover:text-secondary-light menu-btn-close"
              href="#Contacts"
              onClick={onClose}
            >
              Contacts
            </a>
          </li>
        </ul>
        <address>
          <ul className="ml-5 flex gap-5">
            <li>
              <a href="tel:+18253337707">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/okayne__/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/olliekayne" target="_blank">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[#011c44] w-6 h-6 hover:text-secondary-light"
                />
              </a>
            </li>
          </ul>
        </address>
      </div>
    </>
  );
};

export default MobMenu;
