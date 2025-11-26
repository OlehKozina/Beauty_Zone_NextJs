import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FormType } from "@/types/ContactType";
import Form from "./Form";
import { PortableTextBlock } from "next-sanity";
import { privacyPolicy } from "@/sanity/schemas/documents";

interface FormProps {
  onClose: () => void;
  form?: FormType;
  privacyPolicy?: PortableTextBlock;
}

const ModalForm: React.FC<FormProps> = ({ onClose, form, privacyPolicy }) => {
  if (!form) return;
  const { name, buttonLabel, fields } = form;
  return (
    <div className="fixed z-30 flex items-center justify-center top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] py-5 px-0">
      <div className="relative w-full max-w-[400px] h-full max-h-[650px] bg-[#011c44] rounded-[32px] p-12 overflow-auto">
        <FontAwesomeIcon
          icon={faXmark}
          className="bg-transparent absolute top-5 right-5 text-white cursor-pointer hover:text-secondary-light"
          onClick={onClose}
        />
        <h2 className="mb-2 text-white text-center text-4xl mt-0 section__titles">
          Request a call
        </h2>
        <p className="relative mx-auto mt-0 mb-8 text-center text-white text-base">
          {name}
        </p>
        <Form
          buttonLabel={buttonLabel}
          fields={fields}
          privacyPolicy={privacyPolicy}
        />
      </div>
    </div>
  );
};

export default ModalForm;
