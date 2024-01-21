import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineInventory2 } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    to: "/HomePage",
    icon: (
      <div className="hover:bg-gray-300 p-1 border-2 border-blue-200 rounded-md cursor-pointer">
      <GrHomeRounded
        color="white"
        title="Home"
        style={{ width: "22px", height: "100%", color: "#000000", ":hover": {Color: "#ffffff" } }}
      />
     </div>
    ),
  },
  {
    to: "/invManagement",
    icon: (
      <div className="hover:bg-gray-300 p-1 border-2 border-blue-200 rounded-md cursor-pointer">
      <MdOutlineInventory2
        color="white"
        title="Inventory Management"
        style={{ width: "22px", height: "100%", color: "#000000" }}
      />
       </div>
    ),
  },
  {
    to: "/Billing",
    icon: (
      <div className="hover:bg-gray-300 border-2 border-blue-200 p-1 rounded-md cursor-pointer">
      <RiBillLine
        color="white"
        title="Billing"
        style={{ width: "22px", height: "100%", color: "#000000" }}
      />
 </div>
    ),
  },
  {
    to: "/Analysis",
    icon: (
      <div className="hover:bg-gray-300 border-2 border-blue-200 p-1 rounded-md cursor-pointer">
      <IoMdAnalytics
        color="white"
        title="Analyzing"
        style={{ width: "22px", height: "100%", color: "#000000" }}
      />
 </div>
    ),
  },
  {
    to: "/Video",
    icon: (
      <div className="hover:bg-gray-300 p-1 border-2 border-blue-200 rounded-md cursor-pointer">
      <FaVideo
        color="white"
        title="Video"
        style={{ width: "22px", height: "100%", color: "#000000" }}
      /> </div>
    ),
  },
];

const SidebarItem = ({ to, icon, onClick }) => (
  <li className="p-4" onClick={onClick}>
    <Link to={to} className="icon-link">
      {icon}
    </Link>
  </li>
);

const Sidebar = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center w-11">
    
      <ul>
        {sidebarItems.map((item, index) => (
         <SidebarItem
         key={index}
         to={item.to}
         icon={item.icon}
         
       />
        ))}
      </ul>
    
    </div>
  );
};

export default Sidebar;
