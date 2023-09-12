import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  // const { tgbot, onToggleButton } = useTelegram();
  const tgbot = window.Telegram.WebApp;

  useEffect(() => {
    tgbot.expand();
    tgbot.ready();
  }, [tgbot]);

  const onToggleButton = () => {
    if (tgbot.MainButton.isVisible) {
      tgbot.MainButton.hide();
    } else {
      tgbot.MainButton.show();
    }
  };

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
