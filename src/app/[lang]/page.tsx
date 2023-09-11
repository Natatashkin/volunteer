import { getPageData } from "../lib/services";
import { IHomePageProps } from "@/types";
import { getPageQuery } from "../utils/helpers";
import styles from "./page.module.scss";
import hidden from "../styles/visually-hidden.module.scss";

export type BlockType = {
  __component: string;
  title: string;
  description: string;
};

export default async function Home({ params: { lang } }: IHomePageProps) {
  const pageQery = getPageQuery("/", lang);
  const [pageData] = await getPageData(pageQery);
  const pageTitle = pageData.attributes.title;
  console.log(pageData);
  const {
    attributes: { seo, blocks },
  } = pageData;

  // const heroImagePath = `${baseUrl}${heroBackgroundImage.data[0].attributes.url}`;

  return (
    <main className={styles.main}>
      <h1 className={hidden.visually_hidden}>{pageTitle}</h1>
      {blocks.map(({ __component, title, description, ...rest }: BlockType) =>
        console.log(rest)
      )}
      {/* <Hero
      pageTitle={pageTitle}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
        heroImage={heroImagePath}
        heroButtonTitle={heroButtonTitle}
        heroButtonLink={heroButtonLink}
      /> */}
      {/* <Container>children</Container> */}
    </main>
  );
}
