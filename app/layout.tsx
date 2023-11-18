"use client";
import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import App from "@/components/ContactUsForm";
import Testimonials from "@/components/testimonial";
import FeaturesSection from "@/components/Services";
import GetApp from "@/components/GetApp";
import Navigation from "@/components/Navigation";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: "AIWARELAB",
//   description: "AIWARELAB",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        <Navigation />
        <main className="relative overflow-hidden">{children}</main>

        <FeaturesSection />
        <Testimonials />
        <GetApp />
        <App />
        <Footer />

        {/* <Script
          src="https://cdn.voiceflow.com/widget/bundle.mjs"
          onLoad={() => {
            (function (d, t) {
              var v = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
              v.onload = function () {
                window.voiceflow.chat.load({
                  verify: { projectID: "654f770cd549fb000707fee7" },
                  url: "https://general-runtime.voiceflow.com",
                  versionID: "production",
                });
              };
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, "script");
          }}
        ></Script> */}
        <Script
          src="https://cdn.voiceflow.com/widget/bundle.mjs"
          onLoad={() => {
            (function (d, t) {
              var v = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
              v.onload = function () {
                window.voiceflow.chat.load({
                  verify: { projectID: "6558130e63d2b3000791e7c9" },
                  url: "https://general-runtime.voiceflow.com",
                  versionID: "production",
                });
              };
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
              v.type = "text/javascript";
              s.parentNode.insertBefore(v, s);
            })(document, "script");
          }}
        ></Script>
      </body>
    </html>
  );
}
