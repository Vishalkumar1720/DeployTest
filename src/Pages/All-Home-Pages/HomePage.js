import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import HomePage from "../../Components/Home-Component";
import InventoryComponent from "../../Components/InventoryMangement-Component";
import BillingComponent from "../../Components/Billing-Component";
import AnalysisComponent from "../../Components/Analyzing-Component";
import VideoComponent from "../../Components/Video-Component";

const componentMap = {
  item1: <HomePage />,
  item2: <InventoryComponent />,
  item3: <BillingComponent />,
  item4: <AnalysisComponent />,
  item5: <VideoComponent />,
};

const MainApp = () => {
  const [selectedItem, setSelectedItem] = useState("item1");

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  const defaultComponent = <HomePage />;

  return (
    <div className="flex">
      <div>
        <Sidebar onItemClick={handleSidebarItemClick} />
      </div>
      <div className="w-full h-screen bg-zinc-200">
        <div className="w-full">
          {componentMap[selectedItem] || defaultComponent}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
