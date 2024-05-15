import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center">
      No Positions Available at the moment, please check back later.
      <Link className="text-primary underline" href={"/"}>
        Go back Home
      </Link>
    </section>
  );
};

export default Page;
