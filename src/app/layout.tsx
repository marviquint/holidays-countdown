import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SnowEffect from "./components/SnowFall";  // Adjust the import path as needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holidays Countdown",
  description: "Special event countdown timer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundImage: "url('./images/snow.png')", // Path to image
          backgroundSize: 'cover',  // Ensures the image covers the entire viewport
          backgroundPosition: 'center',  // Centers the image
          backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
          minHeight: '100vh',  // Ensures the body covers the full viewport height
          width: '100vw',  // Ensures the body covers the full viewport width
          margin: 0,  // Ensures no margins are applied to the body
          position: 'relative',  // Ensures the body is positioned to allow overlay
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Make sure it stays behind the content
          }}
        >
          <SnowEffect />
        </div>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer
          className="w-full bg-black text-white text-center py-4"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <p>© {new Date().getFullYear()} All rights reserved. Marviquint Bahio</p>
        </footer>
      </body>
    </html>
  );
}
