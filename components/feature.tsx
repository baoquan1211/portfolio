import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import IMG from "@/assets/svg/black-guy.svg";
import DOTS from "@/assets/svg/dots.svg";
import OUTLINE_LOGO from "@/assets/svg/big-logo.svg";

const Feature = () => {
  return (
    <div className="max-w-[1024px] flex flex-col md:flex-row justify-center p-4 xl:p-0">
      <div className="flex flex-col font-fira gap-y-6">
        <h1 className="text-2xl font-semibold w-fit">
          Quan is a <span className="text-primary">IT student</span> and <br />
          <span className="text-primary">soft-ware developer</span> intern.
        </h1>
        <h3 className=" font-extralight text-secondary">
          He crafts responsive websites where technologies meet creativity
        </h3>

        <Button variant="square" size="fit">
          Contact me
        </Button>
      </div>
      <div className="relative">
        <Image src={IMG} alt="black-guy" />
        <Image
          src={DOTS}
          className="absolute bottom-[20%] right-[20%] z-10"
          alt="dots"
        />
        <Image src={OUTLINE_LOGO} className="absolute top-6 -z-10" alt="logo" />
        <div className="flex justify-center">
          <div className="flex items-center gap-3 border-secondary border-[1px] p-2 w-[80%]">
            <div className="w-3 h-3 bg-primary " />
            <div className="font-fira font-medium text-secondary h-fit text-[16px] leading-none">
              Current working on{" "}
              <span className="font-bold text-white">FUJINET</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
