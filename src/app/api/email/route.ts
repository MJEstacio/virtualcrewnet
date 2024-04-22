import { EmailTemplate } from "@/components/EmailTemplate";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, number, message } = await request.json();
  await resend.emails.send({
    from: "info@virtualcrew.net",
    to: "ijavier78@icloud.com",
    subject: "Message from VirtualCrew.net",
    react: EmailTemplate({ name, email, number, message }),
  });

  return NextResponse.json({
    status: "ok",
  });
}

// ijavier78@icloud.com
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: ["delivered@resend.dev"],
//     subject: "Hello world",
//     react: EmailTemplate({ data }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
