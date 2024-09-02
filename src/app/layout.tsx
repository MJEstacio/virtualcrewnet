import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CallSection from "@/components/CallSection";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });
// const roboto = Roboto({
//   subsets: ["latin"],
//   variable: "--font-roboto",
//   weight: ["400", "500", "700"],
// });
// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "500", "600", "700"],
// });
export const metadata: Metadata = {
  title: "VirtualCrew.net",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="poppins">
        <Navbar />
        <Toaster
          position="top-center"
          toastOptions={{ duration: 3000 }}
        />
        {children}
        <Footer />
        <SpeedInsights />
        {/* <CallSection /> */}
        <call-us-selector
          phonesystem-url="https://1287.3cx.cloud"
          party="na"
        ></call-us-selector>
        <Script
          defer
          src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
          id="tcx-callus-js"
        ></Script>
        ;
      </body>
    </html>
  );
}
