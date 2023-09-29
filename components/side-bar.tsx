"use client";

import React from "react";
import { Home, Settings, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathName = usePathname();
  const routes = [
    {
      icon: Home,
      href: "/",
      title: "Home",
      protected: false,
    },
    {
      icon: Plus,
      href: "#",
      title: "Create",
      protected: true,
    },
    {
      icon: Settings,
      href: "#",
      title: "Settings",
      protected: false,
    },
  ];

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-background">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route, index) => (
            <Link
              href={route.href}
              key={index}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 round-lg transition rounded-lg",
                pathName === route.href ? "bg-primary/10 text-primary" : ""
              )}
            >
              <div className="flex flex-col items-center gap-y-2 flex-1">
                <route.icon className="w-5 h-5" />
                {route.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
