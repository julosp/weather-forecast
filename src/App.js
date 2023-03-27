import "./App.css";
import UserInput from "./component/userInput";
import DataContext from "./DataContext";
import { WeatherResp } from "./component/weatherResp";

function App() {
  return (
    <div className="App">
      <DataContext>
        <UserInput />
        <WeatherResp />
      </DataContext>
    </div>
  );
}

export default App;
