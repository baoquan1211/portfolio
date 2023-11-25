import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import IMG from "@/assets/svg/black-guy.svg";
import DOTS from "@/assets/svg/dots.svg";
import OUTLINE_LOGO from "@/assets/svg/big-logo.svg";

const Feature = () => {
  return (
    <section
      id="home"
      className="pt-16 lg:pt-24 max-w-[1024px] flex flex-col md:flex-row justify-center gap-2 px-4 xl:px-0"
    >
      <div className="flex flex-col font-fira gap-y-6">
        <h1 className="text-2xl font-semibold w-fit">
          Quan is a <span className="text-primary">IT student</span> and <br />
          <span className="text-primary">soft-ware developer</span> fresher.
        </h1>
        <h3 className="font-extralight text-secondary">
          He dedicates himself to developing his IT career every day.
        </h3>

        <Button variant="square" size="fit">
          Download my resume !!!
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
              Current studying at{" "}
              <span className="font-bold text-foreground">HCMUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
