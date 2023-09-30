"use client";
import { EmblaOptionsType } from "embla-carousel-react";
import { ICarouselProps } from "@/types";
import CarouselEmbla from "../ui/CarouselEmbla/CarouselEmbla";
import Container from "../Container/Container";
import Section from "../Section/Section";

import styles from "./carousel.module.scss";

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

const Carousel = ({ title, description, relatedItems }: ICarouselProps) => {
  const carouselItems = relatedItems.data;

  return (
    <Container>
      <Section title={title} description={description}>
        <CarouselEmbla items={carouselItems} options={OPTIONS} />
      </Section>
    </Container>
  );
};

export default Carousel;
