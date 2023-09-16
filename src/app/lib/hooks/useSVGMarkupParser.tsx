import { useState, useEffect } from "react";
import parse from "html-react-parser";

const useSVGMarkupParser = ({ iconHref }: { iconHref: string }) => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(iconHref)
      .then((res) => {
        console.log(res);

        return res.text();
      })
      .then((text) => {
        if (text.includes("html")) {
          console.log("file does not exist");
        } else {
          setSvg(text);
        }
      })
      .catch(() => "No icon");
  }, [iconHref]);

  const iconComponent = svg && parse(svg);

  return { iconComponent };
};

export default useSVGMarkupParser;
