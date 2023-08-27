import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import IconButton from "../IconButton/IconButton";
import { IBurgerButtonProps } from "@/types";

const BurgerButton = ({ open, toggleOpen }: IBurgerButtonProps) => {
  return (
    <IconButton onClick={toggleOpen}>
      {open ? <VscChromeClose size={20} /> : <SlMenu size={20} />}
    </IconButton>
  );
};

export default BurgerButton;
