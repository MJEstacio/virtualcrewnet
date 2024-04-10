import type { Metadata } from "next";
import { Roboto, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
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
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{ duration: 3000 }}
        />
      </body>
    </html>
  );
}
