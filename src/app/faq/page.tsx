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
        <h1>FAQ</h1>
      </header>

      <div>
        List is empty.
      </div>

      <footer>
        <p>&copy; {(new Date()).getFullYear()} Spark Tech. All rights reserved.</p>
      </footer>
    </BrowserPage>
  )
}