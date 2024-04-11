import { put } from '@vercel/blob';
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Not implemented", { status: 501 });
}
export async function POST(request: Request): Promise<NextResponse> {
  const reqJSON = await request.json();
 
  // const blob = await put(filename, request.body, {
  //   access: 'public',
  // });

  console.log("Form data", reqJSON);
  return NextResponse.json(
    { message: "Your CV has been submitted successfully" },
    {
      status: 201,
    },
  );
}
