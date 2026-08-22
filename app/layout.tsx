import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteProgressBar } from "@/components/layout/RouteProgressbar";
import { NavigationLoader } from "@/components/layout/NavigationLoader";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnwithikay.com"),
  title: {
    default: "Learn With iKay | Data Analytics School",
    template: "%s · Learn With iKay",
  },
  description:
    "Learn With iKay (LWi) is a practitioner-led data analytics school offering cohort-based bootcamps, private 1-on-1 classes, corporate training and a Data Analytics for Kids programme. Excel, SQL, Power Query, Power BI and Python on real, messy data.",
  keywords: [
    "data analytics school",
    "data analytics bootcamp Nigeria",
    "learn SQL",
    "learn Power BI",
    "data analytics for kids",
    "corporate data training",
  ],
  authors: [{ name: "Learn With iKay" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://learnwithikay.com",
    siteName: "Learn With iKay",
    title: "Learn With iKay | Data Analytics School",
    description:
      "Academic precision meets industry reality. Cohorts, private classes, corporate training and a kids programme.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn With iKay | Data Analytics School",
    description: "Academic precision meets industry reality.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-sans text-on-background antialiased selection:bg-tertiary-fixed selection:text-primary">
       <NavigationLoader />
        <RouteProgressBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}