import qs from "qs";
import { getHomePageData, baseUrl } from "../lib/services";
import { IHomePageProps } from "@/types";
import Hero from "../components/ui/Hero/Hero";

import styles from "./page.module.scss";
import hidden from '../styles/visually-hidden.module.scss';

export default async function Home({ params: { lang } }: IHomePageProps) {
  const pageQery = qs.stringify(
    {
      populate: [
        "seo",
        "hero.heroTitle",
        "hero.heroDescription",
        "hero.heroBackgroundImage",
        "hero.heroButtonLink",
        "hero.heroButtonTitle",
      ],
      locale: lang,
    },
    { encodeValuesOnly: true }
  );

  const {
    attributes: {
      pageTitle,
      hero: {
        heroDescription,
        heroTitle,
        heroBackgroundImage,
        heroButtonLink,
        heroButtonTitle,
      },
    },
  } = await getHomePageData(pageQery);

  const heroImagePath = `${baseUrl}${heroBackgroundImage.data[0].attributes.url}`;

  return (
    <main className={styles.main}>
      <h1 className={hidden.visually_hidden}>{pageTitle}</h1>
      <Hero
      pageTitle={pageTitle}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroImage={heroImagePath}
        heroButtonTitle={heroButtonTitle}
        heroButtonLink={heroButtonLink}
      />
      {/* <Container>children</Container> */}
    </main>
  );
}
