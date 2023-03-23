import { useState, useEffect, useRef } from "react";
import axios from "axios";

function UserInput() {
  const googleKey = process.env.REACT_APP_GOOGLE_API;
  const [userInput, setUserInput] = useState("");

  const googleApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${googleKey}`;
  const [data, setData] = useState({});
  useEffect(() => {
    if (userInput.length > 1) {
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
      <input type="text" onChange={} value={userInput} />
    </div>
  );
}

export default UserInput;
