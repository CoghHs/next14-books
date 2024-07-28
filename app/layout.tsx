import { Metadata } from "next";
import Navigation from "../components/Navigation";
import "../styles/global.css";
import Side from "../components/Side";

export const metadata: Metadata = {
  title: "Next Books",
  description: "Next Books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Side />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
