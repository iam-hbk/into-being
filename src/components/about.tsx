import React from "react";
import { WorkedWith } from "./worked-with";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-b from-transparent to-gray-400 p-10">
      <div className="p-4 text-7xl font-bold" id="services">
        About Us
      </div>
      <p className="mt-4 max-w-screen-sm text-center">
        <b className="font-bold text-primary">IntoBeing Placements</b> is a
        specialized recruitment agency focusing on{" "}
        <b className="font-bold text-primary"> Finance, IT, and Legal</b>{" "}
        headhunting and talent search for all permanent, contract and temporary
        positions. The company consist of young entrepreneurs with extensive
        recruitment knowledge and experience within our niche market across
        numerous industries providing sound advice, professional consultancy and
        resources within these niche areas. We are recognised for our
        professionalism, excellence, diligence and our rapid turn-around times
        and exceptionally high ethical standards which translate to the quality
        of our candidates we serve.
      </p>
      
      {/* <WorkedWith /> */}
    </div>
  );
};

export default AboutUs;
