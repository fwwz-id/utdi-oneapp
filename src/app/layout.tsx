import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

import ThemeProvider from "~/app/_provider/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["100", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


import "./index.css";

export const metadata: Metadata = {
  title: "UTDI-oneapp",
  description: "Single app for all UTDI services (SIAKAD, Keuportal, etc)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <CssBaseline enableColorScheme/>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
