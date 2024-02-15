import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { Great_Vibes } from "next/font/google";

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
    <section className="flex flex-row border border-green-500">
      <div className="flex flex-row w-full justify-around items-center border border-red-500 p-20">
        <p className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-5xl">Recruitment Agency</h1>
          <h1 className={cn("text-5xl", fontGreatVibes.className)}>
            Niche Specialisation
          </h1>
        </p>

        <Image
          src={Logo}
          alt="logo"
          height={500}
          width={500}
          className="rounded-full"
        />
      </div>
    </section>
  );
}

export default Page;
