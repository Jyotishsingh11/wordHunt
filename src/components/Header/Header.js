import { TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import "./Header.css";
const Header = ({ word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });
  return (
    <div className="header">
      <div className="title">Word Hunt</div>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="search for meaning"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
