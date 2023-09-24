import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ICarouselEmblaProps } from "@/types";
import usePrevNextButtons from "@/app/lib/hooks/useCarouselNavigationButtons";
import CarouselEmblaPrevButton from "./CarouselEmblaPrevButton/CarouselEmblaPrevButton";
import CarouselEmblaNextButton from "./CarouselEmblaNextButton/CarouselEmblaNextButton";
// import { getStrapiMedia } from "@/app/utils/helpers";
import styles from "./carouselEmbla.module.scss";
// import Button from "../Button/Button";
// import LinkButton from "../LinkButton/LinkButton";
import CarouselEmblaItem from "./CarouselEmblaItem/CarouselEmblaItem";

const CarouselEmbla = ({ items, options }: ICarouselEmblaProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // console.log(items);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map(({ id, attributes }) => {
            const { title, description, image, progect_category, date } =
              attributes;
            // const [imageData] = image.data;
            // const { url, alternativeText } = imageData.attributes;
            // const imageUrl = getStrapiMedia(url);

            const itemKey = `${title}-${id}`;
            return (
              <CarouselEmblaItem
                key={itemKey}
                title={title}
                description={description}
                image={image}
                progect_category={progect_category}
                date={date}
              />
              // <div className={styles.embla__slide} key={itemKey}>
              //   <Image
              //     className={styles.embla__slide__img}
              //     src={imageUrl}
              //     alt={alternativeText}
              //     fill
              //   />
              //   <div className={styles.embla__slide__info}>
              //     <h4>{title}</h4>
              //     <div className={styles.embla__slide__info__button}>
              //       <LinkButton
              //         variant="outlined"
              //         title="Докладніше"
              //         link="/projects"
              //       />
              //     </div>
              //   </div>
              // </div>
            );
          })}
        </div>
      </div>

      <div className={styles.embla__buttons}>
        <CarouselEmblaPrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <CarouselEmblaNextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};

export default CarouselEmbla;
