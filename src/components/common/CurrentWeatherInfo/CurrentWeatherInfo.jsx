import s from "./CurrentWeatherInfo.module.scss";
import { Temp, Humidity, Precipitation, Wind } from "../../../Imports";

const CurrentWeatherInfo = (props) => {

  const infoRows = [
    {
      icon: <Temp />,
      name: "Temperature",
      text: `${props.temp}° - feels like ${props.feelslike}°`,
    },
    {
      icon: <Humidity />,
      name: "Humidity",
      text: `${props.humidity}% - the dew point is ...`,
    },
    {
      icon: <Precipitation />,
      name: "Precipitation",
      text: `${props.precip}`,
    },
    {
      icon: <Wind />,
      name: "wind",
      text: `${props.wind} kilometers per hour`,
    },
  ];

  return (
    <div className={s.current_weather_info}>
      <div className={s.info_rows}>
        {infoRows.map((row) => {
          return (
            <div className={s.info_content}>
              <div className={s.icon_bkg}>{row.icon}</div>
              <p>{row.name}</p>
              <p>{row.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;
