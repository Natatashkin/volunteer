"use client";
import React from "react";
import Image from "next/image";
import { ICarouselProps } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Keyboard,
  Scrollbar,
  Navigation,
} from "swiper/modules";

import "swiper/scss";
import "swiper/scss/effect-cube";
import "swiper/scss/effect-coverflow";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import styles from "./carousel.module.scss";

import { getStrapiMedia } from "@/app/utils/helpers";
import Container from "../../Container/Container";
import SwiperComponent from "../Swiper/Swiper";

const Carousel = ({ title, description, projects }: ICarouselProps) => {
  // console.log(projects.data);

  return (
    <Container>
      <section>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <SwiperComponent></SwiperComponent>
        {/* <Swiper
          effect={"coverflow"}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          keyboard={{
            enabled: true,
            pageUpDown: true,
          }}
          navigation={true}
          modules={[Pagination, Keyboard, Navigation, EffectCoverflow]}
          className={styles.swiper}
        >
          {projects.data.map((item) => {
            // console.log(item);
            const {
              id,
              attributes: { title, image },
            } = item;

            const [imageData] = image.data;
            console.log(imageData);

            const itemKey = `${title}-${id}`;
            const imageUrl = getStrapiMedia(imageData.attributes.url);
            // console.log(imageUrl);

            return (
              <SwiperSlide key={itemKey} className={styles.swiper_slide}>
                <h3>{title}</h3>
                <Image src={imageUrl} alt="" fill />
              </SwiperSlide>
            );
          })}
        </Swiper> */}
      </section>
    </Container>
  );
};

export default Carousel;
