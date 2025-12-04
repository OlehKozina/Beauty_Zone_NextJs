"use client";
import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <div className="fixed left-6 bottom-6 z-50 w-24 h-24 [perspective:1000px] group">
      <div className="absolute -top-12 left-1/2 transition-opacity -translate-x-[10%] bg-secondary-light text-white text-sm px-3 py-2 rounded-lg shadow-md whitespace-nowrap group-hover:opacity-100 opacity-0">
        Would you like us to call you?
        <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-[transparent] border-r-[transparent] border-t-secondary-light"></div>
      </div>
      <button
        className="border-none bg-secondary-light shadow-2xl w-full h-full rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Call or contact"
      >
        <div className="relative w-full h-full [transform-style:preserve-3d] animate-[flip_4s_linear_infinite] rounded-full">
          <div className="absolute [backface-visibility:hidden] w-full h-full flex items-center justify-center rounded-full bg-pink-500 text-white">
            <Phone size={32} className="stroke-[1.5]" />
          </div>
          <div className="[transform:rotateY(180deg)] absolute [backface-visibility:hidden] w-full h-full flex items-center justify-center rounded-full bg-green-600 text-white text-lg font-semibold">
            Call us
          </div>
        </div>
      </button>

      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          40% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(180deg);
          }
          90% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CallButton;
