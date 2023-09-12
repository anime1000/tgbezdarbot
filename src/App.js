import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "../hooks/useTelegram";
import { Header } from "./components/Header/Header";

function App() {
  const { tgbot, onToggleButton } = useTelegram();

  useEffect(() => {
    tgbot.expand();
    tgbot.ready();
  }, [tgbot]);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
