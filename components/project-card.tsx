import React from "react";
import { type IProject } from "./projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col border-1 border-secondary w-fit max-w-[200px] md:max-w-[300px] justify-center items-center">
      <div className="hidden md:block">
        <Image
          src={project.thumbnail}
          alt={project.name}
          height={100}
          width={350}
        />
      </div>
      <div className="flex gap-2 p-4 border-b-1 border-secondary overflow-hidden">
        <p className="font-fira font-normal text-lg text-secondary leading-5">
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
  );
};

export default ProjectCard;
