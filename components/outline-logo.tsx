import React, { HTMLProps } from "react";
import Image from "next/image";
import OUTLING_LOGO from "@/assets/svg/out-line-logo.svg";

const OutlineLogo = ({ className }: HTMLProps<HTMLElement>) => {
  return (
    <div className={className}>
      <Image src={OUTLING_LOGO} alt="outline-logo" />
    </div>
  );
};

export default OutlineLogo;
