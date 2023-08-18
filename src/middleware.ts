import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";

const getAllLocales = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/i18n/locales`,
    {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const fetchLocalesData = async () => {
  const allLocales = await getAllLocales();
  const locales = allLocales.map(({ code }: { code: string }) => code);
  const defaultLocale =
    allLocales.find(({ isDefault }: { isDefault: boolean }) => isDefault)
      ?.code || "en";

  return {
    locales,
    defaultLocale,
  };
};

const getLocale = async (request: NextRequest) => {
  const { locales, defaultLocale } = await fetchLocalesData();

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale);
};

export async function middleware(request: NextRequest) {
  const { locales } = await fetchLocalesData();
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale: string) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = await getLocale(request);
    // console.log(locale);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
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
