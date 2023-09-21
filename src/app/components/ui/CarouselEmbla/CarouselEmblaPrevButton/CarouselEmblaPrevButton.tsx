
import { TCarouselButtonsProps } from "@/types";
import { RiArrowLeftSLine } from "react-icons/ri";


const CarouselEmblaPrevButton = ({children, ...restProps}: TCarouselButtonsProps) => {

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
        <RiArrowLeftSLine size={40} />
      {children}
    </button>
  );
};
export default CarouselEmblaPrevButton