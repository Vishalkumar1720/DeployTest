import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const TodayExpiry = () => {
  return (
    <>
      <div className="flex bg-zinc-300">
        <div className="flex flex-col justify-start gap-8 py-3 px-6 w-full h-screen ">
          <div className="flex justify-between items-center">
            <h2 className="text-[24px] font-[600] font-serif"> Today Expiry</h2>
            <button
              type="button"
              className="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-3.5 py-1 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700"
            >
              <Link to="/HomePage" className="flex items-center text-white">
                Return Home <IoReturnDownBack className="ml-2" />
              </Link>
            </button>
          </div>

          <div className="flex gap-4">
            <div className="w-[75%] flex flex-col gap-4">
              <div className="flex items-center justify-between gap-6">
                <div className="flex flex-col justify-center bg-white rounded-md px-8 py-3 border-b-4 hover:border-[#EB002A]">
                  <p className="text-[22px]">Today Expiry</p>
                  <h4 className="text-[#EB002A] font-bold text-[22px] text-center">
                    19
                  </h4>
                  <Link to="/pointOfSale">
                    <p className="font-[500] text-center">Products</p>
                  </Link>
                </div>
                <div className="flex flex-col justify-center bg-white rounded-md px-8 py-3 border-b-4 hover:border-[#EAE000]">
                  <p className="text-[22px]">Expire Soon</p>
                  <h4 className="text-[#EAE000] font-bold text-[22px] text-center">
                    20
                  </h4>
                  <Link to="/pointOfSale">
                    <p className="font-[500] text-center">Products</p>
                  </Link>
                </div>
                <div className="flex flex-col justify-center bg-white rounded-md px-8 py-3 border-b-4 hover:border-[#56DE26]">
                  <p className="text-[22px]">Safe Medic</p>
                  <h4 className="text-[#56DE26] font-bold text-[22px] text-center">
                    2119
                  </h4>
                  <Link to="/pointOfSale">
                    <p className="font-[500] text-center">Products</p>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-y-auto h-[330px] rounded-md">
                  <div class="text-gray-900">
                    <div class="flex justify-center">
                      <table class="w-full  text-md bg-white shadow-md table-fixed">
                        <thead>
                          <tr class="border-b sticky top-0 bg-white">
                            <th class="text-left p-3 px-5">S.No</th>
                            <th class="text-left p-3 px-5">Medicine Name</th>
                            <th class="text-left p-3 px-5">Rack </th>
                            {/* <th class="text-left p-3 px-5">Price/Unit</th>
                          <th class="text-left p-3 px-5">Quantity</th>
                          <th class="text-left p-3 px-5">Amount</th> */}
                            <th></th>
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
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[25%] bg-white rounded-sm p-2">Med Trash</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayExpiry;
