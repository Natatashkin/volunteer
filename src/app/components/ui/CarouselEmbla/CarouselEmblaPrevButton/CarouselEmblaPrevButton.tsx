
import { TCarouselButtonsProps } from "@/types";
import {IoIosArrowBack} from "react-icons/io"
import styles from '../carouselEmbla.module.scss';


const CarouselEmblaPrevButton = ({children, ...restProps}: TCarouselButtonsProps) => {

  return (
    <button
      className={styles.embla__button}
      type="button"
      {...restProps}
    >
        <IoIosArrowBack />
      {children}
    </button>
  );
};
export default CarouselEmblaPrevButton