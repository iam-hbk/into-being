import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  console.log("Server:", process.env.EMAIL_SMTP_HOST);
  console.log("Port:", process.env.EMAIL_PORT);
  console.log("Username:", process.env.EMAIL_USERNAME);

  const server_email = process.env.EMAIL_USERNAME;

  // Create reusable transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST, // e.g., 'smtp.example.com'
    port: parseInt(process.env.EMAIL_PORT || "587", 10),
    secure: process.env.EMAIL_PORT === "465", // true for 465, false for other ports
    auth: {
      user: server_email,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Send email to the client
  await transporter.sendMail({
    from: `"Intobeing Placements" <${server_email}>`, // sender address
    to: email, // list of receivers (the client's email)
    subject: "We've received your message!",
    text: `Hello ${name},\n\nWe have received your message and will be in touch with you shortly.\n\nBest regards,\nYour Company Name`,
  });

  // Send email to the business owner
  await transporter.sendMail({
    from: `"Intobeing Placements" <${server_email}>`, // sender address
    // to: "terry@intobeingplacements.co.za",
    to: "rainheritier@gmail.com",
    subject: "New client inquiry",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return NextResponse.json(
    { message: "Emails sent successfully!" },
    { status: 200 },
  );
  //   return res.status(200).json({ message: "Emails sent successfully!" });
}
