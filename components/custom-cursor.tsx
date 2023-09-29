"use client";

import React from "react";
import { motion } from "framer-motion";
// import LOGO_CURSOR from "@/assets/svg/logo-purple.svg";
import Image from "next/image";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const mouseMoveHandle = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandle);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  });

  if (typeof window !== "undefined") {
    let screenWidth = window.innerWidth;

    const variants = {
      default: {
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        rotate: (mousePosition.x * mousePosition.y) / Math.sqrt(screenWidth),
      },
    };

    if (screenWidth < 1024) return null;
    return (
      <motion.div className="cursor" variants={variants} animate="default">
        <Image src={"/logo-purple.svg"} alt="cursor" fill />
      </motion.div>
    );
  } else return null;
};

export default CustomCursor;
