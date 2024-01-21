import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar";
import InventaryHealth from "../../Components/InventaryHealth-Component";
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

const AddStock = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex h-screen  bg-zinc-300">
      <div>
        <Sidebar onItemClick={handleSidebarItemClick} />
      </div>
      <div className="w-full">
        <InventaryHealth />
      </div>
      {selectedItem && (
        <div className="flex-1 bg-zinc-200 p-4 w-full">
          {componentMap[selectedItem]}
        </div>
      )}
    </div>
  );
};

export default AddStock;
