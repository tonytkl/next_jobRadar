import type { Metadata } from "next";
import "./globals.css";
import Nabvbar from "@/components/main/navbar";

export const metadata: Metadata = {
  title: "JobRadar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nabvbar />
        {children}
      </body>
    </html>
  );
}
