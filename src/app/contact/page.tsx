// import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Contact - VirtualCrew",
};
const ContactPage = () => {
  return (
    <main className="px-5 2xl:px-0">
      <section className="mt-40">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:flex-row justify-between items-center">
          <h1 className="text-6xl font-semibold">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <div>
            <Link
              href={"tel:+15618188489"}
              className="px-20 py-3 bg-red-500 rounded-full text-xl text-white"
            >
              +1 561 818 8489
            </Link>
          </div>
        </div>
        <div className="border border-black mt-10 max-w-7xl mx-auto"></div>
        <div className="max-w-7xl mx-auto my-10">
          <div className="mb-5 text-center">
            {/* <h2 className="text-4xl ">Our Office</h2>
            <p className="text-gray-500">
              1303, US 127 South, Suite 104 #1002, Frankfurt, KY 40601
            </p> */}
          </div>
        </div>
        <iframe
          className="w-full h-full border-none rounded text-white"
          src="https://api.leadconnectorhq.com/widget/form/CIDk4B1gkrOrnA0K7FV5"
          id="inline-CIDk4B1gkrOrnA0K7FV5"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Us"
          data-height="535"
          data-layout-iframe-id="inline-CIDk4B1gkrOrnA0K7FV5"
          data-form-id="CIDk4B1gkrOrnA0K7FV5"
          title="Contact Us"
        ></iframe>
        <Script src="https://link.msgsndr.com/js/form_embed.js" />
      </section>
    </main>
  );
};

export default ContactPage;
