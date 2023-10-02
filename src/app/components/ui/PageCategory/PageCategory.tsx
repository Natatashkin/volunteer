import Image from "next/image";
import styles from "./pageCategory.module.scss";
import { generateLink, getStrapiMedia } from "@/app/utils/helpers";
import LinkButton from "../LinkButton/LinkButton";
import Link from "next/link";

export interface IPageCategoryProps {
  link: string;
  title: string;
  image: any;
  parentSlug: string;
}

const PageCategory = ({
  link,
  title,
  image,
  parentSlug,
}: IPageCategoryProps) => {
  const { url, alternativeText } = image.data.attributes;

  const imageLink = getStrapiMedia(url);
  const itemLink = `${parentSlug}/${link}`;
  return (
    <Link href={itemLink} className={styles.category}>
      <h3 className={styles.category_title}>{title}</h3>
      <div className={styles.category_thumb}>
        <Image src={imageLink} fill alt={alternativeText} />
      </div>
    </Link>
  );
};

export default PageCategory;
