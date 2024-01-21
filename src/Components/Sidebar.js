import React from "react";
import { Link, useLocation } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

const SidebarItems = [
  { to: "/HomePage", icon: <GrHomeRounded size={22} className="text-black" /> },
  { to: "/invManagement", icon: <MdOutlineInventory2 size={22} className="text-black" /> },
  { to: "/Billing", icon: <RiBillLine size={22} className="text-black" /> },
  { to: "/Analysis", icon: <IoMdAnalytics size={22} className="text-black" /> },
  { to: "/Video", icon: <FaVideo size={22} className="text-black" /> },
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-white h-screen flex justify-center items-center w-11">
      <ul>
        {SidebarItems.map((item, index) => (
          <li key={index} className={`p-4 ${location.pathname === item.to ? 'bg-gray-200' : ''}`}>
            <Link to={item.to} > {item.icon} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
