import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { DataContext } from "../../DataContext";

function UserInput() {
  const googleKey = process.env.REACT_APP_GOOGLE_API;
  const [userInput, setUserInput] = useState("");
  const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${googleKey}`;
  const [data, setData] = useState({});
  const { weather, setWeather } = useContext(DataContext);

  useEffect(() => {
    if (userInput.length > 0) {
      getDataWithAxios();
    }
  }, [userInput]);

  const getDataWithAxios = async () => {
    const response = await axios.get(googleApi);
    setData(response.data);
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
}

export default UserInput;
