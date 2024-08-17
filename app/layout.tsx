import type { Metadata } from "next";

import NavBar from "./_componants/NavBar";
import OpenContextProvider from "./_componants/OpenContext";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s / Hilink camp",
    default: "welcome / Hilink camp",
  },
  description: "travel UI/UX app for camping ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OpenContextProvider>
          <NavBar />
          <main className="relative overflow-hidden"> {children}</main>
        </OpenContextProvider>
      </body>
    </html>
  );
}
