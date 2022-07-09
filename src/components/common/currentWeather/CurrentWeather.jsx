import s from "./CurrentWeather.module.scss";
import { Sun } from "../../../Imports";

const CurrentWeather = (props) => {
  const TIME = props.time.split(" ")[1];
  const temp = Math.round(props.temp);
  return (
    <div className={s.current_weather}>
      <div className={s.temperature_block}>
        <div className={s.temperature}>
          <h2>{temp}°</h2>
          <p>Today</p>
        </div>
        <Sun />
      </div>
      <div className={s.time_date}>
        <p>{props.city}</p>
        <p>Time: {TIME}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
