import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div className="flex-column flex w-full max-w-xl items-center gap-3 bg-background">
    <h1 className="text-xl ">
      A Visitor of the Into-Being Website sent an Email
    </h1>
    <div className="p-10">
      <div>Name : {firstName}</div>
      <div>Email : {email}</div>
    </div>
    <p className="max-w-xs self-center p-5 ">{message}</p>
  </div>
);
