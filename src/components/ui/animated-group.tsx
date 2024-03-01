"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import React, {
  PropsWithChildren,
  ReactComponentElement,
  ReactNode,
} from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const AnimatedGroup = ({ children, className }: Props) => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, transition: { duration: 1 }, opacity: 1 }}
      className={cn("flex flex-col items-center", className)}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGroup;
