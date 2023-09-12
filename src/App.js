import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  const tgbot = window.Telegram.WebApp;

  console.log(tgbot);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
