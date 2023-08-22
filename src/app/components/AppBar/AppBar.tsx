import LangToggler from "@Components/LangToggler/LangToggler";

export interface IAppBar {
  langs: string[];
  currentLocale: string;
}

const AppBar = ({ langs, currentLocale }: IAppBar) => {
  return (
    <header>
      <LangToggler items={langs} currentLocale={currentLocale} />
    </header>
  );
};

export default AppBar;
