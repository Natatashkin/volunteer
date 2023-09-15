import { getStrapiMedia } from "@/app/utils/helpers";
import { CollectionItem } from "@/types";
import Image from "next/image";
import styles from "./featuresItem.module.scss";

export interface IFeaturesItemProps {
  title: string;
  description: string;
  icon: any;
}

const FeaturesItem = ({ title, description, icon }: IFeaturesItemProps) => {
  const iconHref = getStrapiMedia(icon.data.attributes.url);
  return (
    <div className={styles.features_item}>
      <h3 className={styles.features_item_title}>{title}</h3>
      <Image src={iconHref} width={60} height={60} alt="" className={styles.features_item_icon}/>
			<p>{description}</p>
    </div>
  );
};

export default FeaturesItem;
