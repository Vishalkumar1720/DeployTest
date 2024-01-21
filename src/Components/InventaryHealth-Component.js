import React, { useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const InventaryHealth = () => {
  const [isAddItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [isDownloadSuccess, setDownloadSuccess] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const openAddItemDialog = () => {
    setAddItemDialogOpen(true);
  };

  const closeAddItemDialog = () => {
    setAddItemDialogOpen(false);
  };

  const handleDownload = () => {
    // Handle the download logic here
    // For example, you can make an API call or simulate a download

    // Display download success pop-up
    setDownloadSuccess(true);

    // Close the download success pop-up after a delay (e.g., 2 seconds)
    // setTimeout(() => {
    //   setDownloadSuccess(false);
    // }, 2000);
  };

  const handleAddItems = () => {
    // Handle the download logic here
    // For example, you can make an API call or simulate a download

    // Display download success pop-up
    setIsItemAdded(true);

    // Close the download success pop-up after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsItemAdded(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex bg-zinc-300">
        <div className="flex flex-col justify-start gap-8 py-3 px-6 w-full h-screen ">
          <div className="flex justify-between items-center">
            <h2 className="text-[24px] font-[600] font-serif">
              {" "}
              Inventary Heatlth
            </h2>
            <button type="button" className="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-3.5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">
            <Link to="/HomePage" className="flex items-center text-white">
              Return Home <IoReturnDownBack className="ml-2" />
            </Link>
          </button>
          </div>

          <div className="flex flex-row justify-between bg-white p-2 rounded-md">
            <div className="search-field bg-white border border-[#000000] rounded-md flex items-center gap-2">
              <IoSearch className="ml-4" size="20" />
              <input
                className=" appearance-none  rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="search"
              ></input>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={openAddItemDialog}
                className="flex gap-1 items-center justify-center rounded-md border font-[400] border-[#56DE26] hover:bg-[#56DE26] hover:text-white py-1 px-2 transition-all duration-200 "
              >
                <FaPlus size={20} />
                <p>Add item</p>
              </button>
              <button
                onClick={handleDownload}
                className="flex gap-1 items-center justify-center rounded-md border font-[400] border-[#7000FF] hover:bg-[#7000FF] hover:text-white py-1 px-2 transition-all duration-200"
              >
                <IoMdDownload size={20} />
                <p>Download</p>
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col gap-3 w-full ">
              <div className="text-gray-900 rounded-md mt-2 ">
                <div className="flex justify-center">
                  <div className="overflow-auto"></div>
                  <table className="w-full text-md bg-white shadow-md rounded ">
                    <tbody>
                      <tr className="border-b bg-[#eee987]">
                        <th className="text-left p-3 px-5">Batch Number</th>
                        <th className="text-left p-3 px-5">Medicine Name</th>
                        <th className="text-left p-3 px-5">Category</th>
                        <th className="text-left p-3 px-5">Description</th>
                        <th className="text-left p-3 px-5">Unit</th>
                        <th className="text-left p-3 px-5">Available Stock</th>
                        <th></th>
                      </tr>
                      <tr className="border-b hover:bg-orange-100 bg-gray-100">
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.name"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.email"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-orange-100">
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.name"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.email"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>

                      <tr className="border-b hover:bg-orange-100">
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.name"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.email"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-orange-100 bg-gray-100">
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.name"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.email"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-orange-100">
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.name"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <input
                            type="text"
                            value="user.email"
                            className="bg-transparent"
                          />
                        </td>
                        <td className="p-3 px-5">
                          <select value="user.role" className="bg-transparent">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                          </select>
                        </td>
                        <td className="p-3 px-5 flex justify-end">
                          <button
                            type="button"
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isAddItemDialogOpen && (
        <div className="fixed inset-0 p-4 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 w-[1000px] rounded-md mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Item</h2>
              <button onClick={closeAddItemDialog}>
                <RxCross1
                  className="text-red-500 transition-transform transform hover:scale-110"
                  size={25}
                  color="red"
                />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="batchNumber"
                >
                  Batch Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="batchNumber"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="medicineName"
                >
                  Medicine Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="medicineName"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                >
                  <option value="" disabled selected>
                    Choose Category
                  </option>
                  <option value="medical">Medical</option>
                  <option value="medicine">Medicine</option>
                  <option value="fever">Fever</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="expDate"
                >
                  Exp. Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expDate"
                  type="date"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="openingStock"
                >
                  Opening Stock
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="openingStock"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2" htmlFor="unit">
                  Unit
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="unit"
                >
                  <option value="" disabled selected>
                    Choose Unit
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="reorderLevel"
                >
                  Reorder Level
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="reorderLevel"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-bold mb-2"
                  htmlFor="rackNumber"
                >
                  Rack Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rackNumber"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center justify-end mt-6 gap-2">
              <button
                onClick={handleAddItems}
                className="flex gap-1 items-center justify-center rounded-md border font-semibold border-green-500 hover:bg-green-500 hover:text-white py-1 px-2 transition-all duration-200"
              >
                <FaPlus size={20} />
                <p>Add</p>
              </button>
              <button
                onClick={closeAddItemDialog}
                className="flex gap-1 items-center justify-center rounded-md border font-semibold border-red-500 hover:bg-red-500 hover:text-white py-1 px-2 transition-all duration-200"
              >
                <MdDelete size={20} />
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Success Pop-up */}
      {isDownloadSuccess && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 w-[500px] h-[250px] rounded-md mt-6 border">
            <div className="text-black p-4 rounded-md flex flex-col items-center gap-6">
              <p className="text-[23px] font-[500]">Downloaded Successfully</p>
              <IoCheckmarkCircleOutline
              style={{backgroundColor:'green'}}
                size={50}
                className="mr-2 rounded-[50px]"
                color="white"
              />
              <button
                onClick={() => setDownloadSuccess(false)}
                className="self-end border font-[500] border-black px-6 py-2 rounded-md hover:text-white hover:bg-green-500 transition-all duration-200"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Item Added Success Pop-up */}
      {isItemAdded && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-8 w-[500px] h-[200px] rounded-md mt-6">
            <div className="text-black p-4 rounded-md flex flex-col items-center gap-4">
              <p className="text-[23px] font-[500]">Items Added Successfully</p>
              <IoCheckmarkCircleOutline
              style={{backgroundColor:'green'}}
                size={50}
                className="mr-2 rounded-[50px]"
                color="white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InventaryHealth;
