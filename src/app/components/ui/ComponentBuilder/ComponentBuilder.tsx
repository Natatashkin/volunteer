import React from "react";
import Hero from "../Hero/Hero";

const createComponent = (component: string) => {
  switch (component) {
    case "elements.hero":
      return Hero;
  }
};

const ComponentBuilder = () => {
  return <div>ComponentBuilder</div>;
};

export default ComponentBuilder;
