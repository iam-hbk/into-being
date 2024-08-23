import React from "react";
import Image from "next/image";
import CV_Prep from "@/assets/images/cv-prep.jpg";
import Interview_Prep from "@/assets/images/interview-prep.jpg";
import Assessments from "@/assets/images/assessments.jpg";
import Job_Profiling from "@/assets/images/job-profiling.jpg";
import Salary_Benchmarking from "@/assets/images/salary-benchmarking.jpg";
import { PinContainer } from "@/components/ui/3d-pin";
import ScrollAnimation from "react-animate-on-scroll";
import AnimatedGroup from "./ui/animated-group";
type Props = {};
const SERVICES = [
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

const Services = (props: Props) => {
  return (
    <AnimatedGroup className="w-full">
      <div className="animate__animated animate__fadeInUp flex min-h-screen flex-col items-center sm:p-10">
        <div
          className="p-4 text-4xl font-bold text-bigtitle sm:text-7xl"
          id="services"
        >
          Our Services
        </div>
        <p className="max-w-screen-sm text-wrap px-5 text-center text-xl leading-7 sm:py-2 [&:not(:first-child)]:mt-4">
          Our recruiting expects are available to you across all sectors and
          industries; We assess skills and achievement and fulfill comprehensive
          career planning which is made available to clients Engineering,
          Banking, Mining, Freight, Pharmaceutical, Legal, FMCG, Retail and
          Distribution requirements, minimising client time spent on CV
          screening saving you time and money ensure a long-term partnership
          built on trust.
        </p>
        <div className=" mt-10 flex flex-wrap justify-center rounded-md bg-secondary">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex items-center justify-center "
            >
              <PinContainer title={service.description} href="">
                <div className="flex h-[16rem] w-[16rem] basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 ">
                  <div className=" flex max-h-[77%] w-full flex-1">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="imageo rounded-md object-cover"
                      height={400}
                      width={400}
                    />
                  </div>
                  <h3 className="max-w-xs p-2 text-lg  font-bold text-secondary-foreground">
                    {service.title}
                  </h3>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </AnimatedGroup>
  );
};

export default Services;
