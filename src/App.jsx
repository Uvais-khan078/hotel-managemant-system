import "./App.css";
import Restrauntdetails from "./components/Restrauntdetails";
import Menu from "./components/Menu";
import Cart from "./components/cart";
import Orderdetails from "./components/orderdetails";
import Mealplaning from "./components/mealplaning";
import Recipe from "./components/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dinein from "./components/Dinein";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} /> 
        <Route path="/restaurantname" element={<Restrauntdetails />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart"element={<Cart/>} />
        <Route path="/ordertrack" element={<Orderdetails />} />
        <Route path="/Mealplanning" element={<Mealplaning/>}/>
        <Route path="/recipe" element={<Recipe/>}/>
        <Route path="/dinein" element={<Dinein/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
