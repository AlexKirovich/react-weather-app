import s from "./CurrentWeather.module.scss";
import Sun from "../../../assets/SVGs/Sun";

const CurrentWeather = (props) => {
  return (
    <div className={s.CurrentWeather}>
      <div className={s.temperature_part}>
        <div className={s.temperature}>
          <h2>{props.temp}</h2>
          <p>Today</p>
        </div>
        <Sun />
      </div>
      <div className={s.timeDate}>
        <p>{props.city}</p>
        <p>Time: {props.time.split(' ')[1]}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
