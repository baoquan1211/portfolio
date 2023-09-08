import React from "react";
import Image from "next/image";
import COMMA from "@/assets/svg/comma.svg";

const Quote = () => {
  return (
    <div className=" flex-col pt-24 px-4 xl:px-0 hidden md:flex">
      <div className="p-8 relative border-1 border-secondary">
        <div className="absolute -top-4 left-3 bg-background py-1 px-2">
          <Image src={COMMA} alt="comma" />
        </div>
        <h2 className="font-medium font-fira text-2xl leading-none">
          <div className=""></div>
          If you cannot do great things, do small things in a great way
        </h2>
      </div>
      <div className="p-4 relative border-1 border-secondary hidden md:block self-end w-fit h-fit">
        <div className="absolute -top-4 right-3 bg-background py-1 px-2">
          <Image src={COMMA} alt="comma" />
        </div>
        <h2 className="font-medium font-fira text-2xl leading-none">
          <div className=""></div>- Napoleon Hill
        </h2>
      </div>
    </div>
  );
};

export default Quote;
