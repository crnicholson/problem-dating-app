import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <Analytics />
        <SpeedInsights />
      </head>
      <UserProvider>
        <body className="antialiased vsc-initialized text-stone-600 h-fit w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100 animate-gradient-x flex flex-col justify-center items-center">{children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
