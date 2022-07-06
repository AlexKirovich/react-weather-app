import s from "./Header.module.scss";
import Logo from "../../../assets/SVGs/Logo.jsx";
import Theme from "../../../assets/SVGs/Theme.jsx";

const Header = (props) => {

  return (
    <div className={s.header}>
      <div className={s.header_side}>
        <Logo />
        <h1 className={s.header_side_right}>react weather</h1>
      </div>
      <div className={s.header_side}>
        <Theme />
        <form className={s.header_side_right} action="" onSubmit={props.handleSubmit}>
          <input type="text" onChange={props.onChange}/>
        </form>
      </div>
    </div>
  );
};

export default Header;
