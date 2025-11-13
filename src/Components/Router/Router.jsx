import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import Banner from "./Banner/Banner";

const router =createBrowserRouter([

{
    path :"/",
    element : <Home></Home>
},


])
export default router