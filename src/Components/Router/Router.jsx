import { createBrowserRouter } from "react-router";
import Home from "./Home/Home";
import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Allproperties from "../Allproperties/Allproperties";
import DisplayBanner from "./Banner/DisplayBanner/DisplayBanner";
import AuthLayout from "../../Auth/AuthLayout";
import Register from "../../Auth/Register";
import AddProperty from "../../AddProperty";
import PrivateRoute from "./PrivateRoute";
import Login from "../../Auth/Login";

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

        {
            path:"/addProperties",
            element :
            <PrivateRoute>

                <AddProperty></AddProperty>
            </PrivateRoute>,
            
        },
        {
            element :<AuthLayout></AuthLayout>,
            children :[
                {
                    path :"/register",
                    element: <Register></Register>
                },
                {
                    path:"/login",
                    element :<Login></Login>

                }




            ]
        }
    ]
},



])
export default router