import { getPageData } from "../lib/services";
import { BlockType, IHomePageProps, TPagePath } from "@/types";
import { getPageQuery } from "../utils/helpers";
import styles from "./page.module.scss";
import ComponentBuilder from "../components/ui/ComponentBuilder/ComponentBuilder";
import { Fragment } from "react";

export default async function Home({ params: { lang } }: IHomePageProps) {
  const pageQery = getPageQuery("/", lang);
  const [pageData] = await getPageData(pageQery);

  const {
    attributes: { blocks },
  } = pageData;

  // console.log(pageData?.attributes?.blocks);

  return (
    <main className={styles.main}>
      {blocks?.map((block: BlockType) => {
        return (
          <Fragment key={`${block.__component}-${block.id}`}>
            <ComponentBuilder block={block} />
          </Fragment>
        );
      })}
    </main>
  );
}
