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
import BiodataDetailsPage from "../pages/BiodataDetailsPage/BiodataDetailsPage";
import CheckoutContact from "../pages/CheckoutContact/CheckoutContact";
import GotMarried from "../component/Dashboard/GotMarried/GotMarried";
import RouteStory from "../component/Dashboard/SuccessRouteStory/RouteStory";
import ErrorPage from "../pages/ErrorPage";
import AdminRoute from "./AdminRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement:<ErrorPage/>,
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
            },
            {
                path:"/detailsPage/:id",
                element:<PrivateRoute><BiodataDetailsPage/></PrivateRoute> 
            },
            {
                path:"/checkout/:id",
                element:<PrivateRoute><CheckoutContact/></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            //admin route 
            {
                path: "adminDashboard",
                element:<AdminRoute><AdminDashboard/></AdminRoute>
            },
            {
                path: "manageUsers",
                element:<AdminRoute><ManageUsers/></AdminRoute>
            },
            {
                path: "approvedPremium",
                element:<PrivateRoute><AdminRoute><ApprovedPremium /></AdminRoute></PrivateRoute> 
            },
            {
                path: "approvedContactRequest",
                element:<PrivateRoute><AdminRoute><ApprovedContactRequest/></AdminRoute></PrivateRoute>
            },
            {
                path:"successRouteStory",
                element:<PrivateRoute><AdminRoute><RouteStory/></AdminRoute></PrivateRoute>
            },
            //user normal 
            {
                path: "editBiodata",
                element:<PrivateRoute><EditBiodata/></PrivateRoute>
            },
            {
                path:"viewBiodata",
                element:<PrivateRoute><ViewBiodata/></PrivateRoute>
            },
            {
                path:"myContactRequest",
                element:<PrivateRoute><MyContactRequest/></PrivateRoute>
            },
            {
                path:"favouritesBiodata",
                element:<PrivateRoute><FavouritesBiodata/></PrivateRoute>
            },
            {
                path:"gotMarried",
                element:<PrivateRoute><GotMarried/></PrivateRoute>
            }
        ]
    }
])

export default Router;