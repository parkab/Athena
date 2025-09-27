import type { Metadata } from "next";
// import { ClerkProvider } from '@clerk/nextjs'; // Uncomment after adding valid Clerk keys
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Athena - Habit Tracking & Journaling",
  description: "Track your habits and reflect with journaling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider> {/* Uncomment after adding valid Clerk keys */}
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    // </ClerkProvider> {/* Uncomment after adding valid Clerk keys */}
  );
}
