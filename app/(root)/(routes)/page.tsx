"use client";

import Feature from "@/components/feature";
import Quote from "@/components/quote";
import Skill from "@/components/skills";
import Media from "@/components/media";
import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";

const RootPage = () => {
  return (
    <section className="flex flex-col justify-center items-center relative">
      <Media />
      <Feature />
      <Quote />
      <Projects />
      <Skill />
      <AboutMe />
      <Contact />
    </section>
  );
};

export default RootPage;
