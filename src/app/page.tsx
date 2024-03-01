import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import { TypewriterEffectEditable } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { Great_Vibes } from "next/font/google";
import { Button } from "@/components/ui/button";
import Services from "@/components/services";
import AboutUs from "@/components/about";

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
      className={"flex min-h-screen flex-col items-center justify-center"}
    >
      <div className="flex h-screen w-full flex-row items-center justify-around bg-gradient-to-tr from-gray-300 to-secondary p-20 dark:from-muted">
        <div className="flex h-full flex-col items-center justify-center gap-5 ">
          <h1 className="text-5xl">Recruitment Agency</h1>
          <h1 className={cn("text-5xl", fontGreatVibes.className)}>
            Niche Specialisation
          </h1>
          <p className="max-w-[50%]">
            Welcome to Into Being Placements we are a specialised headhunting
            and talent acquisition agency. Providing you with recruitment and
            human capital solutions for your business. Let our talent find you
            talent.
          </p>
          <TypewriterEffectEditable className="min-h-20" />
          <div className="flex flex-row gap-3">
            <Button className="">Find Jobs</Button>
            <Button variant={"secondary"}>Get Talents</Button>
          </div>
        </div>

        <Image
          priority
          src={Logo}
          alt="logo"
          height={500}
          width={500}
          className="rounded-full w-450 h-auto"
        />
      </div>
      {/* Services Section */}
      <Services />
      {/* About Us */}
      <AboutUs />
      
    </section>
  );
}

export default Page;
