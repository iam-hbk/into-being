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
import CV_Prep from "@/assets/images/cv-prep.jpg";
import Interview_Prep from "@/assets/images/interview-prep.jpg";
import Assessments from "@/assets/images/assessments.jpg";
import Job_Profiling from "@/assets/images/job-profiling.jpg";
import Salary_Benchmarking from "@/assets/images/salary-benchmarking.jpg";
import { PinContainer } from "@/components/ui/3d-pin";

const fontGreatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {};
const Services = [
  {
    title: "Professional CV preparation",
    description:
      "Our service includes crafting a tailor-made CV that highlights your unique skills and experiences, ensuring you make a powerful first impression on potential employers.",
    image: CV_Prep,
  },
  {
    title: "Interview Preparation",
    description:
      "We provide comprehensive interview coaching, offering insights into commonly asked questions, tips on body language, and strategies to boost your confidence and performance.",
    image: Interview_Prep,
  },
  {
    title: "Assessments",
    description:
      "Our assessments are designed to evaluate your strengths and areas for development, helping you understand your professional profile better and guiding you in your career path.",
    image: Assessments,
  },
  {
    title: "Job Profiling",
    description:
      "We analyze and define job roles to match your skills and qualifications with potential employment opportunities, ensuring a perfect fit between you and your future job.",
    image: Job_Profiling,
  },
  {
    title: "Vacancy Salary Benchmarking",
    description:
      "Our service provides an analysis of salary trends and benchmarks for specific job roles, giving you the knowledge to negotiate your salary confidently or assess job offers.",
    image: Salary_Benchmarking,
  },
] as const;

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
          src={Logo}
          alt="logo"
          height={500}
          width={500}
          className="rounded-full"
        />
      </div>
      {/* Services Section */}
      <div className="flex min-h-screen flex-col items-center p-10">
        <div className="text-bigtitle p-4 text-7xl font-bold" id="services">
          Our Services
        </div>
        <p className="max-w-screen-sm text-center">
          Our recruiting expects are available to you across all sectors and
          industries; We assess skills and achievement and fulfill comprehensive
          career planning which is made available to clients Engineering,
          Banking, Mining, Freight, Pharmaceutical, Legal, FMCG, Retail and
          Distribution requirements, minimising client time spent on CV
          screening saving you time and money ensure a long-term partnership
          built on trust.
        </p>
        <div className=" mt-10 flex flex-wrap justify-center p-3 py-10 rounded-md bg-secondary">
          {Services.map((service) => (
            <div
              key={service.title}
              className="flex items-center justify-center "
            >
              <PinContainer title={service.description} href="">
                <div className="flex h-[16rem] w-[16rem] basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 ">
                  <div className=" flex w-full flex-1 max-h-[77%]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="imageo object-cover rounded-md"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="p-2 max-w-xs text-lg  font-bold text-secondary-foreground">
                    {service.title}
                  </h3>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
