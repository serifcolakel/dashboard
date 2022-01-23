import { useWindowWidth } from "@react-hook/window-size";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import React from "react";
import { Line } from "react-chartjs-2";

export default function DashBoardMain({ state }) {
  const onlyWidth = useWindowWidth();
  console.log(state);
  const randomNumberGenerator = () => Math.round(Math.random() * 100);
  const data = [
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
    randomNumberGenerator(),
  ];
  const options = {
    responsive: true,
    color: "#fff",

    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Day",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Price",
        },
      },
    },

    animations: {
      tension: {
        duration: 1000,
        easing: "easeOutElastic",
        from: 0.5,
        to: 0.2,
        loop: true,
      },
    },
    plugins: {
      label: {
        display: false,
      },
      title: {
        display: true,
        text: "Custom Chart Title",
      },
    },
  };

  const config = {
    type: "line",

    data: {
      datasets: [
        {
          data: data,
          backgroundColor: [
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
            "rgba(44, 123, 229, 1)",
          ],

          label: "",

          borderColor: "rgb(36, 105, 198)",
          backgroundColor: "rgba(44, 123, 229, 1)",
          borderWidth: 3,
          fill: true,
        },
      ],
      labels: ["18.01", "19.01", "20.01", "21.01", "22.01", "23.01", "24.01"],
    },
  };

  return (
    <div className="0">
      {onlyWidth > 768 ? (
        <div className="flex flex-col gap-y-8 md:mr-0 mx-auto md:p-8 relative">
          <Line
            className="md:!h-[50vh] !h-[60vh] !w-full mx-auto bg-[#012450] md:scale-y-100 scale-y-50 md:mt-0 -mt-16 rounded-xl "
            options={options}
            data={config.data}
          />
          <p className="text-white absolute md:top-[50px] top-6 md:left-[110px] md:text-2xl ">
            {`Today $ ${data[data.length - 1]} `}
          </p>
          <p className="text-white absolute md:top-[75px] md:left-[110px] ">
            {`Yesterday $ ${data[data.length - 2]} `}
          </p>
        </div>
      ) : state ? (
        <div className="flex flex-col gap-y-8 md:mr-0 px-2 md:p-8 relative">
          <Line
            className="md:!h-[50vh] !h-[40vh] !w-full mx-auto bg-[#012450] md:scale-y-100 scale-y-[80%] mt md:mt-0  rounded-xl "
            options={options}
            data={config.data}
          />
          <p className="text-white absolute md:top-[50px] top-[30px] left-8 md:left-[110px] md:text-2xl text-lg ">
            {`Today $ ${data[data.length - 1]} `}
          </p>
          <p className="text-white absolute md:top-[75px] top-[55px] left-8 md:left-[110px] text-sm ">
            {`Yesterday $ ${data[data.length - 2]} `}
          </p>
        </div>
      ) : null}
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-4 gap-y-4 p-2">
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-customers-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Totals</p>
          <p className="text-[#f5803e] text-3xl font-medium ">
            {data.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              -200
            )}
            k
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-orders-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Orders</p>
          <p className="text-[#27bcfd] text-3xl font-medium ">
            {data.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              -50
            )}
            k
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-center pl-8 rounded-xl shadow-xl h-[130px] bg-revenue-card-bg bg-cover">
          <p className="text-gray-400 text-lg">Revenue</p>
          <p className="text-[#4dc396] text-3xl font-medium ">
            {data.reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0
            )}
            $
          </p>
          <p className="text-blue-500 underline ">See All</p>
        </div>
      </div>
    </div>
  );
}
