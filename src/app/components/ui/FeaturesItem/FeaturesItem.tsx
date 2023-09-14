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
      <h3>{title}</h3>
      <Image src={iconHref} width={40} height={40} alt="" />
			<p>{description}</p>
    </div>
  );
};

export default FeaturesItem;
