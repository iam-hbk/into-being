"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} className="w-full" type="submit">
      Submit
    </Button>
  );
}

function ContactUsForm() {
  const initialState = {
    message: "",
    status: 200,
  };

  const [state, formAction] = useFormState(sendEmail, initialState);
  return (
    <form
      action={formAction}
      className="flex h-full flex-grow flex-col gap-2 md:col-span-4 md:col-start-2 lg:col-span-3 lg:col-start-3"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input name="name" className="w-full" placeholder="Name" />
        <Input name="email" className="w-full" placeholder="Email" />
      </div>
      <Textarea
        name="message"
        className="h-full"
        placeholder="Type your message here."
      />
      <SubmitButton />
      
    </form>
  );
}

export default ContactUsForm;
