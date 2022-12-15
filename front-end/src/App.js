import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponet from "./components/PrivateComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponet/> } >
          <Route path="/" element={<h1>Products</h1>} />
          <Route path="/add" element={<h1>Add Product</h1>} />
          <Route path="/update" element={<h1>Update Product</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
