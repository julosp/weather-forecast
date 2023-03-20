import logo from "./logo.svg";
import "./App.css";

function App() {
  let test = process.env.REACT_APP_GOOGLE_API;
  console.log(test);
  let deux = `https://maps.googleapis.com/maps/api/geocode/json?address=Toledo&key=${test}`;
  console.log(deux);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
