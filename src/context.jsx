import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const AppContext = React.createContext();
const URL = "https://fakestoreapi.com/products";

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setData(data);
    } catch (e) {
      console.log(e.response);
    }
  };
  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <AppContext.Provider value={{ data, fetchData, setData }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
