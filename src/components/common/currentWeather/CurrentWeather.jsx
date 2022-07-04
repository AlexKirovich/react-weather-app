import s from "./CurrentWeather.module.scss";
import Sun from "../../../assets/SVGs/Sun";

const CurrentWeather = () => {
  return (
    <div className={s.CurrentWeather}>
      <div className={s.temperature_part}>
        <div className={s.temperature}>
          <h2>20°</h2>
          <p>Today</p>
        </div>
        <Sun />
      </div>
      <div className={s.timeDate}>
        <p>City: Kyiv</p>
        <p>Time: 21:53</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
