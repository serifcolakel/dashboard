import React from "react";
import {
  FaLock,
  FaQuestionCircle,
  FaUserAlt,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import DashboardMain from "./components/DashboardMain";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Account from "./components/Account";
import Settings from "./components/Settings";
import { MdSpaceDashboard, MdSettings } from "react-icons/md";
import { RiShoppingBagFill, RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

export default function Dashboard() {
  const [active, setActive] = React.useState("dashboard");
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-between">
        <div className="md:w-[280px] w-[100%] h-full md:h-[100vh] divide-y-2 divide-[#1F2937] bg-black flex flex-col justify-between  text-white">
          <div className="divide-y-2 divide-[#1F2937] ">
            <div>
              <img
                src="https://i.hizliresim.com/5aou44b.png"
                alt="dashboard-logo"
                className="mx-auto p-8 w-[250px] h-auto object-cover"
              />

              <div className="hidden md:flex flex-row justify-between md:w-[248px] h-20 mx-auto w-full">
                <div>
                  <p className="font-semibold text-xl text-white ">AKE Inc</p>
                  <p className="font-semibold text-xs text-gray-500">
                    Your Role: ADMIN
                  </p>
                </div>
                <FaQuestionCircle size={25} className="text-green-600 " />
              </div>
            </div>
            <div className="flex flex-col gap-y-4 p-4">
              <div
                onClick={() => setActive("dashboard")}
                className={
                  active === "dashboard"
                    ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                    : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                }
              >
                <MdSpaceDashboard size={25} />
                <p>Dashboard</p>
              </div>
              <div
                onClick={() => setActive("customers")}
                className={
                  active === "customers"
                    ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                    : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                }
              >
                <FaUserFriends size={25} />
                <p>Customers</p>
              </div>
              <div
                onClick={() => setActive("products")}
                className={
                  active === "products"
                    ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                    : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                }
              >
                <RiShoppingBagFill size={25} />
                <p>Products</p>
              </div>
              <div
                onClick={() => setActive("account")}
                className={
                  active === "account"
                    ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                    : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                }
              >
                <FaUserAlt size={25} />
                <p>Account</p>
              </div>
              <div
                onClick={() => setActive("settings")}
                className={
                  active === "settings"
                    ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                    : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                }
              >
                <MdSettings size={25} />
                <p>Settings</p>
              </div>
              <Link href="/login">
                <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2">
                  <FaLock size={20} />
                  <p>Login</p>
                </div>
              </Link>
              <Link href="/register">
                <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2">
                  <FaUserPlus size={20} />
                  <p>Register</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 p-4">
            <p className="text-base">Need more Features</p>
            <p className="text-[#9CA3AF] text-xs ">Check out our Other Offer</p>
            <img
              src="https://i.hizliresim.com/pd2th89.png"
              alt="offer"
              className="w-[160px] h-[136px] object-cover mx-auto"
            />

            <a
              href="https://ake.com.tr/asansor-sistemleri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-x-4 bg-green-500 text-white p-2 rounded-lg"
            >
              Get Offer <RiExternalLinkLine size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[100vh] ">
        {active === "dashboard" ? (
          <DashboardMain />
        ) : active === "customers" ? (
          <Customers />
        ) : active === "products" ? (
          <Products />
        ) : active === "account" ? (
          <Account />
        ) : active === "settings" ? (
          <Settings />
        ) : (
          <DashboardMain />
        )}
      </div>
    </div>
  );
}
