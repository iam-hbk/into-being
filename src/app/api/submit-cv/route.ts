import { addJobSeeker, InsertJobSeeker } from "@/db/schema";
import { sendInsertedJobSeekerConfirmationEmail } from "@/components/email-template";
import { put, del } from "@vercel/blob";
import { NextResponse } from "next/server";

// export const runtime = "edge";

export async function GET(request: Request) {
  return new Response("Not implemented", { status: 501 });
}
export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const reqFormData = await request.formData();
    const file = reqFormData.get("cv") as File;
    const blob = await put("CVs/" + file.name, file, {
      access: "public",
      addRandomSuffix: false,
    });
    // Save to database
    const job_seeker: InsertJobSeeker = {
      idNumber: reqFormData.get("idNumber") as string,
      firstName: reqFormData.get("firstName") as string,
      lastName: reqFormData.get("lastName") as string,
      mobileNumber: reqFormData.get("mobileNumber") as string,
      email: reqFormData.get("email") as string,
      currentSalaryRange: reqFormData.get("currentSalary") as string,
      currentSalaryRate: reqFormData.get("currentSalaryRate") as string,
      nationality: reqFormData.get("nationality") as string,
      ethnicity: reqFormData.get("ethnicity") as string,
      cvUploadPath: blob.url,
    };
    const insertedJobSeeker = await addJobSeeker(job_seeker);
    if (!insertedJobSeeker) {
      try {
        await del(blob.url);
      } catch (error) {
        throw error;
      }
    }
    //Send email to the job seeker and the admin
    await sendInsertedJobSeekerConfirmationEmail({
      ...insertedJobSeeker,
      downloadLink: blob.url,
    });
    return NextResponse.json(
      { message: "Your CV has been submitted successfully" },
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
