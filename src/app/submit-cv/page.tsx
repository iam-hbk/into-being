import SubmitCVForm  from "@/components/submit-cv";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="pt-10 flex min-h-screen flex-col items-center justify-center bg-gradient-to-bl from-bigtitle dark:from-tertiary to-secondary">
      <SubmitCVForm />
    </section>
  );
};

export default Page;
