import s from "./Cards.module.scss";
import SunSmall from "../../../assets/SVGs/weatherIcons/SunSmall.jsx";
import { useState } from "react";
const Cards = (props) => {
  const WEATHER_API = props.weather_api;
  const [active, setActive] = useState(false);

  const changeStatusBtn = () => {
    setActive(!active);
  };

  const styles = {
    backgroundColor: active ? "#4793FF" : "#FFFFFF",
    color: active ? "#FFFFFF": '#000000',
  };

  const Card = (props) => {
    return (
      <div className={s.Card}>
        <h3>{props.day}</h3>
        <p>{props.date}</p>
        {props.svg}
        <p className={s.CardTempHi}>{props.tempHi}</p>
        <p className={s.CardTempLo}>{props.tempLo}</p>
        <p className={s.CardSum}>{props.sum}</p>
      </div>
    );
  };

  const makeCards = () => {
    const cards = [];
    let key = 0
    for (const day of WEATHER_API["forecast"].forecastday) {
      cards.push(
        <Card
          key={key}
          day={day.date}
          date={day.date}
          svg={<SunSmall />}
          tempHi={day.day.maxtemp_c}
          tempLo={day.day.mintemp_c}
          sum={day.day.condition.text}
        />
      );
      key++;
    }
    return cards;
  };

  return (
    <div className={s.Cards}>
      <div className={s.cardsBtns}>
        <div className={s.cardsBtns_left}>
          <button>Week</button>
          <button>Month</button>
          <button style={styles} onClick={changeStatusBtn}>10 days</button>
        </div>
        <div className={s.cardsBtns_right}>
          <button>Cancel</button>
        </div>
      </div>
      {active && (
        <div className={s.CardsWeather}>
          {makeCards().map((e) => e)}
          {makeCards().map((e) => e)}
          {makeCards().map((e) => e)}
        </div>
      )}
    </div>
  );
};

export default Cards;
