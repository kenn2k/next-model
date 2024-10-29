import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { StyledRoot } from "@/StyledRoot";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Next-model",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppRouterCacheProvider>
          <StyledRoot>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
