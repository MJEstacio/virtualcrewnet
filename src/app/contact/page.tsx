import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - VirtualCrew",
};
const ContactPage = () => {
  return (
    <main className="text-white">
      <section className="max-h-screen mt-40">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
