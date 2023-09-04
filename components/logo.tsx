import React, { HTMLProps } from "react";
import Image from "next/image";
import LOGO from "@/assets/svg/logo.svg";

const Logo = ({ className }: HTMLProps<HTMLElement>) => {
  return (
    <div className={className}>
      <Image src={LOGO} alt="logo" />
    </div>
  );
};

export default Logo;
