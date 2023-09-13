import { splitUrl } from "@/app/utils/helpers";
import { TPagePath } from "@/types";
import { usePathname } from "next/navigation";


const usePagePath = () => {
  const path = usePathname();
  const { noLocalizedPath, locale }: TPagePath  = splitUrl(path);

  return {noLocalizedPath, locale};
};
export default usePagePath;
