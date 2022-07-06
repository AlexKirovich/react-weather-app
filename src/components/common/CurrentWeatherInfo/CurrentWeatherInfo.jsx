import s from "./CurrentWeatherInfo.module.scss";
import Temp from "../../../assets/SVGs/Temp";
import Humidity from "../../../assets/SVGs/Humidity";
import Precipitation from "../../../assets/SVGs/Precipitation";
import Wind from "../../../assets/SVGs/Wind";


const CurrentWeatherInfo = (props) => {
  return (
    <div className={s.CurrentWeatherInfo}>
      <div className={s.infoRows}>
        <div className={s.infoContent}>
          <div className={s.iconBkg}>
            <Temp />
          </div>
          <p>Temperature</p>
          <p>20° - feels like 17°</p>
        </div>
        <div className={s.infoContent}>
          <div className={s.iconBkg}>
            <Humidity/>
          </div>
          <p>Humidity</p>
          <p>58% - the dew point is 14%</p>
        </div>
        <div className={s.infoContent}>
          <div className={s.iconBkg}>
            <Precipitation />
          </div>
          <p>Precipitation</p>
          <p>No precipitation</p>
        </div>
        <div className={s.infoContent}>
          <div className={s.iconBkg}>
            <Wind />
          </div>
          <p>Wind</p>
          <p>16 kilometers per hour</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
