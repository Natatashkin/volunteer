import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import qs from "qs";
import { getNavigationData } from "../lib/services";
import { fetchLocalesData } from "@/middleware";
import AppBar from "@Components/AppBar/AppBar";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  const { locales } = await fetchLocalesData();
  return locales;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const navQuery = qs.stringify(
    {
      fields: ["title", "link"],
      populate: [
        "nested_menu_items.id",
        "nested_menu_items.title",
        "nested_menu_items.link",
      ],
      locale: params.lang,
    },
    { encodeValuesOnly: true }
  );

  const navigationData = await getNavigationData(navQuery);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AppBar locale={params.lang} items={navigationData} />
        {children}
      </body>
    </html>
  );
}
