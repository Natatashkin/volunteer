import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ICarouselEmblaProps } from "@/types";
import usePrevNextButtons from "@/app/lib/hooks/useCarouselNavigationButtons";
import CarouselEmblaPrevButton from "./CarouselEmblaPrevButton/CarouselEmblaPrevButton";
import CarouselEmblaNextButton from "./CarouselEmblaNextButton/CarouselEmblaNextButton";


const CarouselEmbla = ({ items, options }: ICarouselEmblaProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {items.map(({id, attributes}) => {
            const {title, description, image, progect_category, date} = attributes;

            const itemKey = `${title}-${id}`
            return (
              <div className="embla__slide" key={itemKey}>
                <Image
                  className="embla__slide__img"
                  src=""
                  alt="Your alt text"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="embla__buttons">
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
