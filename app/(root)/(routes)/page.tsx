import Feature from "@/components/feature";
import Quote from "@/components/quote";
import Skill from "@/components/skills";
import Media from "@/components/media";
import Projects from "@/components/projects";
import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/custom-cursor"), {
  ssr: false,
});

const RootPage = () => {
  return (
    <div className="flex flex-col justify-center items-center relative overflow-x-hidden">
      <CustomCursor />
      <Media />
      <Feature />
      <Quote />
      <Projects />
      <Skill />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default RootPage;
