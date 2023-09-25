import { TCarouselButtonsProps } from "@/types";
import styles from "../carouselEmbla.module.scss";
import classNames from "classnames";

const CarouselDotButtons = (props: TCarouselButtonsProps) => {
  const { children, scrollSnaps, onButtonClick, selectedIndex, ...restProps } =
    props;
  return scrollSnaps.map((_, index) => {

    const isActive = index === selectedIndex;
    
    return (
      <button
        type="button"
        onClick={() => onButtonClick(index)}
        className={classNames(styles.embla__dot, {
          [styles.embla__dot__selected]: isActive,
        })}
        {...restProps}
      >
        {children}
      </button>
    );
  });
};

export default CarouselDotButtons;
