import { TCarouselButtonsProps } from "@/types"


const CarouselDotButton = (props: TCarouselButtonsProps) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

export default CarouselDotButton;