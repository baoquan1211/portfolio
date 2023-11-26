"use client";

import React from "react";
import Image from "next/image";
import DOTS from "@/assets/svg/dots.svg";
import LOGO from "@/assets/svg/big-logo.svg";
import SkillCard from "./skill-card";
import { motion } from "framer-motion";

const Skill = () => {
  const constraintsRef = React.useRef(null);

  return (
    <div
      className="max-w-[1024px] w-full xl:w-[80%] leading-none pt-24 px-4 xl:px-0"
      id="skill"
    >
      <div className="w-full flex items-center gap-x-4">
        <h1 className="font-fira text-[32px] leading-none">
          <span className="text-primary">#</span>skill
        </h1>
        <div className="w-[240px] bg-primary h-[1px]"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: 200 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center xl:justify-between gap-6 mt-10"
      >
        <motion.div
          className="gap-6 items-center hidden lg:flex relative border-dashed border-1 border-transparent p-3 active:border-primary transition-500"
          ref={constraintsRef}
        >
          <div className="flex flex-col gap-16 ml-4">
            <motion.div drag dragConstraints={constraintsRef}>
              <Image src={DOTS} alt="dots" className="pointer-events-none" />
            </motion.div>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className="h-16 w-16 border-1 border-secondary ml-2 p-1 text-secondary flex justify-center items-center text-xs hover:text-primary hover:border-primary"
            >
              Drag me
            </motion.div>
          </div>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            className="h-24 w-24 mt-5"
          >
            <Image src={LOGO} alt="logo" className="pointer-events-none" />
          </motion.div>
          <div className="flex flex-col gap-10 items-end">
            <motion.div
              drag
              dragConstraints={constraintsRef}
              className="h-24 w-24 border-1 border-secondary text-secondary flex justify-center items-center hover:text-primary hover:border-primary text-xs"
            >
              Drag me too
            </motion.div>
            <motion.div drag dragConstraints={constraintsRef}>
              <Image
                src={DOTS}
                alt="dots"
                className="mb-4 pointer-events-none stroke-black"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:items-start">
          <SkillCard
            title="Databases"
            items={["SQLServer Oracle", "PostgreDB MySQL", "MongoDB Redis"]}
          />
          <div className="flex lg:flex-col gap-3">
            <SkillCard
              title="Languages"
              items={["TypeScript C++", "Python Java"]}
            />

            <SkillCard
              title="Others"
              items={["HTML CSS SCSS", "TailwindCSS", "REST"]}
            />
          </div>

          <div className="flex lg:flex-col gap-3">
            <SkillCard
              title="Frameworks"
              items={["NextJS", "ReactJS ExpressJS", "Django Spring"]}
            />
            <SkillCard
              title="Tools"
              items={[
                "VSCode PyCharm Jira",
                "Figma Git IntelliJ",
                "Postman Docker",
              ]}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
