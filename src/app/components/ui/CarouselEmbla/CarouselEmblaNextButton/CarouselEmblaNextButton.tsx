
import { TCarouselButtonsProps } from "@/types";
import { RiArrowRightSLine } from "react-icons/ri";


const CarouselEmblaNextButton = ({children, ...restProps}: TCarouselButtonsProps) => {

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <RiArrowRightSLine/>
      {children}
    </button>
  );
};
export default CarouselEmblaNextButton;	