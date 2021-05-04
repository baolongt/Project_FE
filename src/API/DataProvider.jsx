import React, { useState, useContext, useEffect } from "react";
import API from "./HTTP";

const DataContext = React.createContext();

// hooks
export function useDataContext() {
  return useContext(DataContext);
}

export default function DataProvider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      API.get("/app-ids/578080").then((res) => {
        console.log(res.data);
        setData(res.data);
        console.log(res.data);
        setIsLoading(false);
      });
    }
    fetchData();
  }, [data]);
  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}
