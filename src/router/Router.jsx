import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/SignUp";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../component/Dashboard/AdminDashboard/AdminDashboard";
import ManageUsers from "../component/Dashboard/UsersManage/ManageUsers";
import ApprovedPremium from "../component/Dashboard/ApprovedPremium/ApprovedPremium";
import ApprovedContactRequest from "../component/Dashboard/ApprovedContactRequest/ApprovedContactRequest";
import EditBiodata from "../component/Dashboard/EditBiodata/EditBiodata";
import ViewBiodata from "../component/Dashboard/ViewBiodata/ViewBiodata";
import MyContactRequest from "../component/Dashboard/MyContactRequest/MyContactRequest";
import FavouritesBiodata from "../component/Dashboard/FavouritesBiodata/FavouritesBiodata";
import BioDatas from "../component/BioDatas/BioDatas";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/aboutUs",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
              path:"/biodatas",
              element:<BioDatas/>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "adminDashboard",
                element: <AdminDashboard />
            },
            {
                path: "manageUsers",
                element: <ManageUsers />
            },
            {
                path: "approvedPremium",
                element: <ApprovedPremium />
            },
            {
                path: "approvedContactRequest",
                element: <ApprovedContactRequest />
            },
            //user normal 
            {
                path: "editBiodata",
                element:<EditBiodata/>
            },
            {
                path:"viewBiodata",
                element:<ViewBiodata/>
            },
            {
                path:"myContactRequest",
                element:<MyContactRequest/>
            },
            {
                path:"favouritesBiodata",
                element:<FavouritesBiodata/>
            }
        ]
    }
])

export default Router;