import { createContext, useContext, useState } from "react";

const Context  = createContext();

const initialState = {
  weather: {},
};

const DataContext = ({ children }) => {
  const [weather, setWeather] = useState(initialState);

  return (
    <Context.Provider value={[weather, setWeather]}>
      {children}
    </Context.Provider>
  );
};

export default DataContext ;
export const useStateContext = () => useContext(Context );
