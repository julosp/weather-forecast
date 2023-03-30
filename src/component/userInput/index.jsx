import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useStateContext } from "../../DataContext";

const UserInput = () => {
  const [weather, setWeather] = useStateContext();
  const googleKey = process.env.REACT_APP_GOOGLE_API;
  const [userInput, setUserInput] = useState("");
  const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${googleKey}`;
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [weatherApi, setWeatherApi] = useState("");
  const [city, setCity] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  useEffect(() => {
    axios.get(googleApi).then((res) => {
      setData(res.data);
      setLocation(res.data.results[0].geometry.location);
      setCity(res.data.results[0].address_components[0].long_name);
      setWeatherApi(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m`
      );
    });
    axios.get(weatherApi).then((res) => {
      setWeather(res.data.hourly);
      setLoading(false);
    });
  }, [userInput]);

  const getDirectWeather = () => {
    const event = new Date();
    console.log(event.toISOString());
  };
  getDirectWeather();

  const weatherOutpout = "2023-03-30T07:00";
  console.log(weatherOutpout + "api");

  if (isLoading) {
    return (
      <div>
        <input type="text" onChange={handleInput} value={userInput} />
        <p>non</p>
      </div>
    );
  }

  return (
    <div>
      <input type="text" onChange={handleInput} value={userInput} />
      <p>{city}</p>
    </div>
  );
};
export default UserInput;
