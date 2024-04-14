import { InsertJobSeeker, InsertVacancy } from "@/db/schema";
import { error } from "console";
import * as React from "react";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const ContactUsEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      gap: "3",
    }}
  >
    <h1 style={{ fontSize: 18 }}>
      A Visitor of the Into-Being Website sent an Email
    </h1>
    <div style={{ padding: 10 }}>
      <div>Name : {firstName}</div>
      <div>Email : {email}</div>
    </div>
    <p style={{ alignSelf: "center", padding: 5 }}>{message}</p>
  </div>
);
interface JobSeekerEmailTemplateProps extends InsertJobSeeker {
  downloadLink: string;
}
export const JobSeekerEmailTemplate: React.FC<
  Readonly<JobSeekerEmailTemplateProps>
> = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      gap: "3",
    }}
  >
    <h1 style={{ fontSize: 18 }}>A Job Seeker has submitted their CV</h1>
    <div style={{ padding: 10 }}>
      <div>Full Name : {props.firstName + " " + props.lastName}</div>
      <div>Email : {props.email}</div>
      <div>Mobile Number : {props.mobileNumber}</div>
      <div>Current Salary Range : {props.currentSalaryRange}</div>
      <div>Current Salary Rate : {props.currentSalaryRate}</div>
      <div>Nationality : {props.nationality}</div>
      <br />
      You can learn more about the job seeker by{" "}
      <a
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
        href={props.downloadLink}
      >
        downloading
      </a>{" "}
      their CV
    </div>
  </div>
);

export const sendInsertedJobSeekerConfirmationEmail = async (
  props: JobSeekerEmailTemplateProps,
): Promise<void> => {
  const { firstName } = props;
  try {
    const sendToTerry = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      // to: ["terry@intobeingplacements.co.za"],
      to: ["nexusthestaff@gmail.com"],
      subject: "New CV Uploaded on Intobeing Placements",
      react: JobSeekerEmailTemplate(props) as React.ReactElement,
    });

    if (sendToTerry.error) {
      console.error(sendToTerry.error);
      throw error;
    }

    const confirmWithJobSeeker = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      to: [props.email],
      subject: "Into-Being Placements",
      text: `Hello ${firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase()},\n\nThank you for reaching out to us. We have received your CV and will get back to you as soon as possible.\n\nBest Regards,\nInto-Being Placements`,
    });
    if (confirmWithJobSeeker.error) {
      console.error(confirmWithJobSeeker.error);
      throw error;
    }
    console.log({ message: "Email sent successfully" });
  } catch (error) {
    throw error;
  }
};

interface VacancyEmailTemplateProps extends InsertVacancy {
  downloadLink: string;
}
export const VacancyEmailTemplate: React.FC<
  Readonly<VacancyEmailTemplateProps>
> = (props) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      gap: "3",
    }}
  >
    <h1 style={{ fontSize: 18 }}>A Job Poster has submitted a Vacancy</h1>
    <div style={{ padding: 10 }}>
      <div>Posted By : {props.postedBy}</div>
      <div>Company Name : {props.companyName}</div>
      <div>Email : {props.postedByEmail}</div>
      <div>Mobile Number : {props.postedByMobile}</div>
      <div>Posted By Source : {props.postedBySource}</div>
      <div>Job Niche : {props.jobNiche}</div>
      <div>Job Title : {props.jobTitle}</div>
      <div>Job Description : {props.jobDescription}</div>
      <div>Job Region : {props.jobRegion}</div>
      <div>Working Model : {props.workingModel}</div>
      <br />
      You can learn more about the job by{" "}
      <a
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
        href={props.downloadLink}
      >
        downloading
      </a>{" "}
      the vacancy details
    </div>
  </div>
);

export const sendInsertedVacancyConfirmationEmail = async (
  props: VacancyEmailTemplateProps,
): Promise<void> => {
  const { postedBy } = props;
  try {
    const sendToTerry = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      // to: ["terry@intobeingplacements.co.za"],
      to: ["nexusthestaff@gmail.com"],
      subject: "New Vacancy Uploaded on Intobeing Placements",
      react: VacancyEmailTemplate(props) as React.ReactElement,
    });

    if (sendToTerry.error) {
      console.error(sendToTerry.error);
      throw error;
    }
    const confirmWithJobSeeker = await resend.emails.send({
      from: "Intobeing <info@intobeingplacements.co.za>",
      to: [props.postedByEmail],
      subject: "Into-Being Placements",
      react: VacancyConfirmationEmailContent({
        firstName: postedBy,
      }) as React.ReactElement,
    });
    if (confirmWithJobSeeker.error) {
      console.error(confirmWithJobSeeker.error);
      throw error;
    }
    console.log({ message: "Email sent successfully" });
  } catch (error) {
    throw error;
  }
};

const VacancyConfirmationEmailContent: React.FC<{ firstName: string }> = ({
  firstName,
}) => {
  firstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLocaleLowerCase();
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      color: "#333",
      padding: "20px",
      lineHeight: "1.5",
    },
    header: {
      fontSize: "18px",
      color: "#444",
    },
    body: {
      marginTop: "20px",
    },
    footer: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Hello {firstName},</h1>
      <p style={styles.body}>
        Thank you for reaching out to us.
        <br />
        Your job post has been uploaded successfully and is being reviewed.
        <br />
        You will be notified once the process is done.
      </p>
      <p style={styles.footer}>
        Best Regards,
        <br />
        Into-Being Placements
      </p>
    </div>
  );
};
