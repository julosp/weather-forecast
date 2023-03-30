import "./App.css";
import UserInput from "./component/userInput";
import DataContext from "./DataContext";

function App() {
  return (
    <div className="App">
      <DataContext>
        <UserInput />
      </DataContext>
    </div>
  );
}

export default App;
