import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
             path:"/aboutUs",
             element:<About/>
            },
            {
              path:"/contact",
              element:<Contact/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signUp",
                element:<SignUp/>
            }
        ]
    },
    {
        path:"dashboard",
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                
            }
        ]
    }
])

export default Router;