import React from "react";

type Props = {
  title: string;
  data: any;
};

const Card = ({ title, data }: Props) => {
  return (
    <div className="flex flex-col bg-teal-800 rounded-lg w-1/4 h-36 my-1 text-white text-sm p-4 shadow-lg shadow-gray-700 justify-between">
      <div className="flex flex-row justify-between">
        <div className="flex justify-start">{title}</div>
        <div className="flex justify-end rounded-full bg-gray-50 w-8 h-8"></div>
      </div>

      <div className="text-2xl mb-8">{data}</div>
      <div className="text-xs mb-6">Updated months Ago</div>
    </div>
  );
};

export default Card;
