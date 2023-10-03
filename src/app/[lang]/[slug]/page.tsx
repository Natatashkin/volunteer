import { getPageData } from "@/app/lib/services";
import { getPageQuery } from "@/app/utils/helpers";
import { IPageProps } from "@/types";
import styles from "./page.module.scss";
import classNames from "classnames";
import Container from "@/app/components/Container/Container";
import CategoriesList from "@/app/components/CategoriesList/CategoriesList";
import Link from "next/link";

const Page = async ({ params: { lang, slug } }: IPageProps) => {
  console.log("slug", slug);
  

  const pageQuery = getPageQuery(slug, lang);
  const [pageData] = await getPageData(pageQuery);

  return (
    <Container>
      <div className={styles.page}>
        <h1 className={styles.page_title}></h1>
        
      </div>
    </Container>
  );
};

export default Page;
