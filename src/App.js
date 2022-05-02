import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AddProduct from "./Pages/AddProduct/AddProduct";
import FourZeroFour from "./Pages/FourZeroFour/FourZeroFour";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Login from "./Pages/Login/Login";
import MyItems from "./Pages/MyItems/MyItems";
import Register from "./Pages/Register/Register";
import UpdateItem from "./Pages/UpdateItem/UpdateItem";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateItem />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myitems" element={<MyItems />} />
        <Route path="*" element={<FourZeroFour />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
