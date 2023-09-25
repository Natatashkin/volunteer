import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ICarouselEmblaProps } from "@/types";
import useCarouselDotButton from "@/app/lib/hooks/useCarouselDotButton";
// import CarouselEmblaPrevButton from "./CarouselEmblaPrevButton/CarouselEmblaPrevButton";
// import CarouselEmblaNextButton from "./CarouselEmblaNextButton/CarouselEmblaNextButton";
// import usePrevNextButtons from "@/app/lib/hooks/useCarouselNavigationButtons";
import CarouselEmblaItem from "./CarouselEmblaItem/CarouselEmblaItem";
import CarouselDotButton from "./CarouselDot/CarouselDotButton";

import styles from "./carouselEmbla.module.scss";
import classNames from "classnames";

const CarouselEmbla = ({ items, options }: ICarouselEmblaProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useCarouselDotButton(emblaApi)
  // console.log(items);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={classNames(styles.embla__dot, {[styles.embla__dot__selected]: index === selectedIndex}) }
          />
        ))}
      </div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map(({ id, attributes }) => {
            const { title, description, image, progect_category, date } =
              attributes;

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
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default CarouselEmbla;
