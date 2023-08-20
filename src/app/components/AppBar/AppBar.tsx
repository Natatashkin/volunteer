import LangToggler from "@Components/LangToggler/LangToggler";

export interface IAppBar {
  langs: string[];
}

const AppBar = ({ langs }: IAppBar) => {
  return (
    <header>
      <LangToggler items={langs} />
    </header>
  );
};

export default AppBar;
