import { sendInsertedVacancyConfirmationEmail } from "@/components/email-template";
import { addVacancy, InsertVacancy } from "@/db/schema";
import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Not implemented", { status: 501 });
}
export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const reqFormData = await request.formData();
    const file = reqFormData.get("vacancy") as File;

    const blob = await put("vacancies/" + file.name, file, {
      access: "public",
    });

    //Save to database
    const heardAboutUs =
      reqFormData.get("heardAboutUs") === "other"
        ? reqFormData.get("otherHeardAboutUs")
        : reqFormData.get("heardAboutUs");
    const region =
      reqFormData.get("region") === "other"
        ? reqFormData.get("otherRegion")
        : reqFormData.get("region");

    const vacancy: InsertVacancy = {
      postedBy: reqFormData.get("nameAndSurname") as string,
      companyName: reqFormData.get("companyName") as string,
      postedByEmail: reqFormData.get("email") as string,
      postedByMobile: reqFormData.get("contactNumber") as string,
      postedBySource: heardAboutUs as string,
      jobNiche: reqFormData.get("niche") as string,
      jobTitle: reqFormData.get("jobTitle") as string,
      jobDescription: reqFormData.get("vacancyDetails") as string,
      jobRegion: region as string,
      workingModel: reqFormData.get("workModel") as
        | "hybrid"
        | "on-site"
        | "remote",
      vacancyFilePath: blob.url,
    };
    const insertedVacancy = await addVacancy(vacancy);
    if (!insertedVacancy) {
      try {
        await del(blob.url);
      } catch (error) {
        throw error;
      }
      return NextResponse.json(
        {
          error:
            "Something went wrong while processing your request. Please try again later.",
        },
        { status: 500 },
      );
    }
    //Send email to the job poster and the admin
    await sendInsertedVacancyConfirmationEmail({
      ...insertedVacancy,
      downloadLink: blob.url,
    });

    return NextResponse.json(
      { message: "Your vacancy has been submitted successfully" },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "An error occurred while processing your request",
      },
      { status: 500 },
    );
  }
}
