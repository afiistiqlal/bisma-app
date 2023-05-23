import React from "react";

type Props = {};
const arrWaitingPayment = [
  { id: 1, nama: "Asisten Praktikum" },
  { id: 2, nama: "Pembuatan Poster" },
  { id: 3, nama: "Magang Akreditasi" },
  { id: 4, nama: "Asisten Penelitian" },
  { id: 5, nama: "Asisten Pengabdian" },
];
const TopMagang = (props: Props) => {
  return (
    <div className="rounded-lg bg-slate-50 h-full p-4 shadow-lg shadow-gray-500">
      <div className="text-lg font-semibold">Top Jenis Magang</div>
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

export default TopMagang;
