import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_GF1FqHiJ_PFXEgLTWtCQL6BqMXSCSt4Kp");

export const sendEmail = async (
  formData: {
    name: string;
    email: string;
    number: string;
    message: string;
  },
  success: (data: any) => void,
  error: (error: any) => void,
) => {
  // res.status(200).send("test");
  try {
    const { name, email, number, message } = formData;
    const data = await resend.emails.send({
      from: `${"onboarding@resend.dev"}`,
      to: `${"mjestacioiii@gmail.com"}`,
      subject: "Message from VirtualCrew.Net Website",
      html: "",
      react: EmailTemplate({ name, email, number, message }),
    });
    success(data);
  } catch (e) {
    error(error);
  }
};

export default sendEmail;
