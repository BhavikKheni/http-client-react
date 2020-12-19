import React, { useEffect } from "react";
import { search, add, get } from "./services/Auth.service";
import "./App.css";

function App() {
  function onAdd() {
    const data = {};
    add("/profile", data)
      .then((res) => {})
      .catch((err) => console.log(err));
  }
  function onSearch() {
    const data = {};
    search("/profile", data)
      .then((res) => {})
      .catch((err) => console.log(err));
  }
  function onGet() {
    const data = {};
    get("/profile", data)
      .then((res) => {})
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    onAdd();
    onSearch();
    onGet();
  }, []);

  return <div className="App"><span>Http Example</span></div>;
}

export default App;
