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
        <h1>Terms and Conditions</h1>
        <p>Last updated: <strong>January 21, 2025</strong></p>
      </header>

      <div>
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using our feature flag application, you agree to comply with these terms and conditions.
            If you do not agree, please do not use the application.</p>
        </section>

        <section>
          <h2>2. Definitions</h2>
          <p><strong>Feature Flags:</strong> Configurable settings that control the availability of certain features
            within the application. <br/>
            <strong>Users:</strong> Individuals who have been assigned access to the application and its
            functionalities.</p>
        </section>

        <section>
          <h2>3. Application Use</h2>
          <p>You may use the application for creating, updating, deleting, and assigning users to feature flags. All use
            must comply with applicable laws and regulations.</p>
        </section>

        <section>
          <h2>4. Multiple Flag Modes</h2>
          <p>The application supports various flag modes. Users must understand the implications of each mode before
            implementation. Refer to the documentation for detailed information on flag modes.</p>
        </section>

        <section>
          <h2>5. User Responsibilities</h2>
          <p>Users are responsible for maintaining the confidentiality of their login credentials and for all activities
            conducted through their accounts. Notify us immediately of any unauthorized use.</p>
        </section>

        <section>
          <h2>6. Modifications to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Any changes will be effective immediately upon
            posting. Users are encouraged to review the terms regularly.</p>
        </section>

        <section>
          <h2>7. Limitation of Liability</h2>
          <p>Our application is provided on an &quot;as is&quot; basis. We will not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use or inability to use the application.</p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>These terms shall be governed by and interpreted in accordance with the laws of the relevant jurisdiction
            without regard to its conflict of law principles.</p>
        </section>

        <section>
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:<br/>
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