"use client";

import Feature from "@/components/feature";
import Quote from "@/components/quote";
import Skill from "@/components/skills";
import Media from "@/components/media";
import { useAuth, useUser } from "@clerk/nextjs";
import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";

const RootPage = () => {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <Media />
      <div id="home">
        <Feature />
      </div>
      <Quote />
      <Projects />
      <Skill />
      <AboutMe />
    </section>
  );
};

export default RootPage;
