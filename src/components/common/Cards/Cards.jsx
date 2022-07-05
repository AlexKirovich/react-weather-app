import s from "./Cards.module.scss";
import SunSmall from "../../../assets/SVGs/weatherIcons/SunSmall.jsx";

const Cards = () => {
  const makeCard = (day, date, Svg, tempHi, tempLo, sum) => {
    return (
      <div className={s.Card}>
        <h3>{day}</h3>
        <p>{date}</p>
        <Svg />
        <p className={s.CardTempHi}>{tempHi}</p>
        <p className={s.CardTempLo}>{tempLo}</p>
        <p className={s.CardSum}>{sum}</p>
      </div>
    );
  };

  return (
    <div className={s.Cards}>
      <div className={s.cardsBtns}>
        <div className={s.cardsBtns_left}>
          <button>Week</button>
          <button>Month</button>
          <button>10 days</button>
        </div>
        <div className={s.cardsBtns_right}>
          <button>Cancel</button>
        </div>
      </div>
      <div className={s.CardsWeather}>
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
        {makeCard("Today", "28 Aug", SunSmall, "+18°", "+10°", "Cloudy")}
      </div>
    </div>
  );
};

export default Cards;
