"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    <Button
      variant="toggle"
      className="rounded-lg border flex gap-3"
      // size="icon"
      onClick={toggleTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:hidden  transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 hidden dark:flex  scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="">Toggle theme</span>
    </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
