import { BlockType } from "@/types";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";


const createComponent = ({
  __component,
  ...rest
}: BlockType) => {
 
  let Component;

  console.log("rest", rest);
  

  switch (__component) {
    case "elements.hero":
      Component = Hero;
      break;
      case "elements.features":
        Component = Features;
        break;
    default:
      break;
  }

  return Component ? <Component {...rest } /> : null;
};

const ComponentBuilder = ({ block }: any) => {
  let Component = createComponent(block);

  return <div>{Component}</div>;
};

export default ComponentBuilder;
