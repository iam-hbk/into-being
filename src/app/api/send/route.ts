import { EmailTemplate } from "@/components/email-template";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Into-Being Website Contact Form Submission",
      react: EmailTemplate({
        firstName: "Heritier",
        email: "heritierkaumbu@gmail.com",
        message: "Hello, Would you like to work with us?",
      }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
