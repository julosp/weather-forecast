import { useState } from "react";
import "./App.css";
import UserInput from "./component/userInput";
import WeatherResp from "./component/weatherResp";
import { DataContext } from "./DataContext";

function App() {
  const [weather, setWeather] = useState([]);
  return (
    <div className="App">
      <DataContext.Provider value={(weather, setWeather)}>
        <UserInput />
        <WeatherResp />
      </DataContext.Provider>
    </div>
  );
}

export default App;
