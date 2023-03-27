import React from "react";
import { useStateContext } from "../../DataContext";

export const WeatherResp = () => {
  const [weather, setWeather] = useStateContext();
  console.log(weather);
  return <div>index</div>;
};
