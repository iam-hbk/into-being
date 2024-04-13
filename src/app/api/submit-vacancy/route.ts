import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Not implemented", { status: 501 });
}
export async function POST(request: Request): Promise<NextResponse> {
  const reqFormData = await request.formData();
  const file = reqFormData.get("cv") as File;

  const blob = await put(file.name, file, {
    access: "public",
  });

  return NextResponse.json(
    { message: "Your vacancy has been submitted successfully", ...blob },
    {
      status: 201,
    },
  );
}
