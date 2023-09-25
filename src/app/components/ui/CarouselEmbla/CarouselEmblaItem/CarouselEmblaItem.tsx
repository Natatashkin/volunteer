import Image from "next/image";
import LinkButton from "../../LinkButton/LinkButton";
import styles from "../carouselEmbla.module.scss";
import { getStrapiMedia } from "@/app/utils/helpers";

export interface CarouselEmblaItemProps {
  title: string;
  description: string;
  image: any;
  progect_category: any;
  date: Date;
}

const CarouselEmblaItem = ({
  title,
  description,
  image,
  progect_category,
  date,
}: CarouselEmblaItemProps) => {
  const [imageData] = image.data;
  const { url, alternativeText } = imageData.attributes;
  const imageUrl = getStrapiMedia(url);

  return (
    <div className={styles.embla__slide}>
      <Image
        className={styles.embla__slide__img}
        src={imageUrl}
        alt={alternativeText}
        fill
      />
      <div className={styles.embla__slide__info}>
        <h4 className={styles.embla__slide__info__text}>{title}</h4>
        <div className={styles.embla__slide__info__button}>
          <LinkButton variant="outlined" title="Докладніше" link="/projects" />
        </div>
      </div>
    </div>
  );
};  

export default CarouselEmblaItem;