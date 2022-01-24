import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import item from "../item.json";

export const data = {
  labels: [
    "Asansör Sistemleri",
    "Yürüyen Merdiven ve Yol Sistemleri",
    "Engelli Sistemleri",
    "Özel Çözümler",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        item.disSys.length,
        item.elevator.length,
        item.special.length,
        item.stair.length,
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,
};

export default function Products({ state }) {
  return (
    <>
      <div className="flex flex-col gap-y-8 md:mr-0 px-4">
        <Doughnut
          className="!h-[50vh] mx-auto !w-auto bg-[#012450] rounded-xl p-4 "
          data={data}
          options={options}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 gap-y-4 p-2 ">
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-customers-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Total Number of Elevators</p>
          <p className="text-[#f5803e] text-3xl font-medium ">
            {item.elevator.length} pieces
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-orders-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Number of Technical Services</p>
          <p className="text-[#27bcfd] text-3xl font-medium ">4</p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-revenue-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Revenue</p>
          <p className="text-[#4dc396] text-3xl font-medium ">4985.59 $</p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 gap-y-4 p-2">
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-customers-card-bg bg-cover">
          <p className="text-gray-400 text-lg">
            Total number of Escalators and Road Systems
          </p>
          <p className="text-[#f5803e] text-3xl font-medium ">
            {item.stair.length} pieces
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-orders-card-bg bg-cover">
          <p className="text-gray-400 text-lg">
            Total number of Disabled Systems
          </p>
          <p className="text-[#27bcfd] text-3xl font-medium ">
            {item.disSys.length} pieces
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-revenue-card-bg bg-cover">
          <p className="text-gray-400 text-lg">
            Total number of Custom Solutions
          </p>
          <p className="text-[#4dc396] text-3xl font-medium ">
            {item.disSys.length} pieces
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-x-4 gap-y-4 p-2">
        <div className="grid grid-cols-1 gap-y-4">
          <p className="text-center text-gray-500 font-bold">
            Asansör Sistemleri
          </p>
          {item.elevator.map((item, index) => (
            <div
              key={index}
              className={
                state
                  ? "w-full md:w-[280px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-orders-card-bg bg-cover"
                  : "w-full md:w-[250px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-orders-card-bg bg-cover"
              }
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-[200px] h-[100px] rounded-lg shadow-lg object-cover mx-auto"
              />
              <p className="text-gray-400 text-lg">{item.name}</p>
              <p className="text-blue-500 font-medium truncate">
                {item.explanation} ...
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-y-4 ">
          <p className="text-center text-gray-500 font-bold">
            Yürüyen Merdiven ve Yol Sis.
          </p>
          {item.stair.map((item, index) => (
            <div
              key={index}
              className={
                state
                  ? "w-full md:w-[280px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-revenue-card-bg bg-cover"
                  : "w-full md:w-[250px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-revenue-card-bg bg-cover"
              }
            >
              {" "}
              <img
                src={item.img}
                alt={item.name}
                className="w-[200px] h-[100px] rounded-lg shadow-lg object-cover mx-auto"
              />
              <p className="text-gray-400 text-lg truncate">{item.name}</p>
              <p className="text-[#4dc396] font-medium truncate">
                {item.explanation} ....
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-y-4 ">
          <p className="text-center text-gray-500 font-bold">
            Engelli Sistemleri
          </p>
          {item.disSys.map((item, index) => (
            <div
              key={index}
              className={
                state
                  ? "w-full md:w-[280px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-orders-card-bg bg-cover"
                  : "w-full md:w-[250px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-orders-card-bg bg-cover"
              }
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-[200px] h-[100px] rounded-lg shadow-lg object-cover mx-auto"
              />
              <p className="text-gray-400 text-lg truncate">{item.name}</p>
              <p className="text-blue-500 font-medium truncate">
                {item.explanation} ...
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-y-4 ">
          <p className="text-center text-gray-500 font-bold">Özel Çözümler</p>
          {item.special.map((item, index) => (
            <div
              key={index}
              className={
                state
                  ? "w-full md:w-[280px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-customers-card-bg bg-cover"
                  : "w-full md:w-[250px] flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[180px] bg-customers-card-bg bg-cover"
              }
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-[200px] h-[100px] rounded-lg shadow-lg object-cover mx-auto"
              />
              <p className="text-gray-400 text-lg">{item.name}</p>
              <p className="text-[#f5803e] font-medium truncate">
                {item.explanation} pieces
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
