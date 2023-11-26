"use client";

import React from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

import LOGO from "@/assets/svg/logo.svg";
import LIGHT_LOGO from "@/assets/svg/logo-purple.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import BurgerMenu from "./burger-menu";

export interface IRoute {
  title: string;
  href: string;
}

const routes: IRoute[] = [
  {
    title: "project",
    href: "#work",
  },
  {
    title: "skill",
    href: "#skill",
  },
  {
    title: "about-me",
    href: "#about-me",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  return (
    <header className="flex sticky top-0 flex-col items-center justify-center w-full z-50 border-b-1 border-secondary bg-background/90">
      <div className="font-fira w-full xl:w-[80%] p-4 xl:p-0 max-w-[1024px] h-16 flex justify-between items-center py-2">
        <div className="flex items-center gap-x-2 font-bold">
          <Image
            width={16}
            height={16}
            src={LIGHT_LOGO}
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
            href="#home"
            className={cn(
              "md:block text-lg md:text-lg font-bold dark:text-white text-text select-none"
            )}
          >
            quan-qb
          </Link>
        </div>
        <Button
          variant={"link"}
          className="text-secondary-foreground hover:text-primary md:hidden p-0 h-fit"
          onClick={() => {
            setIsBurgerOpen((prev) => {
              return !prev;
            });
          }}
        >
          <Menu />
        </Button>
        <BurgerMenu
          isOpen={isBurgerOpen}
          routes={routes}
          setIsOpen={setIsBurgerOpen}
        />

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
        </div>
      </div>
    </header>
  );
};

export default Header;
