import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
const App = () => {
 return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/signup" element={<Signup />} />
 <Route path="/login" element={<Login />} />
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/add-product" element={<AddProduct />} />
 <Route path="/edit-product/:id" element={<EditProduct />}/>
 </Routes>
 </BrowserRouter>
 );
};
export default App;