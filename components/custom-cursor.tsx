"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  let screenWidth = 100;
  if (typeof window !== "undefined") screenWidth = window.innerWidth;
  const [mousePosition, setMousePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      rotate: (mousePosition.x * mousePosition.y) / Math.sqrt(screenWidth),
    },
  };

  const mouseMoveHandle = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandle);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandle);
    };
  });

  if (screenWidth < 1024) return null;
  return (
    <motion.div className="cursor" variants={variants} animate="default" />
  );
};

export default CustomCursor;
