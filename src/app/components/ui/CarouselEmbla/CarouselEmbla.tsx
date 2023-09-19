import React, { ReactNode, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import styles from "./carouselEmbla.module.scss";
import { flushSync } from "react-dom";
import { getStrapiMedia } from "@/app/utils/helpers";

type PropType = {
  options?: EmblaOptionsType;
  items: any;
};

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

export const CarouselEmbla = (props: PropType) => {
  const { items, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [tweenValues, setTweenValues] = useState<number[]>([])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {items.map((item, index) => {
            const {id, attributes} = item;
            const {title, progect_category, date, image} = attributes;
            const [imageData] = image.data;
            const {id:imgId, attributes:imgAttr} = imageData;
            const {alternativeText, url} = imgAttr
           
            const imageSrc = getStrapiMedia(url)  
            
            return(
              <div
             className={styles.embla__slide}
             key={`${title}-${imgId}`}
             style={{
               ...(tweenValues.length && { opacity: tweenValues[index] })
             }}
           >
             
            <div>
              <h4 className={styles.embla__slide__title}>{title}</h4>
            </div>
              <Image className={styles.embla__slide__img }src={imageSrc} fill alt={alternativeText}/>
            </div>
            )
          })}
        </div>
      </div>
      
    </div>
  );
};
export default CarouselEmbla;
