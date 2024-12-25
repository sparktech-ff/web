import React from "react";
import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Landing page",
  description: "Landing page",
};

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="p-5">
            <h1>Landing page</h1>
            <Link href={"/dashboard"}>
              Got to app
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}