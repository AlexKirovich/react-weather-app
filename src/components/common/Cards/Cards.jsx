import s from "./Cards.module.scss";
import { useState } from "react";
import { nanoid } from "nanoid";
import { forecast } from "./forecast/forecast";
import Card from "./forecast/Card/Card";

const Cards = () => {
  const [status7Days, setStatus7Days] = useState(true);

  const cards = forecast.map((day) => {
    return (
      <Card
        key={day.day}
        day={day.day}
        date={day.day_info}
        svg={day.icon_id}
        tempHi={day.temp_day}
        tempLo={day.temp_night}
        sum={day.info}
      />
    );
  });

  const Button = (props) => {
    const styles = {
      backgroundColor: props.isClicked ? "#4793FF" : '',
      color: props.isClicked ? "#FFFFFF" : '',
    };

    return (
      <button
        style={styles}
        key={props.id}
        id={props.id}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    );
  };

  const buttonsInfo = [
    {
      text: "7 days",
      isClicked: status7Days,
      id: nanoid(),
      click: () => setStatus7Days(!status7Days),
    },
    {
      text: "10 days",
      isClicked: false,
      id: nanoid(),
      click: () => {alert('no info')},
    },
    {
      text: "month",
      isClicked: false,
      id: nanoid(),
      click: () => {alert('no info')},
    },
  ];

  const buttons = buttonsInfo.map((e) => {
    return (
      <Button
        onClick={e.click}
        key={e.id}
        id={e.id}
        isClicked={e.isClicked}
        value={e.text}
      />
    );
  });

  return (
    <div className={s.cards}>
      <div className={s.cards_btns}>
        <div className={s.cards_btns_left}>{buttons}</div>
        <div className={s.cards_btns_right}>
          <button onClick={() => setStatus7Days(false)}>Cancel</button>
        </div>
      </div>
      {status7Days && <div className={s.cards_weather}>{cards}</div>}
    </div>
  );
};

export default Cards;
