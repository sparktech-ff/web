import type { Metadata } from "next";
import {ReactNode} from "react";
import "./globals.scss";
import "bootstrap/dist/css/bootstrap.css";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
