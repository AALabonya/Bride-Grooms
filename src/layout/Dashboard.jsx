import { NavLink, Outlet } from "react-router-dom";
import {FaEnvelope, FaHome, FaBookReader ,FaEdit, FaUsers } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { SiAboutdotme } from "react-icons/si";
import { ImUser } from "react-icons/im";
import { FcApproval } from "react-icons/fc";
import { CiSquareQuestion } from "react-icons/ci";
import { MdFavorite } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import { TbCirclesRelation } from "react-icons/tb";
import "./dashboard.css"
const Dashboard = () => {
    const isAdmin = false
    const { logOut} =useAuth()
    return (
        <div className="flex " >
            {/* dash board side bar  */}
            <div className="flex w-64 min-h-screen items-baseline font-bold text-lg" style={{ backgroundImage: `url('https://i.ibb.co/931NCW1/footer.jpg')`, backgroundSize: 'cover' }}>
                <ul className="menu p-4">
                   {
                    isAdmin ? 
                    <> 
                    <li className="flex justify-start items-center"><NavLink to="/dashboard/adminDashboard">
                    <div className="flex items-center gap-2 mb-5 mt-6">
                    <FaHome /> Admin Dashboard</div></NavLink></li>

                   <li><NavLink to="/dashboard/manageUsers">
                    <div className="flex items-center gap-2 mb-5"><FaUsers/>
                    Manage Users</div></NavLink></li>
                    <li><NavLink to="/dashboard/approvedPremium">
                   <div className="flex items-center gap-2 mb-5">
                   <ImUser/>
                    Approved Premium</div></NavLink></li>
                    
                    <li><NavLink to="/dashboard/approvedContactRequest">
                   <div className="flex items-center gap-2 mb-5">
                   <FcApproval className="bg-black"/>
                   Approved Contact Request</div></NavLink></li>
                   <li onClick={logOut}><NavLink to="/login ">
                   <div className="flex items-center gap-2 mb-5 "><CiLogout />
                   Logout</div></NavLink></li></>

                   :
                   
                   <> 
                   <li><NavLink to="/dashboard/editBiodata">
                    <div className="flex items-center gap-2 mb-5">
                    <FaEdit/>
                    Edit Biodata</div></NavLink>
                    </li>
                    <li><NavLink to="/dashboard/viewBiodata">
                  <div className="flex items-center gap-2 mb-5">
                  <FaBookReader/>
                   View Biodata</div></NavLink>
                    </li>
                    <li><NavLink to="/dashboard/myContactRequest">
                    <div className="flex items-center gap-2 mb-5">
                    <CiSquareQuestion/>
                    My Contact Request</div></NavLink></li>
                    
                    <li><NavLink to="/dashboard/favouritesBiodata">
                   <div className="flex items-center gap-2 mb-5">
                   <MdFavorite/>
                   Favourites Biodata</div> </NavLink></li>
                    <li><NavLink to="/dashboard/gotMarried">
                   <div className="flex items-center gap-2 mb-5">
                   <TbCirclesRelation />
                   Got Married</div> </NavLink></li>
                 

                   <li onClick={logOut}><NavLink to="/login">
                   <div className="flex items-center gap-2 mb-5">
                   <CiLogout/>
                   Logout</div></NavLink></li></>
                   }
                       {/* shared nav links  */}
                       <div className="border border-gray-700"></div>
                       <li><NavLink to="/">
                       <div className="flex items-center gap-2 mb-5 mt-10">
                       <FaHome />
                       Home</div></NavLink></li>
                       <li><NavLink to="/aboutUs">
                        <div className="flex items-center gap-2 mb-5 mt-10">
                        <SiAboutdotme />
                       About Us</div></NavLink></li>
                       <li><NavLink to="/contact">
                       <div className="flex items-center gap-2 mb-5 mt-10">
                       <FaEnvelope/>
                       Contact</div></NavLink></li>

                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;