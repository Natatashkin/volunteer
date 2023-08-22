import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { getAllLocales } from "@/app/lib/services";

export const fetchLocalesData = async () => {
  const allLocales = await getAllLocales();
  const locales = allLocales?.map(({ code }: { code: string }) => code);

  const defaultLocale = allLocales.find(
    ({ isDefault }: { isDefault: boolean }) => isDefault
  )?.code;

  console.log("defaultLocale", defaultLocale);

  return {
    locales,
    defaultLocale,
  };
};

// Browser prefferences lang
const getLocale = async (request: NextRequest) => {
  const { locales, defaultLocale } = await fetchLocalesData();
  const cookiesLocale = request.cookies.get("userLang")?.value;
  console.log("getLocale", cookiesLocale);

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
};

// middleware
export async function middleware(request: NextRequest) {
  const { locales } = await fetchLocalesData();

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale: string) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  const cookieLocale = request.cookies.get("userLang")?.value;
  const prefferedLocale = await getLocale(request);

  if (pathnameIsMissingLocale) {
    const locale = cookieLocale ?? prefferedLocale;
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
