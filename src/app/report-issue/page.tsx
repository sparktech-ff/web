import {Metadata} from "next";
import {BrowserPage} from "@/config/BrowserPage";
import React from "react";

export const metadata: Metadata = {
  title: "Application home page",
  description: "Application home page",
};

export default function AppHome() {
  return (
    <BrowserPage>
      <header>
        <h1>Report Issue</h1>
        <strong>Email:</strong> <a href="mailto:info@spark-tech.io">info@spark-tech.io</a>
        <br/>
      </header>

      <footer>
        <p>&copy; {(new Date()).getFullYear()} Spark Tech. All rights reserved.</p>
      </footer>
    </BrowserPage>
  )
}