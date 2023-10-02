import { getPageData } from "@/app/lib/services";
import { getPageQuery } from "@/app/utils/helpers";
import { IPageProps } from "@/types";
import styles from "./page.module.scss";
import classNames from "classnames";
import Container from "@/app/components/Container/Container";
import CategoriesList from "@/app/components/CategoriesList/CategoriesList";

const Page = async ({ params: { lang, slug } }: IPageProps) => {
  const pageQuery = getPageQuery(slug, lang);
  const [pageData] = await getPageData(pageQuery);
  const { title, description, blocks, showSidebar, subpages } =
    pageData.attributes;
  const hasCaterories = subpages?.data?.length;

  return (
    <Container>
      <div className={styles.page}>
        <h1 className={styles.page_title}>{title}</h1>
        <div
          className={classNames(styles.page_layout, {
            [styles.page_layout__row]: showSidebar,
          })}
        >
          {description && <p>description</p>}
          {hasCaterories && (
            <CategoriesList parentSlug={slug} list={subpages.data} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Page;
