import React from "react";
import AnimatedGroup from "./ui/animated-group";
import { WhyChooseUsCarousel } from "./why-choose-us-carousel";
// import { motion,useScroll } from "framer-motion";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-transparent to-gray-400 p-10">
      <AnimatedGroup>
        <div
          className="p-4 text-4xl font-bold text-bigtitle sm:text-7xl"
          id="about-us"
        >
          About Us
        </div>
        <p className="max-w-screen-sm text-wrap text-center leading-7 sm:py-2 [&:not(:first-child)]:mt-4">
          <b className="font-bold text-primary">IntoBeing Placements</b> is a
          specialized recruitment agency focusing on{" "}
          <b className="font-bold text-primary"> Finance, IT, and Legal</b>{" "}
          headhunting and talent search for all permanent, contract and
          temporary positions. The company consist of young entrepreneurs with
          extensive recruitment knowledge and experience within our niche market
          across numerous industries providing sound advice, professional
          consultancy and resources within these niche areas. We are recognised
          for our professionalism, excellence, diligence and our rapid
          turn-around times and exceptionally high ethical standards which
          translate to the quality of our candidates we serve.
        </p>
      </AnimatedGroup>

      {/* <WorkedWith /> */}
      {/* Why Choose Us */}
      <AnimatedGroup className="w-full">
        <div className="mt-4 p-4 text-4xl font-bold text-bigtitle sm:text-7xl">
          Why choose us ?
        </div>
        <WhyChooseUsCarousel />
      </AnimatedGroup>
    </div>
  );
};

export default AboutUs;
