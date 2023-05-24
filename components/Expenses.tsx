import React from "react";
import LineChart from "./ExpensesChart";

type Props = {};

const Expenses = (props: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg shadow-gray-500 w-2/3 p-2 bg-slate-50 h-[26rem]">
      <div className="text-lg font-semibold m-2">Expenses 2023</div>
      <div className="'w-full flex justify-center">
        <LineChart/>
        {/* <Image
          src={Expense}
          alt=""
          width={610}
          height={50}
          loader={() => Expense.src}
          className="object-fill"
        /> */}
      </div>
    </div>
  );
};

export default Expenses;
