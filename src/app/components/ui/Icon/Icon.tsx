"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

export type TIconProps = {
  url: string;
  className: string;
  setLoading: any;
};

const Icon = ({ url, className }: TIconProps) => {
  const [svg, setSvg] = useState("");
	
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        if (text.includes("html")) {
          console.log("file does not exist");
        } else {
          setSvg(text);
        }
      })
      .catch(console.log);
  }, [url]);

  const markup = svg && parse(svg);

  return <>{markup && <div className={className}>{markup}</div>}</>;
};

export default Icon;
