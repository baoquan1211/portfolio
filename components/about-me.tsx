import React from "react";

const AboutMe = () => {
  return (
    <section className="pt-24 px-4 xl:px-0 max-w-[1024px] w-full xl:w-[80%]">
      <div className="w-full flex items-center gap-x-4">
        <h1 className="font-fira text-[32px] leading-none">
          <span className="text-primary">#</span>about-me
        </h1>
        <div className="w-[240px] bg-primary h-[1px]"></div>
      </div>
    </section>
  );
};

export default AboutMe;
