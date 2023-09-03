"use client";

import React from "react";
import { Divide, Menu, Sparkles } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";

import LOGO from "@/assets/svg/logo.svg";
import LIGHT_LOGO from "@/assets/svg/out-line-logo.svg";

const NavBar = () => {
  const theme = useTheme();
  const routes = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "works",
      href: "/",
    },
    {
      title: "about-me",
      href: "/",
    },
    {
      title: "contact",
      href: "/",
    },
  ];

  return (
    <nav className="flex justify-center w-full">
      <div className="fixed font-fira w-full p-4 xl:p-0 xl:w-[80%] max-w-[1024px] h-16 z-50 flex justify-between items-center py-2 bg-background ">
        <div className="flex items-center gap-x-2 font-bold">
          <Image
            width={16}
            height={16}
            src={LOGO}
            alt="logo"
            className="dark:hidden fill-primary select-none"
          />
          <Image
            width={16}
            height={16}
            src={LOGO}
            alt="logo"
            className="hidden dark:block select-none"
          />

          <Link
            href="/"
            className={cn(
              "md:block text-lg md:text-3xl font-bold dark:text-white text-text select-none"
            )}
          >
            quan-qb
          </Link>
        </div>
        <Menu className="md:hidden" />
        <div className="hidden md:flex items-center gap-x-4">
          {routes.map((route) => (
            <Link key={route.title} href={route.href} className="select-none">
              <span className="text-primary">#</span>
              {route.title}
            </Link>
          ))}

          <ModeToggle></ModeToggle>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
