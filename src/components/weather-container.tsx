import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import WeatherInput from "./weather-input";
import WeatherInformation from "./weather-information";

interface ICity {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  name: string;
}

function WeatherContainer() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState<ICity | null>(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  const onInputUpdate = (text: string) => {
    setInputValue(text);
  };

  // const onInputSubmit = () => {
  //   getWeatherDataByCity(inputValue);
  // };

  const getWeatherDataByCity = async (cityName: string) => {
    const { data } = await axios.get<ICity>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    setCity(data);
  };

  const debouncedSearch = useCallback(debounce(getWeatherDataByCity, 300), []);

  useEffect(() => {
    if (inputValue) {
      debouncedSearch(inputValue)
      // getWeatherDataByCity(inputValue);
    }
  }, [inputValue])


  return (
    <div>
      <h3>Reach Weather App</h3>
      <WeatherInput
        value={inputValue}
        onInputChange={onInputUpdate}
        // onSubmit={onInputSubmit}
      />
      {city && (
        <WeatherInformation
          city={city.name}
          temperature={city.main.temp}
          min={city.main.temp_min}
          max={city.main.temp_max}
          feelsLike={city.main.feels_like}
          humidity={city.main.humidity}
          pressure={city.main.pressure}
        />
      )}
    </div>
  );
}

export default WeatherContainer;
