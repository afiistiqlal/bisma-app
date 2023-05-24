import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

type Props = {};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      data: [5000000, 8000000, 12000000, 9000000, 7000000, 10000000, 4900000],
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      display: true,
    },
    y: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      borderColor: "Black",
      fill: "start",
    },
    point: {
      radius: 3,
      hitRadius: 100,
      pointStyle: "circle",
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  maintainAspectRatio: false,
};

const ExpensesChart = (props: Props) => {
  return (
    <div className="w-full h-80">
      <Line width={610} options={options} data={data} />
    </div>
  );
};

export default ExpensesChart;
