
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import ShopContextProvider from "./context/ShopContextProvider";
import CartPage from "./pages/CartPage";

function App() {
  // const [cartItems, setCartItems] = useState([]);

  // function handleAddToCart(item, quantity = 1) {
  //   let foundItemInCart = false;
  //   const { id } = item;

  //   const cart = cartItems.map((d) => {
  //     let newCount = d.count;

  //     if (d.id === id) {
  //       foundItemInCart = true;
  //       newCount = newCount + quantity;
  //     }

  //     return {
  //       ...d,
  //       count: newCount,
  //     };
  //   });

  //   if (!foundItemInCart && quantity > 0) {
  //     cart.push({ id, count: quantity });
  //   }

  //   const readyCart = cart.filter((d) => d.count > 0);

  //   setCartItems(readyCart);
  // }

  return (
    <div className=" flex flex-col justify-center items-center">
      <ShopContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Root cartItems={cartItems} />}> */}
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
            {/* <Route
              path="/product"
              element={
                <ItemPage />
              }
            /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  )

  
}

export default App;
