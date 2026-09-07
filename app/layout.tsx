import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Host_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RouteProgressBar } from "@/components/layout/RouteProgressbar";
import { NavigationLoader } from "@/components/layout/NavigationLoader";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const hostGrotesk = Host_Grotesk({
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

export const viewport: Viewport = {
  themeColor: "#1b3b2f",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://learnwithikay.com"),
  title: {
    default: "Learn With iKay | Data Analytics School",
    template: "%s · Learn With iKay",
  },
  description:
    "Learn With iKay (LWi) is a practitioner-led data analytics school offering Data Analysis for Beginners, an Advanced Data Analysis Course, and one-on-one STEM Tutoring. Excel, SQL, Power Query, Power BI and Python on real, messy data.",
  keywords: [
    "data analytics school",
    "data analysis course Nigeria",
    "learn SQL",
    "learn Power BI",
    "STEM tutoring",
    "data analysis for beginners",
  ],
  authors: [{ name: "Learn With iKay" }],
  applicationName: "Learn With iKay",
  category: "education",
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://learnwithikay.com",
    siteName: "Learn With iKay",
    title: "Learn With iKay | Data Analytics School",
    description:
      "Academic precision meets industry reality. Data Analysis for Beginners, an Advanced Data Analysis Course, and one-on-one STEM Tutoring.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn With iKay | Data Analytics School",
    description: "Academic precision meets industry reality.",
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
      className={`${hostGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-surface font-sans text-on-background antialiased selection:bg-tertiary-fixed selection:text-primary">
        <OrganizationJsonLd />
           <GoogleAnalytics />
        <NavigationLoader />
        <RouteProgressBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}