import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Cart from "./Pages/Cart/Cart";
import Succes from "./Pages/Succes/Succes";
// import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="succes" element={<Succes/>}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
