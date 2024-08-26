import React from "react";
import Image from "next/image";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const Contacts = () => {
  return (
    <section className="pt-0 relative pb-0 lg:pb-10 section" id="Contacts">
      <div className="flex justify-center container">
        <div className="max-w-[1059px]">
          <h2 className={`section-titles text-center mb-5 ${play.className}`}>
            How to <span className="text-secondary-light">find us</span>
          </h2>
          <div className="flex gap-10 items-center justify-center flex-wrap mb-[265px] md:mb-auto lg:flex-nowrap lg:justify-between">
            <Image
              src={"/map.png"}
              alt="map"
              width={505}
              height={481}
              className="max-w-[505px] w-full absolute border-0 flex-shrink-0 h-[244px] bottom-0 md:static md:w-[505px] md:h-[481px] lg:w-[605px] lg:h-[481px]"
            />
            <div className="bg-[#011f4a] rounded-[32px] text-white max-w-[422px] max-h-[560px] w-full h-full flex flex-col items-start justify-center gap-10 py-1 px-12">
              <p className="text-2xl text-center font-semibold  mx-13 mt-12 mb-0">
                Sign up <span className="text-secondary-light">for free</span>{" "}
                and get a present
              </p>
              <form name="contact-form">
                <div className="mb-8 text-center">
                  <label className="hidden">Your name</label>
                  <input
                    className="py-4 px-4 w-full rounded-[32px] border border-solid border-[#a18268] bg-white text-4 leading-[1.17]"
                    type="text"
                    id="user-name"
                    name="user-name"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-8 text-center">
                  <label className="hidden">Phone</label>
                  <input
                    className="py-4 px-4 w-full rounded-[32px] border border-solid border-[#a18268] bg-white text-4 leading-[1.17]"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>
                <div className="mb-8 text-center">
                  <label className="hidden">E-mail</label>
                  <input
                    className="py-4 px-4 w-full rounded-[32px] border border-solid border-[#a18268] bg-white text-4 leading-[1.17]"
                    type="email"
                    id="e-mail"
                    name="e-mail"
                    placeholder="Your e-mail"
                  />
                  <button className="m-5 button" type="submit">
                    Sign up for free
                  </button>
                  <p className="text-3 text-[#747272] max-w-[213px] my-0 mx-auto text-center">
                    By clicking the button, I agree to the{" "}
                    <span className="text-white">privacy policy</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
