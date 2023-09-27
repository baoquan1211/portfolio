import React from "react";
import Image from "next/image";

import BLACK_GUY from "@/assets/svg/black-guy-2.svg";
import DOTS from "@/assets/svg/dots.svg";

import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="pt-24 lg:pt-40 px-4 xl:px-0 max-w-[1024px] w-full xl:w-[80%] flex lg:justify-between"
    >
      <div className="max-w-full">
        <div className="w-full flex items-center gap-x-4">
          <h1 className="font-fira text-[32px] leading-none">
            <span className="text-primary">#</span>about-me
          </h1>
          <div className="flex-grow bg-primary h-[1px]"></div>
        </div>

        <motion.p
          initial={{ opacity: 0, translateY: 200 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          className="font-fira font-normal text-secondary lg:max-w-[500px] mt-10"
        >
          Nice to meet you, {"I’m"} Quach Bao Quan! <br /> <br />
          {"I'm"} a dedicated IT student at HCMUS{" "}
          {"(Ho Chi Minh City University of Science)"}, on the path to becoming
          a versatile full-stack developer. My journey at HCMUS has provided me
          with a solid foundation in computer science and programming. {"I'm "}
          passionate about creating meaningful digital experiences and thrive in
          the dynamic world of software development.
          <br /> <br /> I enjoy crafting elegant front-end interfaces that
          captivate users and architecting robust back-end systems that power
          seamless experiences. I have experience with HTML, CSS, JavaScript,
          Python, and more, always staying up-to-date with the latest
          technologies.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="hidden lg:block relative"
      >
        <Image src={BLACK_GUY} alt="black-guy-2" />
        <Image src={DOTS} alt="dots" className="absolute top-8 left-8" />
        <Image src={DOTS} alt="dots" className="absolute bottom-8 right-9" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
