import { BlockType } from "@/types";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Carousel from "../Carousel/Carousel";
import TextPaletteWithIcons from "../TextPaletteWithIcons/TextPaletteWithIcons";
import TextImageButtonCircleBlock from "../TextImageButtonCircleBlock/TextImageButtonCircleBlock";

const createComponent = ({ __component, ...rest }: BlockType) => {
  let Component;
  // console.log(rest);

  switch (__component) {
    case "elements.hero":
      Component = Hero;
      break;
    case "elements.text-palette-with-icons":
      Component = TextPaletteWithIcons;
      break;
    case "elements.text-block-with-image-button-and-circle":
      Component = TextImageButtonCircleBlock;
    case "elements.mission":
      break;
    case "elements.carousel-projects":
      Component = Carousel;
      break;
    case "elements.carousel-blog":
      Component = Carousel;
      break;
    default:
      break;
  }

  return Component ? <Component {...rest} /> : null;
};

const ComponentBuilder = ({ block }: any) => {
  let Component = createComponent(block);

  return <div>{Component}</div>;
};

export default ComponentBuilder;
