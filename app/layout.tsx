import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FancyCursor } from "@/components/fancy-cursor";

export const metadata: Metadata = {
  title: {
    default: "DaQube — The Data Behind Intelligence",
    template: "%s | DaQube"
  },
  description:
    "Human-generated data collection, annotation, transcription and AI evaluation services for teams building intelligent systems.",
  metadataBase: new URL("https://daqube.example"),
  openGraph: {
    title: "DaQube — The Data Behind Intelligence",
    description: "Human-generated data and expert workflows for AI teams.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <ThemeProvider>
          {/* Custom Interactive Fancy Cursor */}
          <FancyCursor />

          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
