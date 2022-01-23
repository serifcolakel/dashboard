import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
const randomNumberGenerator = () => Math.round(Math.random() * 10);
export const data = {
  labels: [
    "Uygulayıcılık",
    "Direktörlük",
    "Girişimcilik",
    "Diplomatlık ",
    "Disiplinlik",
    "Analistlik",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [
        randomNumberGenerator(),
        randomNumberGenerator(),
        randomNumberGenerator(),
        randomNumberGenerator(),
        randomNumberGenerator(),
        randomNumberGenerator(),
      ],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  responsive: true,

  plugins: {
    label: {
      display: false,
    },
    title: {
      display: true,
      text: "Karkateristik Özellikler",
    },
  },
};
export default function Account() {
  return (
    <PolarArea
      className="!h-[50vh] mx-auto !w-auto bg-[#012450] rounded-xl p-4 "
      data={data}
      options={options}
    />
  );
}
