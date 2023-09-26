import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ICarouselEmblaProps } from "@/types";
import useCarouselDotButton from "@/app/lib/hooks/useCarouselDotButton";
import CarouselEmblaItem from "./CarouselEmblaItem/CarouselEmblaItem";
import CarouselDotButtons from "./CarouselDot/CarouselDotButtons";

import styles from "./carouselEmbla.module.scss";
import { generateKey } from "@/app/utils/helpers";

const CarouselEmbla = ({ items, options }: ICarouselEmblaProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselDotButton(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map(({ id, attributes }) => {
            console.log(attributes);
            
            const { title, image, category, date, slug } = attributes;
            const itemKey = generateKey(id, title);
            return (
              <CarouselEmblaItem
                key={itemKey}
                title={title}
                image={image}
                category={category?.data?.attributes?.slug}
                date={date}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.embla__dots}>
        <CarouselDotButtons
          scrollSnaps={scrollSnaps}
          onButtonClick={onDotButtonClick}
          selectedIndex={selectedIndex}
        />
      </div>
    </div>
  );
};

export default CarouselEmbla;
