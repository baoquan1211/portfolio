import React, { useEffect } from "react";
import { type IProject } from "./projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="group flex flex-col border-1 border-secondary w-fit max-w-[300px] h-[395.5px] justify-center items-center hover:scale-105 hover:border-primary transition-300">
        <div className="border-b-1 group-hover:border-primary transition-300">
          <Image
            src={project.thumbnail}
            alt={project.name}
            height={100}
            width={350}
          />
        </div>
        <div className="flex gap-2 p-4 border-b-1 border-secondary overflow-hidden group-hover:border-primary transition-300">
          <p className="font-fira font-normal text-base text-secondary leading-5">
            {project.tech}
          </p>
        </div>
        <div className="flex flex-col gap-3 p-4">
          <h1 className="text-2xl font-fira">{project.name}</h1>
          <p className="font-fira font-normal text-lg text-secondary leading-5">
            {project.discription}
          </p>
          <div className="flex gap-6">
            <Button className="font-fira" variant={"square"} type="button">
              <Link href={project.git}>{"Git <~>"}</Link>
            </Button>
            {project.live ? (
              <Button className="font-fira" variant={"square"} type="button">
                <Link href={project.live}>{"Live >>"}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
