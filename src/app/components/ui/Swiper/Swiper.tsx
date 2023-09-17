//@ts-ignore
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { SwiperProps, SwiperSlideProps } from "swiper/react";
import { SwiperRef } from "@/swiper";

const Swiper = ({ children, ...rest }: SwiperProps) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest,
    };

    if (swiperRef.current) {
      // Assign it to swiper element
      Object.assign(swiperRef.current, params);
      // initialize swiper
      swiperRef.current.initialize();
    }
  }, []);

  return (
    <div>
      <swiper-container ref={swiperRef} slides-per-view={3}>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
      <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
        Previous
      </button>
      <button onClick={() => swiperRef.current?.swiper.slideNext()}>
        Next
      </button>
    </div>
  );
};

export default Swiper;
