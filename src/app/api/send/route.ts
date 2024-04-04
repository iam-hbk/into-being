import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
import { string } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log("\n\n\n-----------------");
    let { name, email, message } = await request.json();
    name =
      (name as string).charAt(0).toUpperCase() +
      (name as string).toLowerCase().slice(1);
    email = email.toLowerCase();

    console.log({ name, email, message });
    const sendToTerry = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      // to: ["terry@intobeingplacements.co.za"],
      to: ["nexusthestaff@gmail.com"],
      subject: "Into-Being Website Contact Form Submission",
      react: EmailTemplate({
        firstName: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    if (sendToTerry.error) {
      console.error(sendToTerry.error);
      const error = await NextResponse.error().json();
      console.error(error);
      return NextResponse.error();
    }

    const confirmWithVisitor = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      to: [email],
      subject: "Into-Being Placements",
      text: `Hello ${name},\n\nThank you for reaching out to us. We will get back to you as soon as possible.\n\nBest Regards,\nInto-Being Placements`,
    });
    if (confirmWithVisitor.error) {
      console.error(confirmWithVisitor.error);
      const error = await NextResponse.error().json();
      console.error(error);
      return NextResponse.error();
    }

    return NextResponse.json({ message: "Email sent successfully" });

    // return Response.json({ message: "Email sent successfully from server" });
  } catch (error) {
    console.error(error);
    return Response.error();
    // return Response.json({ error });
  }
}
