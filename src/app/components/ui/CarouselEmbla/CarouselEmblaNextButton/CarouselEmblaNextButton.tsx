
import { TCarouselButtonsProps } from "@/types";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../carouselEmbla.module.scss";



const CarouselEmblaNextButton = ({children, ...restProps}: TCarouselButtonsProps) => {

  return (
    <button
      className={styles.embla__button}
      type="button"
      {...restProps}
    >
      <IoIosArrowForward/>
      {children}
    </button>
  );
};
export default CarouselEmblaNextButton;	