import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import qs from "qs";
import { getNavigationData } from "../lib/services";
import { fetchLocalesData } from "@/middleware";
import AppBar from "@Components/AppBar/AppBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locales, defaultLocale } = await fetchLocalesData();
  const navQuery = qs.stringify(
    { populate: ["nested-menu-items"], locale: defaultLocale },
    { encodeValuesOnly: true }
  );
  const navigationData = await getNavigationData(navQuery);
  console.log(navigationData);

  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>
        <AppBar langs={locales} />
        {children}
      </body>
    </html>
  );
}
