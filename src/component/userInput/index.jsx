import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStateContext } from "../../DataContext";

const UserInput = () => {
  const [weather, setWeather] = useStateContext();
  const googleKey = process.env.REACT_APP_GOOGLE_API;
  const [userInput, setUserInput] = useState("");
  const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${googleKey}`;
  const [data, setData] = useState({});

  useEffect(() => {
    if (userInput.length > 0) {
      getDataWithAxios();
    }
  }, [userInput]);

  const getDataWithAxios = async () => {
    try {
      const response = await axios.get(googleApi);
      setData(response.data);
      const location = response.data.results[0].geometry.location;
      const weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m`;
      const weatherResponse = await axios.get(weatherApi);
      setWeather(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };


  return (
    <div>
      <input type="text" onChange={handleInput} value={userInput} />
    </div>
  );
};

export default UserInput;
