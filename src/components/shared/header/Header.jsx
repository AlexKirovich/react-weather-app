import s from "./Header.module.scss";
import Logo from "../../../assets/SVGs/Logo.jsx";
import Theme from "../../../assets/SVGs/Theme.jsx";
// import { useState } from "react";

const Header = () => {
  //   const [selectList, setSelectList] = useState([]);
  //   setSelectList(
  //     <option value="grapefruit">Grapefruit</option>,
  //     <option value="lime">Lime</option>,
  //     <option value="coconut">Coconut</option>,
  //     <option value="mango">Mango</option>
  //   );

  //   const fillSelectList = () => {
  //     setSelectList(
  //       selectList.push(<option value="grapefruit">Grapefruit</option>)
  //     );
  //   };
  //   fillSelectList();

  //   console.log(selectList);

  return (
    <div className={s.header}>
      <div className={s.header_side}>
        <Logo/>
        <h1 className={s.header_side_right}>react weather</h1>
      </div>
      <div className={s.header_side}>
        <Theme />
        <form className={s.header_side_right} action="">
          <select name="cities" id="cities" >
            <option value="grapefruit">Grapefruit</option>,
            <option value="lime">Lime</option>,
            <option value="coconut">Coconut</option>,
            <option value="mango">Mango</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Header;
