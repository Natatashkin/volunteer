import LangToggler from "../LangToggler/LangToggler";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import styles from "./appBar.module.scss";
export interface IAppBar {
  locale: string;
  items: any;
}

const AppBar = ({ locale, items }: IAppBar) => {
  return (
    <header className={styles.appHeader}>
      <Logo />
      <div>
        <button>Стань мецентатом!</button>
      </div>

      <Navigation items={items} />
      <LangToggler currentLocale={locale} />
    </header>
  );
};

export default AppBar;
