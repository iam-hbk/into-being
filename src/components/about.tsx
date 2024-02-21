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
        <b className="font-bold text-primary">IntoBeing Placements</b> is an
        APSO certified recruitment agency based in Randburg. We specialise in
        talent search and placements of candidates within the fields of{" "}
        <b className="font-bold text-primary">
          IT, Legal, Finance, Human Resources, Sales and Marketing and
          Operations
        </b>{" "}
        across all industries, providing sound advice, professional
        consultancyand resources within these niche areas for both permanent and
        contract positions. At{" "}
        <b className="font-bold text-primary">IntoBeing Placements</b> we drive
        a culture of excellence, diligence and accountability and this is the
        culture we encourage with our candidates and clients. We believe in
        quality over quantity, ensuring that we provide matched skills and
        culture accuracy by applying our intensive process of behavioural based
        method when screening and interviewing candidates with an ultimate goal
        of matching them to the right role and organisation.
      </p>
      <div className="mt-4 p-4 text-7xl font-bold" id="services">
        Who We Have Worked With
      </div>
      <p className="mt-4 max-w-screen-sm text-center">
        We have worked with a number of clients in the past, some of whom are
        listed below:
      </p>
      <WorkedWith />
    </div>
  );
};

export default AboutUs;
