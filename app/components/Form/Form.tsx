import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose }) => {
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
          Sign up<span>for free</span> and get a present
        </p>
        <form className="flex flex-col" name="contact-form">
          <div className="mb-8">
            <label className="hidden">Name</label>
            <input
              className="py-4 px-10 w-[310px] rounded-[32px] border border-solid border-white text-base leading-[1.17] focus:border-gray-500 focus:outline-none focus:bg-white "
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-8">
            <label className="hidden">Phone</label>
            <input
              className="py-4 px-10 w-[310px] rounded-[32px] border border-solid border-white text-base leading-[1.17] focus:border-gray-500 focus:outline-none focus:bg-white "
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              pattern="^\+[0-9]{12}"
              required
            />
          </div>
          <div className="mb-8">
            <label className="hidden">E-mail</label>
            <input
              className="py-4 px-10 w-[310px] rounded-[32px] border border-solid border-white text-base leading-[1.17] focus:border-gray-500 focus:outline-none focus:bg-white "
              type="email"
              id="e-mail"
              name="e-mail"
              placeholder="E-mail"
              required
            />
          </div>
          <button className="mt-0 mx-auto mb-6 button" type="submit">
            Sign up for free
          </button>
          <p className="my-0 mx-auto max-w-[220px] text-sm text-center text-[#747272]">
            By clicking the button, I agree to the
            <a className="text-white ml-2" href="#">
              privacy policy
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
