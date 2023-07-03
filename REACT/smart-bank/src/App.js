import React, { useState } from "react";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/UI/themes";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { BtnTheme } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BtnTheme onClick={toggleTheme}>
        <ThemeSwitcher theme={theme} />
      </BtnTheme>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
