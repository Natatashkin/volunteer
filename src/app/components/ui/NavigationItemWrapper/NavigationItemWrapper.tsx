"use client";
import { generateLink, getIsActivePathState, splitUrl } from "@/app/utils/helpers";
import { INavigationItemWrapperProps } from "@/types";
import { usePathname } from "next/navigation";

const NavigationItemWrapper = ({
  title,
  link,
  nestedItems,
  Component,
}: INavigationItemWrapperProps) => {
  const path = usePathname();
  const { noLocalizedPath } = splitUrl(path);
  // const hasNestedItems = Boolean(nestedItems?.length);  
  
  const isActive = getIsActivePathState({
    itemLink: link,
    urlPath: noLocalizedPath,
  });
  
  return (
    <Component
      link={link}
      title={title}
      nestedItems={nestedItems}
      isActive={isActive}
    />
  );
};

export default NavigationItemWrapper;
