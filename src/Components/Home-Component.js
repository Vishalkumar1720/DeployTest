import React from "react";
import { FaRegBell, FaCartArrowDown, FaCartPlus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const HomeComponent = () => (
  <>
    <div className="flex flex-col justify-start gap-8 py-4 px-6 w-full h-screen ">
      <div className="flex p-4 justify-between items-center bg-white rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.4)]">
        <div className="flex flex-col items-center justify-center text-black">
          <h1 className="text-[30px] font-[500] leading-[45px]">
            Manoj-Medical-Store
          </h1>
          <p className="text-[16px] leading-[24px]">
            Medical Number - 000000000000
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <div>
            <a href="/HomePage">
              <FaRegBell size="25" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="user-image w-[40px] h-[40px] bg-zinc-300  rounded-[50px]">
              <Avatar name="AB" size="40" round={true} />
            </div>
            <p className="text-xl font-[500] ">Username</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between space-x-6">
      <div className="flex flex-col lg:flex-row items-center bg-white border-b-4 py-3 px-5 justify-center gap-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.4)] hover:border-[#7000FF] w-full h-44 lg:w-[45%]">
        <FaCartArrowDown color="#7000FF" size="40" />
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Today Sale</p>
          <h4 className="text-black font-bold text-[22px]">5643</h4>
          <Link to="/pointOfSale">
            <p className="text-[#7000FF]  font-[500]">Point Of Sale</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-white border-b-4 hover:border-[#56DE26] py-3 px-5 justify-center gap-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.4)] lg:w-[45%]">
        <FaCartPlus color="#56DE26" size="40" />
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Today Purchase</p>
          <h4 className="text-black font-bold text-[22px]">5643</h4>
          <Link to="/PurchaseOrder">
          <p className="text-[#56DE26]  font-[500]">Purchase order</p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-white border-b-4 hover:border-[#EB002A] py-3 px-5 justify-center gap-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.5)] lg:w-[45%]">
        <MdDeleteSweep color="#EB002A" size="40" />
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Today expiry</p>
          <h4 className="text-black font-bold text-[22px]">5643</h4>
          <p className="text-[#EB002A]  font-[500]">Remove expires</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-white border-b-4 hover:border-[#EAE000] py-3 px-5 justify-center gap-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.5)] lg:w-[45%]">
        <FaUserDoctor color="#EAE000" size="40" />
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Inventory Health</p>
          <h4 className="text-black font-bold text-[22px]">5643</h4>
          <Link to="/inventaryHealth">
            <p className="text-[#EAE000]  font-[500]">Add Stock</p>
          </Link>
        </div>
      </div>
    </div>
    </div>
  </>
);

export default HomeComponent;
