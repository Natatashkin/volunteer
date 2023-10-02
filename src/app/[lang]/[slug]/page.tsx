import { getPageData } from "@/app/lib/services";
import { getPageQuery } from "@/app/utils/helpers";
import { IPageProps } from "@/types";
import styles from "./page.module.scss";
import classNames from "classnames";

const Page = async ({ params: { lang, slug } }: IPageProps) => {
  const pageQuery = getPageQuery(slug, lang);
  const [pageData] = await getPageData(pageQuery);
  const { title, description, blocks, showSidebar } = pageData.attributes;

  console.log(title);

  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <div
        className={classNames(styles.page_layout, {
          [styles.page_layout__row]: showSidebar,
        })}
      >
        {description && <p>description</p>}
      </div>
    </div>
  );
};

export default Page;
