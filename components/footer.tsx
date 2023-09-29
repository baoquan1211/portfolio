import React from "react";
import Image from "next/image";
import Link from "next/link";
import LOGO from "@/assets/svg/logo.svg";
import PURPLE_LOGO from "@/assets/svg/logo-purple.svg";

import LINKEDIN from "@/assets/svg/linkedin.svg";
import GITHUB from "@/assets/svg/github.svg";
import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-36 py-6 border-t-1 border-secondary gap-y-6">
      <div className="flex max-w-[1024px] justify-between w-[80%]">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2 font-bold">
            <Image
              width={16}
              height={16}
              src={PURPLE_LOGO}
              alt="logo"
              className="select-none dark:hidden"
            />
            <Image
              width={16}
              height={16}
              src={LOGO}
              alt="dark-logo"
              className="select-none hidden dark:block"
            />
            <h1 className="text-lg md:text-[16px] font-fira font-semibold dark:text-white">
              quan-qb{" "}
            </h1>
            <span className="text-secondary text-sm font-normal hidden md:block font-fira">
              quachbaoquan123@gmail.com
            </span>
          </div>
          <h1 className="text-lg md:text-[16px] font-fira font-normal dark:text-white hidden md:block">
            HCMUS - Information System
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg md:text-2xl font-fira font-normal dark:text-white">
            Media
          </h1>
          <div className="flex items-center gap-1 select-none">
            <Link href="https://github.com/baoquan1211">
              <Image src={GITHUB} alt="github" />
            </Link>
            <Link href="https://www.linkedin.com/in/b%E1%BA%A3o-qu%C3%A2n-qu%C3%A1ch-91171227a/">
              <Image src={LINKEDIN} alt="linkedin" />
            </Link>
            <Link href="https://www.facebook.com/dung.rui.bao.quan.day/">
              <Facebook fill="#ABB2BF" stroke="#ABB2BF" />
            </Link>
          </div>
        </div>
      </div>
      <h2 className="font-fira text-[16px] font-light text-secondary">
        © Copyright 2023. Made by quan-qb
      </h2>
    </footer>
  );
};

export default Footer;
