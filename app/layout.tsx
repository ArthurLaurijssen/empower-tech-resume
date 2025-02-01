import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import React from "react";

const sora = localFont({
  src: [
    {
      path: "./fonts/Sora-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Sora-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Sora-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Sora-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Sora-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Sora-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Arthur Laurijssen Resume",
  description: "Arthur Laurijssen Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
      </body>
    </html>
  );
}
