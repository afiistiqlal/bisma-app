import React from "react";

type Props = {};

const Showpage = (props: Props) => {
  return (
    <div className="flex m-2 gap-2 text-sm items-center">
      <p>Show</p>
      <select className="border rounded-md p-1">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Showpage;
