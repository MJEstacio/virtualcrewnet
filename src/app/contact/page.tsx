import ContactForm from "@/components/ContactForm";
import { Toaster } from "react-hot-toast";

const ContactPage = () => {
  return (
    <main className="text-white">
      <div>
        <Toaster />
      </div>
      <section className="max-h-screen mt-40">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
