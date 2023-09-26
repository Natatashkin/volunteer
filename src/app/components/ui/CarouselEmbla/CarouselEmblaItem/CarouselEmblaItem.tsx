import Image from "next/image";
import LinkButton from "../../LinkButton/LinkButton";
import styles from "../carouselEmbla.module.scss";
import { getStrapiMedia } from "@/app/utils/helpers";

export interface CarouselEmblaItemProps {
  title: string;
  slug: string;
  image: any;
  category?: any;
  date?: Date;
}

const CarouselEmblaItem = ({
  title,
  image,
  category,
  date,
  slug,
}: CarouselEmblaItemProps) => {
  const [imageData] = image.data;
  const { url, alternativeText } = imageData.attributes;
  const imageUrl = getStrapiMedia(url);
  // console.log(imageUrl);

  console.log("category",category);
  
  
  const detailsLink = category ? `/${category}/${slug}` : `/${slug}`;

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
          <LinkButton
            variant="outlined"
            title="Докладніше"
            link={detailsLink}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselEmblaItem;
