import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "../hooks/useTelegram";
import { Header } from "./components/Header/Header";

function App() {
  const { tgbot } = useTelegram();

  useEffect(() => {
    tgbot.expand();
    tgbot.ready();
  }, [tgbot]);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
