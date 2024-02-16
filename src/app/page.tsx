import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import {
  TypewriterEffect,
  TypewriterEffectEditable,
} from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/button";

const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {};

function Page({}: Props) {
  const words = [
    {
      text: "Recruitment",
    },
    {
      text: "Agency",
    },
    {
      text: "Profile",
    },
  ];
  return (
    <section
      className={
        "min-h-screen bg-gradient-to-tr from-gray-300 dark:from-muted to-secondary border border-red-500 flex flex-col items-center justify-center"
      }
    >
      <div className="flex flex-row w-full justify-around items-center  p-20">
        <div className="flex flex-col justify-center items-center gap-5 h-full ">
          <h1 className="text-5xl">Recruitment Agency</h1>
          <h1 className={cn("text-5xl", fontGreatVibes.className)}>
            Niche Specialisation
          </h1>
          <TypewriterEffectEditable className="min-h-20" />
          <div className="flex flex-row gap-3">
            <Button className="">Find Jobs</Button>
            <Button variant={"secondary"}>Get Talents</Button>
          </div>
        </div>

        <Image
          src={Logo}
          alt="logo"
          height={500}
          width={500}
          className="rounded-full"
        />
      </div>
      {Array(10)
        .fill("Some values")
        .map((_, i) => (
          <div key={i} className="h-20 ">
            Some very long text that is going to be displayed
          </div>
        ))}
      <div id="services">Our Services</div>
      {Array(10)
        .fill("Some values")
        .map((_, i) => (
          <div key={i} className="h-20 w-full">
            Some very long text that is going to be displayed
          </div>
        ))}
    </section>
  );
}

export default Page;
