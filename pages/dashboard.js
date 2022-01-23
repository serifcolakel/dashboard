import React from "react";
import {
  FaLock,
  FaQuestionCircle,
  FaUserAlt,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";
import DashboardMain from "./components/DashboardMain";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Account from "./components/Account";
import Settings from "./components/Settings";
import { MdSpaceDashboard, MdSettings, MdNotifications } from "react-icons/md";
import { RiShoppingBagFill, RiExternalLinkLine } from "react-icons/ri";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";

export default function Dashboard() {
  const [active, setActive] = React.useState("dashboard");
  const [show, setShow] = React.useState(false);
  const onlyWidth = useWindowWidth();
  return (
    <div className="relative mx-auto flex flex-col items-center justify-between bg-[#061325] h-[100vh] overflow-y-scroll ">
      <Head>
        <title>AKE Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://ake.com.tr/uploads/images/logo.png" />
      </Head>

      <div className="fixed top-0 flex flex-row max-w-screen-xl justify-between items-center w-full h-[70px] bg-[#071326] p-2 z-10">
        <div className="flex flex-row items-center text-white gap-x-4 md:gap-x-8 w-full ">
          <AiOutlineMenuUnfold
            className={
              show
                ? "bg-gray-600 text-gray-300  w-10 h-10 rounded-full cursor-pointer p-2 md:ml-2 hover:bg-gray-500 hidden md:block"
                : "hidden"
            }
            onClick={() => setShow(!show)}
          />
          <AiOutlineMenu
            className="md:hidden bg-gray-600 text-gray-300  w-10 h-10 rounded-full cursor-pointer p-2"
            onClick={() => setShow(!show)}
          />
          <AiOutlineMenuFold
            className={
              show
                ? "hidden"
                : "bg-gray-600 text-gray-300  w-10 h-10 rounded-full cursor-pointer p-2 md:ml-2 hover:bg-gray-500 hidden md:block"
            }
            onClick={() => setShow(!show)}
          />
          <Link href="/dashboard" className="w-[140px] h-auto object-cover">
            <img src="https://ake.com.tr/uploads/images/logo.png" alt="logo" />
          </Link>
          <AiOutlineSearch
            size={25}
            className="hidden md:block absolute left-[21%] text-[#344050]"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-[250px] h-10 hidden md:block border-[1px] font-bold text-[#344050] rounded-full px-10 border-[#344050] bg-[#061325] "
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-x-2 w-1/2">
          <MdSettings
            size={25}
            className="text-blue-500 cursor-pointer animate-spin"
          ></MdSettings>
          <div className="absolute top-[23px] right-[89px] animate-ping w-6 h-6 border-blue-500 border-2 rounded-full"></div>

          <MdNotifications size={25} className="text-white cursor-pointer" />
          <img
            className="w-10 h-auto rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="user"
          />
        </div>
      </div>
      <div className="flex flex-row w-full max-w-screen-xl h-full">
        <div
          className={
            onlyWidth > 768
              ? "w-[8%] h-full text-white"
              : !show
              ? "w-[8%] h-full text-white"
              : "hidden"
          }
        >
          <div
            className={
              show
                ? "fixed top-[70px] w-auto h-[100%] md:h-[91vh] bg-[#0a81d8] md:flex flex-row md:flex-col justify-between rounded-lg hidden "
                : "fixed md:top-[70px] w-full md:w-auto h-full md:h-[91vh] divide-y-2 divide-[#1F2937] bg-[#0a81d8] flex flex-col md:overflow-clip overflow-scroll md:flex-col justify-between md:rounded-lg z-20"
            }
          >
            <div className="divide-y-2 divide-[#1F2937] w-full ">
              <div className={show ? "hidden" : "block"}>
                <img
                  src="https://i.hizliresim.com/5aou44b.png"
                  alt="dashboard-logo"
                  className="mx-auto pt-4 w-[250px] h-auto object-cover"
                />

                <div className="hidden md:flex flex-row justify-between md:w-[248px] h-20 mx-auto w-full px-6">
                  <div className="my-auto">
                    <p className="font-semibold text-xl  ">AKE Inc</p>
                    <p className="font-semibold text-xs ">Your Role: ADMIN</p>
                  </div>
                  <FaQuestionCircle
                    size={25}
                    className="text-green-600 my-auto "
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4 p-4">
                <div
                  onClick={() => {
                    setActive("dashboard"), onlyWidth < 768 && setShow(!show);
                  }}
                  className={
                    active === "dashboard"
                      ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                      : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                  }
                >
                  <MdSpaceDashboard size={25} />
                  <p className={show ? "hidden" : "block"}>Dashboard</p>
                </div>
                <div
                  onClick={() => {
                    setActive("customers"), onlyWidth < 768 && setShow(!show);
                  }}
                  className={
                    active === "customers"
                      ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                      : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                  }
                >
                  <FaUserFriends size={25} />
                  <p className={show ? "hidden" : "block"}>Users</p>
                </div>
                <div
                  onClick={() => {
                    setActive("products"), onlyWidth < 768 && setShow(!show);
                  }}
                  className={
                    active === "products"
                      ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                      : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                  }
                >
                  <RiShoppingBagFill size={25} />
                  <p className={show ? "hidden" : "block"}>Products</p>
                </div>
                <div
                  onClick={() => {
                    setActive("account"), onlyWidth < 768 && setShow(!show);
                  }}
                  className={
                    active === "account"
                      ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                      : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                  }
                >
                  <FaUserAlt size={25} />
                  <p className={show ? "hidden" : "block"}>Account</p>
                </div>
                <div
                  onClick={() => {
                    setActive("settings"), onlyWidth < 768 && setShow(!show);
                  }}
                  className={
                    active === "settings"
                      ? "flex flex-row gap-x-4 text-[#10B981] cursor-pointer bg-gray-500 bg-opacity-20 p-2"
                      : "flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2"
                  }
                >
                  <MdSettings size={25} />
                  <p className={show ? "hidden" : "block"}>Settings</p>
                </div>
                <Link href="/login">
                  <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2">
                    <FaLock size={20} />
                    <p className={show ? "hidden" : "block"}>Login</p>
                  </div>
                </Link>
                <Link href="/register">
                  <div className="flex flex-row gap-x-4 hover:text-[#10B981] cursor-pointer p-2">
                    <FaUserPlus size={20} />
                    <p className={show ? "hidden" : "block"}>Register</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className={show ? "hidden" : "flex flex-col gap-y-2 p-4"}>
              <p className="text-base">Need more Features124124</p>
              <p className="text-[#9CA3AF] text-xs ">
                Check out our Other Offer
              </p>
              <img
                src="https://i.hizliresim.com/pd2th89.png"
                alt="offer"
                className="w-[160px] h-[136px] object-cover mx-auto"
              />
              <a
                href="https://ake.com.tr/asansor-sistemleri"
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center justify-center gap-x-4 bg-green-500  p-2 rounded-lg"
              >
                Get Offer <RiExternalLinkLine size={25} />
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            show
              ? "pt-[70px] text-white w-full h-auto "
              : "pt-[70px] text-white w-full h-full pl-[165px] "
          }
        >
          {active === "dashboard" ? (
            <DashboardMain state={show} />
          ) : active === "customers" ? (
            <Customers />
          ) : active === "products" ? (
            <Products state={show} />
          ) : active === "account" ? (
            <Account />
          ) : active === "settings" ? (
            <Settings />
          ) : (
            <DashboardMain />
          )}
        </div>
      </div>
    </div>
  );
}
