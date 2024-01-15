
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import ShopContextProvider from "./context/ShopContextProvider";
import CartPage from "./pages/CartPage";
import ItemPage from './pages/ItemPage';
import { products } from "./data";
import Footer from "./components/Footer";

function App() {
  
  

  return (
    <div className=" flex flex-col items-center h-screen justify-between gap-8">
      <ShopContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route
              path="/"
              element={
                <Shop />
              }
            ></Route>
            <Route
              path="/cart"
              element={
                <CartPage />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ItemPage />
              }
            />
        </Routes>
        <Footer />
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  )

  
}

export default App;
