import "./App.scss";
import Header from "./components/shared/header/Header";
import CurrentWeather from "./components/common/currentWeather/CurrentWeather.jsx";
import CurrentWeatherInfo from "./components/common/CurrentWeatherInfo/CurrentWeatherInfo";
import Cards from "./components/common/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='weatherBlock'>
        <CurrentWeather />
        <CurrentWeatherInfo />
      </div>
      <Cards/>
    </div>
  );
}

export default App;
