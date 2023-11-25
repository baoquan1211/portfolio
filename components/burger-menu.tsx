import { cn } from "@/lib/utils";
import React from "react";
import { type IRoute } from "./header";
import Link from "next/link";
import { mediaContact } from "./media";

interface IBurgerMenuProps {
  isOpen: boolean;
  routes: IRoute[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerMenu({ isOpen, routes, setIsOpen }: IBurgerMenuProps) {
  return (
    <section
      className={cn(
        "md:hidden fixed top-[calc(theme(space.16)+1px)] overflow-y-hidden transition-300 left-0 w-full z-50 bg-background/90",
        `${isOpen ? "h-[calc(100dvh-theme(space.16))]" : "h-0"}`
      )}
    >
      <nav className="mt-12 ml-6 flex flex-col gap-y-16 text-4xl">
        {routes.map((route) => (
          <Link
            key={route.title}
            href={route.href}
            onClick={() => {
              setTimeout(
                () =>
                  setIsOpen((prev) => {
                    return !prev;
                  }),
                500
              );
            }}
          >
            <span className="text-primary">{"#"}</span>
            {route.title}
          </Link>
        ))}
      </nav>
      <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-x-6 items-center justify-center">
        {mediaContact.map((media) => (
          <Link key={media.name} href={media.link} className="select-none">
            {media.component}
          </Link>
        ))}
      </nav>
    </section>
  );
}

export default BurgerMenu;
