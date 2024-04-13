import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request) {
  return new Response("Not implemented", { status: 501 });
}
export async function PUT(request: Request): Promise<NextResponse> {
  const reqFormData = await request.formData();
  const file = reqFormData.get("vacancy") as File;

  const blob = await put("vacancies/"+file.name, file, {
    access: "public",
  });

  //Save to database
  //try except -> delete file from storage

  return NextResponse.json(
    { message: "Your vacancy has been submitted successfully" },
    {
      status: 201,
    },
  );
}
