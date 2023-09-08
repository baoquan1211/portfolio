import React from "react";
import Link from "next/link";
import Image from "next/image";

import LINKEDIN from "@/assets/svg/linkedin.svg";
import MAIL from "@/assets/svg/email.svg";

const Contact = () => {
  return (
    <section
      className="max-w-[1024px] w-full xl:w-[80%] leading-none pt-24 lg:pt-40 px-4 xl:px-0"
      id="contact"
    >
      <div className="w-full flex items-center gap-x-4">
        <h1 className="font-fira text-[32px] leading-none">
          <span className="text-primary">#</span>contact
        </h1>
        <div className="w-[240px] bg-primary h-[1px]"></div>
      </div>
      <div className="mt-10 font-fira">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <h1 className=" text-secondary">
            {
              "If you have any question or request, please don't hesitate to contact me"
            }
          </h1>
          <div className="border-1 border-secondary w-fit p-3">
            <h1 className="text-lg">Message me here</h1>
            <div className="flex items-center gap-2">
              <Link href="https://www.linkedin.com/in/b%E1%BA%A3o-qu%C3%A2n-qu%C3%A1ch-91171227a/">
                <Image src={LINKEDIN} alt="linkedin" />
              </Link>
              <h1 className="text-secondary">{"bảo-quân-quách-91171227a"}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Image src={MAIL} alt="linkedin" />
              <h1 className="text-secondary">{"quachbaoquan123@gmail.com"}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
