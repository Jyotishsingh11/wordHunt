import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Header from "./components/Header/Header";
import ThemeSwitch from "./components/Switch/Switch";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [lightMode, setLightMode] = useState(false);

  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(apiUrl);
      setMeanings(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    dictionaryApi();
  }, [word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "black" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div style={{ position: "absolute", right: 15, padding: 10 }}>
          <span>{lightMode ? "Light" : "Dark"} Mode</span>
          <ThemeSwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header word={word} setWord={setWord} lightMode={lightMode} />
        {meanings && (
          <Definitions word={word} meanings={meanings} lightMode={lightMode} />
        )}
      </Container>
    </div>
  );
}

export default App;
