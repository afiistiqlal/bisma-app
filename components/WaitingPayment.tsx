import React from "react";

type Props = {};

const arrWaitingPayment = [
  { id: 1, nama: "Asisten Praktikum" },
  { id: 2, nama: "Pembuatan Poster" },
  { id: 3, nama: "Magang Akreditasi" },
  { id: 4, nama: "Asisten Penelitian" },
  { id: 5, nama: "Asisten Pengabdian" },
];

const WaitingPayment = (props: Props) => {
  return (
    <div className="flex flex-col w-1/3 rounded-lg bg-slate-50 ml-6 max-h-[32rem] shadow-lg shadow-gray-500 overflow-auto">
      <div className="text-lg font-semibold sticky top-0 backdrop-blur-md w-full p-4 shadow-sm">
        Waiting Payment
      </div>
      <div className="text-base px-4 ml-4">
        {arrWaitingPayment.map((v, i) => {
          return (
            <dl className="flex flex-row gap-6 py-4" key={v.id}>
              <div className="border-4 border-yellow-400 rounded-full w-9 h-9 flex justify-center items-center">
                {i + 1}
              </div>
              <div className="flex flex-col gap-3">
                {v.nama} <hr />{" "}
              </div>
            </dl>
          );
        })}
      </div>
    </div>
  );
};

export default WaitingPayment;
