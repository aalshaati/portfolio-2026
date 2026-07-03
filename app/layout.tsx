import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { site } from "./content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Abdullah Alshaati — Computer Engineering",
    template: "%s — Abdullah Alshaati",
  },
  description: site.description,
  openGraph: {
    title: "Abdullah Alshaati — Computer Engineering",
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Alshaati — Computer Engineering",
    description: site.description,
  },
};

/* Runs before hydration so a saved accent theme applies without a flash */
const themeInit = `try{var t=localStorage.getItem("accent");if(t==="olive"||t==="clay")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
