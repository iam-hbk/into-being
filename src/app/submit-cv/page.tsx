import SubmitCVForm from "@/components/submit-cv";
import React from "react";

type Props = {};

const Page = (props: Props) => {



  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-bigtitle to-secondary pt-10 dark:from-tertiary">
      <SubmitCVForm />
    </section>
  );
};

export default Page;
