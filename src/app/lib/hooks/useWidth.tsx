import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import variables from "../../styles/variables.module.scss";

const useWidth = () => {
  const [width, setWhidth] = useState(0);

  const handleClientWidth = () => {
    const innerWidth = window.innerWidth;
    setWhidth(innerWidth);
  };

  const throttledWidth = useDebouncedCallback(handleClientWidth, 300);
  const isLaptopWidth = width >= parseInt(variables.laptop);
  const widthIsDetect = Boolean(width);

  useEffect(() => {
    if (!width) {
      throttledWidth();
    }
    window.addEventListener("resize", throttledWidth);
    return () => window.removeEventListener("resize", throttledWidth);
  }, [throttledWidth, width]);

  return { isLaptopWidth, width, widthIsDetect };
};

export default useWidth;
