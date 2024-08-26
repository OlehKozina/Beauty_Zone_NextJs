import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  return (
    <footer className="bg-secondary-dark relative">
      <div className="container min-h-[200px]">
        <div className="block items-start gap-10 lg:flex">
          <nav className="block text-center lg:flex lg:items-start lg:flex-grow lg:gap-10">
            <a className="link" href="BeautyZoneSite.html">
              <p
                className={`text-secondary-light font-bold mt-0 relative top-3 ml-3 md:mt-9 md:top-3 lg:top-0 ${play.className}`}
              >
                Beauty <br />
                zone
              </p>
            </a>
            <div className="block gap-0 flex-grow justify-evenly mt-4 lg:gap-[64px] lg:flex">
              <ul className="pl-0 lg:pl-10">
                <li>
                  <a
                    className="text-primary-light no-underline hover:text-secondary-light"
                    href="#About_us"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-light no-underline hover:text-secondary-light"
                    href="#Why_us"
                  >
                    Why us
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-light no-underline hover:text-secondary-light"
                    href="#Our_services"
                  >
                    Our procedures
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-light no-underline hover:text-secondary-light"
                    href="#Contacts"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
              <address>
                <ul className="hidden lg:block">
                  <li>
                    <a
                      className="no-underline text-primary-light hover:text-secondary-light"
                      href="tel:+18253337707"
                    >
                      + 1(325)-777-3333
                    </a>
                  </li>
                  <li>
                    <a
                      className="no-underline text-primary-light hover:text-secondary-light"
                      href="mailto:beautyzone@gmail.com"
                    >
                      beautyzone@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="no-underline text-primary-light hover:text-secondary-light"
                      href="https://maps.app.goo.gl/2UwzakEpYmpTCDCZ9"
                      target="_blank"
                    >
                      13000 67 st NW
                      <br />
                      Edmonton, AB
                    </a>
                  </li>
                </ul>
                <ul className="flex gap-6 pl-0 justify-center pl-18">
                  <li>
                    <a href="tel:+18253337707">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-white w-6 h-6 hover:text-secondary-light"
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
                        className="text-white w-6 h-6 hover:text-secondary-light"
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
                        className="text-white w-6 h-6 hover:text-secondary-light"
                      />
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <ul className="mt-0 mr-3 pl-0 lg:pl-10 lg:mt-4">
              <li>
                <a
                  className="text-primary-light no-underline hover:text-secondary-light"
                  href="#"
                  target="_blank"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <p className="text-[#747272] text-sm font-normal relative z-10">
                  &copy;Data is protected!
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <img
        className="hidden lg:block lg:w-[247px] lg:h-[152px] lg:absolute lg:bottom-0 lg:right-0"
        src="/medicine.png"
        alt=""
      />
    </footer>
  );
};

export default Footer;
