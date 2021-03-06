import "./App.scss";
import Header from "./components/shared/header/Header";
import CurrentWeather from "./components/common/currentWeather/CurrentWeather.jsx";
import CurrentWeatherInfo from "./components/common/CurrentWeatherInfo/CurrentWeatherInfo";
import Cards from "./components/common/Cards/Cards";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=7ec8d62371de48d48be165112220507&q=${value}&days=5&aqi=no&alerts=no`
      )
        .then((data) => data.json())
        .then((result) => setCity(result))
        .then(() => console.log(city.forecast))
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <Header onChange={handleChange} handleSubmit={handleSubmit} />
      {city && (
        <>
          <div className="weatherBlock">
            <CurrentWeather
              city={city.location.name}
              temp={city.current.temp_c}
              time={city.location.localtime}
            />
            <CurrentWeatherInfo
              temp={city.current.temp_c}
              feelslike={city.current.feelslike_c}
              humidity={city.current.humidity}
              precip={city.current.precip_mm}
              wind={city.current.wind_kph}
            />
          </div>
          <Cards/>
        </>
      )}
    </div>
  );
}
export default App;
