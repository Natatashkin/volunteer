import Image from "next/image";
import LinkButton from "../../LinkButton/LinkButton";
import styles from "../carouselEmbla.module.scss";
import { getStrapiMedia } from "@/app/utils/helpers";

export interface CarouselEmblaItemProps {
  title: string;
  image: any;
  progect_category: any;
  date?: Date;
}

const CarouselEmblaItem = ({
  title,
  image,
  progect_category,
  date,
}: CarouselEmblaItemProps) => {
  const [imageData] = image.data;
  const { url, alternativeText } = imageData.attributes;
  const imageUrl = getStrapiMedia(url);

  console.log(imageData.attributes.formats);
  

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
