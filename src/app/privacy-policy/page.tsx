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
        <h1>Privacy Policy</h1>
        <p>Last updated: <strong>January 21, 2025</strong></p>
      </header>

      <div>
        <section>
          <h2>1. Introduction</h2>
          <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your
            information when you use our feature flag application.</p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information when you use our application:</p>
          <ul>
            <li><strong>Personal Information:</strong> Information that identifies you, such as your name, email
              address, and contact details.
            </li>
            <li><strong>Usage Data:</strong> Information about how you use the application, including IP address,
              browser type, and pages visited.
            </li>
            <li><strong>Metadata:</strong> Data related to actions you perform within the application, such as feature
              flag changes.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our application.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To communicate with you, including sending updates and promotional messages.</li>
            <li>To understand and analyze how you use our application.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Sharing and Disclosure</h2>
          <p>We will not sell or rent your personal information to third parties. We may share your information in the
            following situations:</p>
          <ul>
            <li>With your consent.</li>
            <li>With service providers who help us operate our application.</li>
            <li>To comply with legal obligations or protect our rights.</li>
          </ul>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your data from unauthorized
            access, use, or disclosure. However, please remember that no method of transmission over the internet or
            method of electronic storage is 100% secure.</p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate personal data.</li>
            <li>Request deletion of your personal data under certain conditions.</li>
            <li>Object to or restrict our processing of your data.</li>
          </ul>
        </section>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:<br/>
            <strong>Email:</strong> <a href="mailto:support@sprk-tech.io">support@sprk-tech.io</a>
          </p>
        </section>
      </div>

      <footer>
        <p>&copy; {(new Date()).getFullYear()} Spark Tech. All rights reserved.</p>
      </footer>
    </BrowserPage>
  )
}