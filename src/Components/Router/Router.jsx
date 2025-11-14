import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Allproperties from "../Allproperties/Allproperties";
import DisplayBanner from "./Banner/DisplayBanner/DisplayBanner";

const router =createBrowserRouter([

{
    path :"/",
    element : <Home></Home>,
    children : [
        {path:"/allProperties",
            loader: () => fetch('http://localhost:3000/allProperties'),
            
            element:<Allproperties></Allproperties>
        },
        {path:"/",
            loader: () => fetch('http://localhost:3000/allProperties'),
        element:<Banner></Banner>
        },
    ]
},



])
export default router