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
      <div className="flex h-screen w-full flex-col items-center justify-around bg-gradient-to-tr from-gray-300 to-secondary p-20 dark:from-muted md:flex-row">
        <div className="flex h-full flex-col items-center justify-center gap-5 ">
          <h1 className="text-5xl">Recruitment Agency</h1>
          <h1 className="font-script text-5xl">Niche Specialisation</h1>
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
          priority // keep only if this image is critical for initial loading
          src={Logo} // ensure Logo is imported and optimized
          alt="logo"
          className="h-auto w-1/6 max-w-[400px] rounded-full sm:w-1/3 md:w-1/2 lg:w-full" // added default width for xs screens
        />

        {/* <Image
          priority
          src={Logo}
          alt="logo"
          height={500}
          width={500}
          className="lg:w-full h-auto rounded-full sm:w-1/5 md:w-1/3"
        /> */}
      </div>
      {/* Services Section */}
      <Services />
      {/* About Us */}
      <AboutUs />
    </section>
  );
}

export default Page;
