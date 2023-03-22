import { useState, useEffect } from "react";
import axios from "axios";

function UserInput() {
  const googleKey = process.env.REACT_APP_GOOGLE_API;
  const [userInput, setUserInput] = useState("");


  
  useEffect(() => {
    if (userInput.length > 1){
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=${googleKey}`
      )
      .then((resp) => {
        console.log(resp.data.results);
      });}
  }, [userInput]);

  const handleInput = (e) => {
    e.preventDefault()
    setUserInput(e.target.value);
    console.log(userInput);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={userInput} />
    </div>
  );
}

export default UserInput;
