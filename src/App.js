import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  const tgbot = window.Telegram.WebApp;

  useEffect(() => {
    tgbot.expand();
  }, [tgbot]);

  tgbot.MainButton.textColor = "#fff";
  tgbot.MainButton.color = "#2cab37";

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
