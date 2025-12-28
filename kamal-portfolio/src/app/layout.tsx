import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamal Bura | AI & IoT Engineer",
  description: "AI & IoT Engineer | CSE Student specializing in Artificial Intelligence, IoT, and Computer Science Engineering. Building intelligent systems for tomorrow.",
  keywords: ["AI Engineer", "IoT Developer", "Full Stack Developer", "Machine Learning", "Computer Science", "Portfolio"],
  authors: [{ name: "Kamal Bura" }],
  creator: "Kamal Bura",
  openGraph: {
    title: "Kamal Bura | AI & IoT Engineer",
    description: "AI & IoT Engineer | CSE Student specializing in Artificial Intelligence, IoT, and Computer Science Engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Kamal Bura Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Bura | AI & IoT Engineer",
    description: "AI & IoT Engineer | CSE Student specializing in Artificial Intelligence, IoT, and Computer Science Engineering.",
    creator: "@kamalbura",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          {children}
          <CustomCursor />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
