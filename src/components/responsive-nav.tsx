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
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export function SheetSide() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">HB</Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>INTO BEING PLACEMENTS</SheetTitle>
          <SheetDescription
            className={cn(fontGreatVibes.className, "text-3xl")}
          >
            Niche Specialisation
          </SheetDescription>
        </SheetHeader>

        <SheetClose asChild>
          <Link href={"/submit-cv"}>Submit CV</Link>
        </SheetClose>
        <SheetFooter>
          {/*
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
  */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
