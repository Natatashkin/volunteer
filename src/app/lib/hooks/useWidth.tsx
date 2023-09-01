import React, { useState, useEffect } from "react";
import variables from "../../styles/variables.module.scss";

const useWidth = () => {
  const [width, setWhidth] = useState(0);

  const handleClientWidth = () => {
    const innerWidth = window.innerWidth;
    setWhidth(innerWidth);
  };

  const isLaptopWidth = width >= parseInt(variables.laptop);
  const widthIsDetect = Boolean(width);

  useEffect(() => {
    if (!width) {
      handleClientWidth();
    }
    window.addEventListener("resize", handleClientWidth);
    return () => window.removeEventListener("resize", handleClientWidth);
  }, []);

  return { isLaptopWidth, width, widthIsDetect };
};

export default useWidth;
