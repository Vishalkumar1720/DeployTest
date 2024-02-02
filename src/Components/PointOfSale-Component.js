import React from "react";
import { LuSave } from "react-icons/lu";
import { FaShareAlt } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PointOfSale = () => {
  return (
    <div className="flex flex-col justify-start gap-6 py-3 px-6 w-full h-screen ">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] font-[600] font-serif"> Point Of Sale</h1>
        <div>
          <button type="button" className="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-3.5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700">
            <Link to="/HomePage" className="flex items-center text-white">
              Return Home <IoReturnDownBack className="ml-2" />
            </Link>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white p-2 rounded-md">
      <h2>Patient Details</h2>
        <div className="flex flex-row justify-between items-center">
          <div>
            <input
              className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Customer Name"
            ></input>
          </div>

          <div>
            <input
              className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Age"
            ></input>
          </div>

          <div>
            <input
              className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Mobile Number"
            ></input>
          </div>

          <div>
            <input
              className="shadow appearance-none border rounded border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              placeholder="Date"
            ></input>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-3 w-[80%]">
          <div className="search-field bg-white rounded-md flex items-center gap-2">
            <IoSearch className="ml-4" size="20" />
            <input
              className=" appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="search"
              placeholder="Search"
            ></input>
          </div>
          <div className="overflow-y-auto h-[330px] rounded-md">
            <div class="text-gray-900">
              <div class="flex justify-center">
                <table class="w-full  text-md bg-white shadow-md table-fixed">
                  <thead>
                    <tr class="border-b sticky top-0 bg-white">
                      <th class="text-left p-3 px-5">S.No</th>
                      <th class="text-left p-3 px-5">Medicine Name</th>
                      <th class="text-left p-3 px-5">Rack </th>
                      <th class="text-left p-3 px-5">Price/Unit</th>
                      <th class="text-left p-3 px-5">Quantity</th>
                      <th class="text-left p-3 px-5">Amount</th>
                      <th>Operaton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>

                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100 bg-gray-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                    <tr class="border-b hover:bg-orange-100">
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.name"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="user.email"
                          class="bg-transparent"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent">
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </select>
                      </td>
                      <td class="p-3 px-5 flex justify-end">
                        <button
                          type="button"
                          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        >
                          Delete
                        </button>
                      </td>
                      <td class="p-3 px-5">
                        <input type="text" value="10" class="bg-transparent" />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          type="text"
                          value="1500"
                          class="bg-transparent"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-3 p-3 w-[20%] rounded-md">
          <h2 className="text-[18px] font-[500]">Preview Bill</h2>
          <div className="bg-zinc-300 w-[200px] h-[270px] rounded-md"></div>
          <div className="flex justify-between">
            <button className="flex gap-1 px-1 items-center justify-center border border-[#56DE26] rounded-md">
              <LuSave size="15" color="#56DE26" />
              Save
            </button>
            <button className="flex gap-1 px-1 items-center justify-center border border-[#7000FF] rounded-md">
              <FaShareAlt color="#7000FF" size="15" />
              Share
            </button>
            <button className="flex gap-1 px-1 items-center justify-center border border-[#EB002A] rounded-md">
              <IoIosPrint color="#EB002A" size="15" />
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointOfSale;
