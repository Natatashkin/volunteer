import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import { TUseDotButtonProps, TSnaps } from "@/types";

const useCarouselDotButton = (
  emblaApi: EmblaCarouselType | undefined
): TUseDotButtonProps => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const scrollSnaps = snaps.map((_, index) => ({
    isActive: index === selectedIndex,
    id: index,
  }));

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export default useCarouselDotButton;
