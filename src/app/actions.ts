"use server";
import { EmailTemplate } from "@/components/email-template";
import { stat } from "fs";
import React from "react";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import { z } from "zod";

export async function sendEmail(prevState: any, formData: FormData) {
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    message: z.string().min(5),
  });
  const validatedFormData = schema.parse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });
  console.log("\n\nSending the email...");
  try {
    const data = await resend.emails.send({
      from: "Into-Being <heritierkaumbu@resend.dev>",
      //   to: ["delivered@resend.dev"],
      to: ["rainheritier@gmail.com"],
      subject: "Into-Being Website Contact Form Submission",
      react: EmailTemplate({
        firstName: validatedFormData.name,
        email: validatedFormData.email,
        message: validatedFormData.message,
      }) as React.ReactElement,
    });
    console.log(data);

    return { message: "Email sent successfully", status: 200 };
  } catch (error) {
    console.error(error);
    return { message: "Error sending email", status: 500 };
  }
}
