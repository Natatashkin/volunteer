"use client";
import React from "react";
import CarouselEmbla from "../CarouselEmbla/CarouselEmbla";
import Image from "next/image";
import { ICarouselProps } from "@/types";

import styles from "./carousel.module.scss";

import Container from "../../Container/Container";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

const Carousel = ({ title, description, relatedItems }: ICarouselProps) => {
  // console.log(relatedItems);

  return (
    <Container>
      <section>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <CarouselEmbla items={relatedItems.data} options={OPTIONS} />
      </section>
    </Container>
  );
};

export default Carousel;
