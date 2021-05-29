import React from "react";
import "./App.css";
import DarkMode from "./components/darkMode";

function App() {
  return (
    <div className="App">
      <nav>
        <a href="/">Home</a>
        <a href="/">Projects</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <DarkMode />
      </nav>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;