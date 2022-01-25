import { useState } from "react";
import Shift from "./components/Shift";
import { ThemeProvider } from "styled-components";
import "./App.css";

const LightTheme = {
  background: "white"
};

const DarkTheme = {
  background: "#1A1A40"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeProvider  theme={themes[theme]}>
      <Shift theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
