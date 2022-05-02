import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/update/:id" element={<UpdateItem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
