import {Metadata} from "next";
import {BrowserPage} from "@/config/BrowserPage";
import {HomeContainer} from "@/containers/HomeContainer";
import React from "react";

export const metadata: Metadata = {
  title: "Application home page",
  description: "Application home page",
};

export default function AppHome() {
  return (
    <BrowserPage>
      <HomeContainer />
    </BrowserPage>
  )
}