import Form2 from "@/components/Form";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function GET() {
  // try {
  //   await resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: email,
  //     subject: "This is from VirtualCrew.net website",
  //     html: "TEST",
  //   });
  //   if ((data.status = "success")) {
  //     return NextResponse.json({ message: "Email Successfully Sent!" });
  //   }
  //   return NextResponse.json(data);
  // } catch (error) {
  //   return NextResponse.json({ error });
  // }
}
