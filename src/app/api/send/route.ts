import { EmailTemplate } from "@/components/email-template";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("\n\n\n-----------------");
    const { name, email, message } = await request.json();

    console.log(console.log(name, email, message));
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Into-Being Website Contact Form Submission",
      react: EmailTemplate({
        firstName: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    return Response.json(data);

    // return Response.json({ message: "Email sent successfully from server" });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
