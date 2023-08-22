import LangToggler from "@Components/LangToggler/LangToggler";

export interface IAppBar {
  locale: string;
}

const AppBar = ({ locale }: IAppBar) => {
  return (
    <header>
      <LangToggler currentLocale={locale} />
    </header>
  );
};

export default AppBar;
