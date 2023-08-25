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
      <div className={styles.appHeader_content}>
        <Logo />
        <div>
          <button>Стань волонтером!</button>
        </div>

        <Navigation items={items} />
        <LangToggler currentLocale={locale} />
      </div>
    </header>
  );
};

export default AppBar;
