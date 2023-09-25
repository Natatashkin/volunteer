import { TCarouselButtonsProps } from "@/types";
import styles from "../carouselEmbla.module.scss";
import classNames from "classnames";

const CarouselDotButtons = (props: TCarouselButtonsProps) => {
  const {
    children,
    scrollSnaps,
    onButtonClick,
    selectedIndex,
    ...restProps
  } = props;

  return scrollSnaps.map(({ id, isActive }) => {
    return (
      <button
        key={id}
        type="button"
        onClick={() => onButtonClick(id)}
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
