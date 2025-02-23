import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen">
        <div className='relative min-h-screen w-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'>
          {/* Navbar Container */}
          <div className='fixed top-0 left-0 right-0 h-[50px] flex justify-center items-center z-50'>
            <Navbar />
          </div>

          {/* Main Content Container */}
          {/* <main className='pt-[60px] min-h-screen overflow-y-auto'> */}
            {children}
          {/* </main> */}

          {/* Theme Toggle Button */}
          <div className='fixed right-4 bottom-4 z-50'>
            <ThemeToggle/>
          </div>
        </div>
      </body>
    </html>
  );
}