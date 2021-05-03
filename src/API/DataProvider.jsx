import React from "react";
import API from "./HTTP";

const data = API.get("/app-ids/578080").then((res) => {
  return res.data;
});
const DataContext = React.createContext();

export default function DataProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
