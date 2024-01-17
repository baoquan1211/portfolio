import React from "react";
import ProjectCard from "./project-card";

export interface IProject {
  thumbnail: string;
  name: string;
  discription: string;
  tech: string[] | string;
  git: string;
  live?: string;
}

const oldie: IProject = {
  thumbnail: "/oldie.png",
  discription: "Old stuff for sale website",
  name: "Oldie",
  tech: "ReactJS NodeJS HTML TailwindCSS MongoDB",
  git: "https://github.com/baoquan1211/Oldie",
  live: "https://oldie.vercel.app/",
};

const fGPT: IProject = {
  thumbnail: "/f-gpt.png",
  discription: "Multiple AI platforms chating.",
  name: "F-GPT",
  tech: "ReactJS Django HTML TailwindCSS PostgreSQL",
  git: "https://github.com/baoquan1211/f-gpt-webapp",
  live: "https://f-gpt-chat.vercel.app/",
};

const Projects = () => {
  return (
    <section
      id="work"
      className="pt-24 px-4 xl:px-0 max-w-[1024px] w-full xl:w-[80%]"
    >
      <div className="w-full flex items-center gap-x-4">
        <h1 className="font-fira text-[32px] leading-none">
          <span className="text-primary">#</span>project
        </h1>
        <div className="w-[240px] bg-primary h-[1px]"></div>
      </div>
      <div className="mt-10 flex flex-col sm:grid grid-flow-col gap-6 md:gap-12 sm:justify-between md:justify-start items-center sm:items-stretch w-full">
        <ProjectCard project={oldie} />
        <ProjectCard project={fGPT} />
      </div>
    </section>
  );
};

export default Projects;
