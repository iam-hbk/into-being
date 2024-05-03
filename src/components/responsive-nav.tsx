"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Submit CV", href: "/submit-cv" },
  { name: "Submit Vacancy", href: "/submit-vacancy" },
  { name: "Available Positions", href: "/available-positions" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about-us" },
];

const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="m-2 p-0" variant={"ghost"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col bg-gradient-to-tr from-gray-300 to-secondary dark:from-muted"
        side={"left"}
      >
        <SheetHeader>
          <SheetTitle>INTO BEING PLACEMENTS</SheetTitle>
          <SheetDescription
            className={cn(fontGreatVibes.className, "text-3xl")}
          >
            Niche Specialisation
          </SheetDescription>
        </SheetHeader>
        <nav className="flex-grow ">
          <ul className="">
            {links.map(({ name, href }) => (
              <li key={name}>
                <SheetClose className="w-full" asChild>
                  <Link href={href}>
                    <Button className="my-1 w-full" variant={"outline"}>
                      {name}
                    </Button>
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>

        <SheetFooter className="align-bottom">
          <ModeToggle />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
