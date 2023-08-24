import LangToggler from "../LangToggler/LangToggler";
import Navigation from "../Navigation/Navigation";

export interface IAppBar {
  locale: string;
  items: any;
}

const AppBar = ({ locale, items }: IAppBar) => {
  return (
    <header role="menubar">
      <Navigation items={items} />
      <LangToggler currentLocale={locale} />
    </header>
  );
};

export default AppBar;
