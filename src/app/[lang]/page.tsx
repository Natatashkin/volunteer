import { getPageData } from "../lib/services";
import { BlockType, IPageProps, TPagePath } from "@/types";
import { getPageQuery } from "../utils/helpers";
// import styles from "./page.module.scss";
import ComponentBuilder from "../components/ComponentBuilder/ComponentBuilder";
import { Fragment } from "react";
import { ROOT_SLUG } from "../lib/constants"; 

export default async function Home({ params: { lang } }: IPageProps) {
  const pageQery = getPageQuery(ROOT_SLUG, lang);
  const [pageData] = await getPageData(pageQery);

  const { blocks } = pageData.attributes;

  return (
    <>
      {blocks?.map((block: BlockType) => {
        return (
          <Fragment key={`${block.__component}-${block.id}`}>
            <ComponentBuilder block={block} />
          </Fragment>
        );
      })}
    </>
  );
}
