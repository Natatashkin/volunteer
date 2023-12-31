import "../styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import qs from "qs";
import { getNavigationData } from "../lib/services";
import { fetchLocalesData } from "@/middleware";
import AppBar from "@/app/components/AppBar/AppBar";
import { ReactNode } from "react";
import { AppContextProvider, useAppContext } from "../context/appContext";
import { getNavigation } from "../utils/helpers";

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
  const query = getNavigation(params.lang);
  // const navQuery = qs.stringify(
  //   {
  //     fields: ["title", "link"],
  //     populate: [
  //       "nested_menu_items.id",
  //       "nested_menu_items.title",
  //       "nested_menu_items.link",
  //     ],
  //     locale: params.lang,
  //   },
  //   { encodeValuesOnly: true }
  // );

  const navigationData = await getNavigationData(query);
  // console.log("navigationData", navigationData);
  

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <AppBar items={navigationData} />
        <AppContextProvider value={navigationData}>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
