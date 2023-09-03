import React from "react";
import Image from "next/image";

import DOTS from "@/assets/svg/dots.svg";
import LOGO from "@/assets/svg/big-logo.svg";
const Skill = () => {
  return (
    <section className="max-w-[1024px] w-full p-4 xl:p-0 xl:w-[80%] leading-none">
      <div className="w-full flex items-center gap-x-4">
        <h1 className="font-fira text-[32px] leading-none">
          <span className="text-primary">#</span>skill
        </h1>
        <div className="w-[240px] bg-primary h-[1px]"></div>
      </div>
      <div className="flex justify-center xl:justify-between gap-6 mt-3">
        <div className="gap-6 items-center hidden lg:flex">
          <div className="flex flex-col gap-16 ml-4">
            <Image src={DOTS} alt="dots" />
            <div className="h-16 w-16 border-1 border-secondary ml-2" />
          </div>
          <div className="h-24 w-24 mt-5">
            <Image src={LOGO} alt="logo" />
          </div>
          <div className="flex flex-col gap-10 items-end">
            <div className="h-24 w-24 border-1 border-secondary" />
            <Image src={DOTS} alt="dots" className="mb-4" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:items-start">
          <div className="flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit w-fit">
            <div className="border-b-1 border-secondary font-semibold text-white py-1 px-2">
              Databases
            </div>
            <p className="font-normal py-1 px-2">
              SQLServer Oracle <br /> PostgreDB MySQL <br /> MongoDB Redis
            </p>
          </div>
          <div className="flex lg:flex-col gap-3">
            <div className="flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit">
              <div className="border-b-1 border-secondary font-semibold text-white py-1 px-2">
                Languages
              </div>
              <p className="font-normal py-1 px-2">
                TypeScript C++ <br /> Python C#
              </p>
            </div>
            <div className="flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit">
              <div className="border-b-1 border-secondary font-semibold text-white py-1 px-2">
                Others
              </div>
              <p className="font-normal py-1 px-2">
                HTML CSS SCSS <br /> TailwindCSS <br /> REST
              </p>
            </div>
          </div>

          <div className="flex lg:flex-col gap-3">
            <div className="flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit">
              <div className="border-b-1 border-secondary font-semibold text-white py-1 px-2">
                Frameworks
              </div>
              <p className="font-normal py-1 px-2">
                NextJS <br /> ReactJS ExpressJS <br /> Django .NET
              </p>
            </div>
            <div className="flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit">
              <div className="border-b-1 border-secondary font-semibold text-white py-1 px-2">
                Tools
              </div>
              <p className="font-normal py-1 px-2">
                VSCode PyCharm Jira <br /> Figma Git <br /> Postman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
