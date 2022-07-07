import s from "./Header.module.scss";
import { Logo, Theme } from "../../../Imports";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header_part}>
        <Logo />
        <h1 className={s.header_part_right}>react weather</h1>
      </div>
      <div className={s.header_part}>
        <Theme />
        <form className={s.header_part_right} action="" onSubmit={props.handleSubmit}>
          <input type="text" onChange={props.onChange}/>
        </form>
      </div>
    </div>
  );
};

export default Header;
