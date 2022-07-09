import s from "./Header.module.scss";
import { Logo, Theme } from "../../../Imports";
import { useState } from "react";

const Header = (props) => {
  const [theme, setTheme] = useState("light");

  const  changeTheme = () =>  {
    setTheme(theme === "dark" ? "light" : "dark");
    const root = document.querySelector(":root");
    const components = [
      "body-bg",
      "block-bg",
      "card-bg",
      "text-color",
      "shadow-color",
    ];
    components.forEach((e) => {
      root.style.setProperty(`--${e}-default`, `var(--${e}-${theme})`);
    });
  }
  return (
    <div className={s.header}>
      <div className={s.header_part}>
        <Logo />
        <h1 className={s.header_part_right}>react weather</h1>
      </div>
      <div className={s.header_part}>
        <button className={s.theme_btn} onClick={changeTheme}>
          <Theme />
        </button>
        <form
          className={s.header_part_right}
          action=""
          onSubmit={props.handleSubmit}
        >
          <input type="text" onChange={props.onChange} />
        </form>
      </div>
    </div>
  );
};

export default Header;
