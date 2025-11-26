"use client";
import { FormFieldType } from "@/types/ContactType";
import React, { useState } from "react";
import { useLockScroll } from "@/app/hooks/useLockScroll";
import PrivacyPolicy from "./PrivacyPolicy";
import { PortableTextBlock } from "next-sanity";

const Form = ({
  buttonLabel,
  fields,
  privacyPolicy,
}: {
  buttonLabel?: string;
  fields?: FormFieldType[];
  privacyPolicy?: PortableTextBlock;
}) => {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);
  const togglePolicy = () => setIsPolicyVisible((prev) => !prev);
  useLockScroll(!!isPolicyVisible);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      alert(`Error: ${data.message}`);
      return;
    }

    alert("Message sent!");
    form.reset();
  };
  return (
    <form className="flex flex-col" name="contact-form" onSubmit={handleSubmit}>
      {!!fields?.length &&
        fields.map((field) => (
          <div key={field.label} className="mb-8">
            <label className="hidden" htmlFor="user-name">
              {field.label}
            </label>
            <input
              className="py-4 px-10 w-[310px] rounded-[32px] border border-solid border-white text-base leading-[1.17] focus:border-gray-500 focus:outline-none focus:bg-white text-black"
              type={field.type}
              id="user-name"
              name={field.name}
              placeholder={field.label}
              required={field.required}
            />
          </div>
        ))}
      <button className="mt-0 mx-auto mb-6 button transition-all" type="submit">
        {buttonLabel}
      </button>
      <div className="my-0 mx-auto max-w-[220px] text-sm text-center text-[#747272]">
        By clicking the button, I agree to the
        <button
          type="button"
          className="text-white ml-2"
          onClick={togglePolicy}
        >
          privacy policy
        </button>
        <PrivacyPolicy
          onClose={togglePolicy}
          privacyPolicy={privacyPolicy}
          isVisible={isPolicyVisible}
        />
      </div>
    </form>
  );
};

export default Form;
