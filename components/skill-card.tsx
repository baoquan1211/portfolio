import React from "react";
import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  items: string[];
};

const SkillCard = ({ title, items }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 200 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="group flex flex-col border-1 border-secondary leading-5 font-fira text-secondary h-fit hover:border-primary hover:scale-105 transition-300">
        <div className="border-b-1 border-secondary group-hover:border-primary font-semibold text-foreground py-1 px-2 transition-300">
          {title}
        </div>
        <p className="font-normal py-1 px-2">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item} <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </motion.div>
  );
};

export default SkillCard;
