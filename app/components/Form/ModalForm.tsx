"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FormType } from "@/types/ContactType";
import Form from "./Form";
import { motion } from "framer-motion";

interface FormProps {
  onClose: () => void;
  form?: FormType;
}

const ModalForm: React.FC<FormProps> = ({ onClose, form }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {form && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-black/50 fixed z-30 flex items-center justify-center top-0 bottom-0 left-0 right-0 py-5 px-0"
        >
          <div className="relative w-full max-w-[30rem] bg-primary-dark rounded-3xl p-12 m-8 overflow-auto">
            <FontAwesomeIcon
              icon={faXmark}
              className="bg-transparent absolute top-5 right-5 text-white cursor-pointer hover:text-secondary-light"
              onClick={onClose}
            />

            <h2 className="mb-2 text-white text-center text-4xl mt-0 section__titles">
              Request a call
            </h2>

            <p className="relative mx-auto mt-0 mb-8 text-center text-white text-base">
              {form.name}
            </p>

            <Form buttonLabel={form.buttonLabel} fields={form.fields} />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModalForm;
