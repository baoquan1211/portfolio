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

const Header = () => {
  const theme = useTheme();
  const routes = [
    {
      title: "home",
      href: "#home",
    },
    {
      title: "works",
      href: "#work",
    },
    {
      title: "about-me",
      href: "#skill",
    },
    {
      title: "contact",
      href: "/",
    },
  ];

  return (
    <header className="flex sticky top-0 flex-col items-center justify-center w-full z-50 border-b-1 border-secondary bg-background/90">
      <div className="font-fira w-full xl:w-[80%] p-4 xl:p-0 max-w-[1024px] h-16 flex justify-between items-center py-2">
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
              "md:block text-lg md:text-lg font-bold dark:text-white text-text select-none"
            )}
          >
            quan-qb
          </Link>
        </div>
        <Menu className="md:hidden" />
        <div className="hidden md:flex items-center gap-x-10">
          {routes.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className={`select-none after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300 after:h-[1px] after:bg-primary after:block`}
            >
              <span className="text-primary">#</span>
              {route.title}
            </Link>
          ))}

          {/* <ModeToggle></ModeToggle> */}
          {/* <UserButton afterSignOutUrl="/sign-in" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
