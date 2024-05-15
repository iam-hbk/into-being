import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo-transparent.png";
import { TypewriterEffectEditable } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Services from "@/components/services";
import AboutUs from "@/components/about";
export const dynamic = "force-dynamic";

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
      <div className="flex h-screen flex-col-reverse items-center justify-center bg-gradient-to-tr from-gray-300 to-secondary p-5 dark:from-muted md:flex-row md:justify-around md:p-20">
        <div className="flex h-auto flex-col items-center justify-center gap-10">
          <h1 className=" text-4xl tracking-tight lg:text-5xl">
            Recruitment Agency
          </h1>
          <h1 className="font-script scroll-m-20 text-4xl tracking-tight lg:text-5xl">
            Niche Specialisation
          </h1>
          <p className="max-h-[20%] text-center md:max-w-[65%] md:text-left">
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
          className="h-auto w-1/6 min-w-[130px] max-w-[400px] rounded-full sm:w-1/3 md:w-1/2 lg:w-full" // added default width for xs screens
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
