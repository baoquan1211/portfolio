"use client";

import Feature from "@/components/feature";
import Quote from "@/components/quote";
import Skill from "@/components/skills";
import { useAuth, useUser } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <section className="mt-6 lg:mt-32 flex flex-col justify-center items-center gap-y-6 lg:gap-y-24">
      <Feature />
      <Quote />
      <Skill />
    </section>
  );
};

export default RootPage;
