import { SubmitCVForm } from "@/components/submit-cv";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <SubmitCVForm />
    </section>
  );
};

export default Page;
