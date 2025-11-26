import React from "react";
import { Play } from "next/font/google";
import { PortableTextBlock } from "next-sanity";
import { FormType } from "@/types/ContactType";
import { Form } from "../Form";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

export interface ContactProps {
  id?: string;
  heading?: string;
  form?: FormType;
  direction?: string;
  privacyPolicy?: PortableTextBlock;
}

const Contacts = ({
  heading,
  form,
  direction,
  privacyPolicy,
  id,
}: ContactProps) => {
  if (!form) return;
  const { fields, buttonLabel, name } = form;
  return (
    <section className="pt-0 relative pb-0 lg:pb-10 section" id={id}>
      <div className="flex justify-center container">
        <div className="max-w-[1059px]">
          <h2 className={`section-titles text-center mb-5 ${play.className}`}>
            {heading}
          </h2>
          <div className="flex gap-10 items-center justify-center flex-wrap mb-[265px] md:mb-auto lg:flex-nowrap lg:justify-between">
            <iframe
              className="max-w-[505px] w-full absolute border-0 flex-shrink-0 h-[244px] bottom-0 md:static md:w-[505px] md:h-[481px] lg:w-[605px] lg:h-[481px]"
              src={direction}
              loading="lazy"
            />
            <div className="bg-[#011f4a] rounded-[32px] text-white max-w-[422px] max-h-[560px] w-full h-full flex flex-col items-start justify-center gap-10 py-1 px-12">
              <p className="text-2xl text-center font-semibold  mx-13 mt-12 mb-0">
                {name}
              </p>
              <Form
                fields={fields}
                buttonLabel={buttonLabel}
                privacyPolicy={privacyPolicy}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
