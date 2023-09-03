import { splitUrl } from "@/app/utils/helpers";
import { usePathname } from "next/navigation";

const useLanguage = () => {
  const path = usePathname();
  const { locale } = splitUrl(path);

  return { locale };
};

export default useLanguage;
