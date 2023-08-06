interface IWeatherInputProps {
  value: string;
  onInputChange: (text: string) => void;
  // onSubmit: () => void;
}

export default function WeatherInput({
  value,
  onInputChange,
  // onSubmit,
}: IWeatherInputProps) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {/* <button onClick={onSubmit}>Get Data</button> */}
    </>
  );
}
