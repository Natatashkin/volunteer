"use client";
import React from "react";
import Image from "next/image";
import { ICarouselProps } from "@/types";

import styles from "./carousel.module.scss";

import { getStrapiMedia } from "@/app/utils/helpers";
import Container from "../../Container/Container";


const Carousel = ({ title, description, projects }: ICarouselProps) => {
  // console.log(projects.data);

  return (
    <Container>
      <section>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        
        
  
      </section>
    </Container>
  );
};

export default Carousel;

