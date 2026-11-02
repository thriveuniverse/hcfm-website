import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata = {
  metadataBase: new URL("https://historicalfeasibility.com"),
  title: {
    default: "HCFM | Historical Feasibility",
    template: "%s | HCFM",
  },
  description:
    "Historical Construction Feasibility Model — construction due diligence for historic and heavily altered buildings. Know what the evidence establishes, what remains uncertain, and what to verify before the next project decision.",
  openGraph: {
    siteName: "HCFM | Historical Feasibility",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
