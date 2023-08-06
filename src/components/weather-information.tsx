interface IWeatherInformationProps {
  city: string;
  temperature: number;
  feelsLike: number;
  min: number;
  max: number;
  humidity: number;
  pressure: number;
}

export default function WeatherInformation({
  city,
  temperature,
  feelsLike,
  min,
  max,
  humidity,
  pressure,
}: IWeatherInformationProps) {
  return (
    <div>
      <h2>City: {city}</h2>
      <ul>
        <li>{temperature}</li>
        <li>
          Feels Like: {feelsLike}
          <p>
            min: {min}, max: {max}
          </p>
        </li>
        <li>Humidity: {humidity}</li>
        <li>Pressure: {pressure}</li>
      </ul>
    </div>
  );
}
