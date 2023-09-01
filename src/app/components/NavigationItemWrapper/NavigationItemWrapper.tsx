"use client";
import { getIsActivePathState, splitUrl } from "@/app/utils/helpers";
import { INavigationItemWrapperProps } from "@/app/utils/types";
import { usePathname } from "next/navigation";

const NavigationItemWrapper = ({
  title,
  link,
  nestedItems,
  Component,
  // currentPath,
}: INavigationItemWrapperProps) => {
	const path = usePathname();
	console.log("path", path);
	
	
  const { noLocalizedPath } = splitUrl(path);
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
