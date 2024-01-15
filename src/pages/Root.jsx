import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = ({cartItems}) => {
  return (
    <div className=" bg-gray-300 h-screen">
      <Header cartItems={cartItems} />
      <Outlet />
    </div>
  )
}

export default Root