import Link from "next/link";
import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <h2>
        Sorry, we couldn't find the page you're looking for. But we can find you
        a Job !{" "}
        <Link className="text-primary underline" href={"/available-positions"}>
          Here are some available positions{" "}
        </Link>
        😉.
      </h2>
      <h2>
        Go back the{" "}
        <Link className="text-primary underline" href={"/"}>
          Home Page.
        </Link>
      </h2>
    </section>
  );
};

export default NotFound;
