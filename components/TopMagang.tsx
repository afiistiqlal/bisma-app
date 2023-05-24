import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  indexAxis: "y" as const,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: true,
    },
  },
  // elements: {
  //   bar: {
  //     borderWidth: 2,
  //   },
  // },
  responsive: true,
  plugins: {
    legend: {
      // position: "right" as const,
      display: false
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  "Asisten Praktikum",
  "Pembuatan Poster",
  "Magang Akreditasi",
  "Asisten Penelitian",
  "Asisten Pengabdian",
];

export const data = {
  labels,
  datasets: [
    {
      data: [1, 2, 3, 4, 1, 2, 1, 7],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const TopMagang = (props: Props) => {
  return (
    <div className="rounded-lg bg-slate-50 h-full p-4 shadow-lg shadow-gray-500">
      <div className="text-lg font-semibold">Top Jenis Magang</div>
      <div className="text-base px-4 ml-4 max-w-full h-80">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TopMagang;
