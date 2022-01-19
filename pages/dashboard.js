import React from "react";
import {
  FaLock,
  FaQuestionCircle,
  FaUserAlt,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiShoppingBagFill } from "react-icons/ri";
export default function Dashboard() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-between">
        <div className="md:w-[280px] w-[20%] h-[100vh] divide-y-2 divide-[#1F2937] bg-black flex flex-col justify-between  text-white">
          <div className="divide-y-2 divide-[#1F2937] ">
            <div>
              <img
                src="https://i.hizliresim.com/5aou44b.png"
                alt="dashboard-logo"
                className="mx-auto p-8 w-[250px] h-auto object-cover"
              />

              <div className="hidden md:flex flex-row justify-between md:w-[248px] h-20 mx-auto w-full">
                <div>
                  <p className="font-semibold text-xs text-white ">AKE Inc</p>
                  <p className="font-semibold text-xs text-gray-500">
                    Your Role: ADMIN
                  </p>
                </div>
                <FaQuestionCircle size={25} className="text-green-600 " />
              </div>
            </div>

            <div className="flex flex-col gap-y-4 p-4">
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <MdSpaceDashboard size={25} />
                <p>Dashboard</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <FaUserFriends size={25} />
                <p>Customers</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <RiShoppingBagFill size={25} />
                <p>Products</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <FaUserAlt size={25} />
                <p>Account</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <MdSettings size={25} />
                <p>Settings</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <FaLock size={25} />
                <p>Login</p>
              </div>
              <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer ">
                <FaUserPlus size={25} />
                <p>Register</p>
              </div>
            </div>
          </div>
          <div>bottom</div>
        </div>
      </div>
      <div>2</div>
    </div>
  );
}
