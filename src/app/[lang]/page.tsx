import qs from "qs";
import { getHomePageData, baseUrl } from "../lib/services";
import { IHomePageProps } from "@/types";
import Hero from "../components/ui/Hero/Hero";

import styles from "./page.module.scss";
import Container from "../components/Container/Container";
import { useAppContext } from "../context/appContext";

export default async function Home({ params: { lang } }: IHomePageProps) {
  const pageQery = qs.stringify(
    {
      populate: [
        "seo",
        "hero.title",
        "hero.description",
        "hero.backgroundImage",
        "logo",
        "action",
      ],
      locale: lang,
    },
    { encodeValuesOnly: true }
  );

  const {
    attributes: {
      pageTitle,
      hero: {
        title: heroTitle,
        description: heroDescription,
        heroButtonTitle,
        backgroundImage,
      },
      action,
    },
  } = await getHomePageData(pageQery);

  const heroImagePath = `${baseUrl}${backgroundImage.data[0].attributes.url}`;
  const actionText = action[0].actionText;
  const actionLink = action[0].actionLink;

  return (
    <main className={styles.main}>
      <Hero
        pageTitle={pageTitle}
        actionText={actionText}
        actionLink={actionLink}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroImage={heroImagePath}
        heroButtonTitle={heroButtonTitle}
      />
      {/* <Container>children</Container> */}
    </main>
  );
}
