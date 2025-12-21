import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import TransitionProvider from '@/components/ui/TransitionProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kamal Bura | AI & IoT Engineer",
  description: "AI & IoT Engineer | CSE Student specializing in Artificial Intelligence, IoT, and Computer Science Engineering. Building intelligent systems for tomorrow.",
  keywords: ["AI Engineer", "IoT Developer", "Full Stack Developer", "Machine Learning", "Computer Science"],
  authors: [{ name: "Kamal Bura" }],
  openGraph: {
    title: "Kamal Bura | AI & IoT Engineer",
    description: "AI & IoT Engineer | CSE Student specializing in Artificial Intelligence, IoT, and Computer Science Engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScrollProvider>
          <TransitionProvider>
            {children}
            <CustomCursor />
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
