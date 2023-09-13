import { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  const tgbot = window.Telegram.WebApp;

  useEffect(() => {
    tgbot.expand();
    tgbot.ready();
    tgbot.platform = "Clients";
  }, [tgbot]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route element={<Form />} path="form" />
      </Routes>
    </div>
  );
}

export default App;
