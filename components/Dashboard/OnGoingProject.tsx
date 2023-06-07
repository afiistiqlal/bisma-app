import React from "react";

type Props = {};

const arrWaitingPayment = [
  {
    id: 1,
    nama: "Asisten Praktikum",
    tanggal_mulai: "17 Januari 2023",
    tanggal_selesai: "23 Februari 2023",
    jam_mulai: "15:00",
    jam_selesai: "16:00",
  },
  {
    id: 2,
    nama: "Pembuatan Poster",
    tanggal_mulai: "17 Januari 2023",
    tanggal_selesai: "23 Februari 2023",
    jam_mulai: "15:00",
    jam_selesai: "16:00",
  },
  {
    id: 3,
    nama: "Magang Akreditasi",
    tanggal_mulai: "17 Januari 2023",
    tanggal_selesai: "23 Februari 2023",
    jam_mulai: "15:00",
    jam_selesai: "16:00",
  },
  {
    id: 4,
    nama: "Asisten Penelitian",
    tanggal_mulai: "17 Januari 2023",
    tanggal_selesai: "23 Februari 2023",
    jam_mulai: "15:00",
    jam_selesai: "16:00",
  },
  {
    id: 5,
    nama: "Asisten Pengabdian",
    tanggal_mulai: "17 Januari 2023",
    tanggal_selesai: "23 Februari 2023",
    jam_mulai: "15:00",
    jam_selesai: "16:00",
  },
];

const OnGoingProject = (props: Props) => {
  return (
    <div className="rounded-lg bg-slate-50 h-full shadow-lg shadow-gray-500 overflow-auto">
      <div className="flex flex-row w-full backdrop-blur-md p-4 shadow-sm sticky top-0 justify-between">
        <div className="text-lg font-semibold leading-7">
          On Going Project
        </div>
        <div className="hover:cursor-pointer hover:underline font-light">
          View All
        </div>
      </div>
      <div className="px-4">
        {arrWaitingPayment.map((v, i) => {
          return (
            <dl
              className="flex flex-row gap-6 py-4 border-2 rounded-lg p-2 my-4"
              key={v.id}
            >
              <div className="border-4 border-lime-600 rounded-full w-10 h-10 flex justify-center items-center">
                {i + 1}
              </div>
              <div className="flex flex-col">
                <div className="mb-1 font-semibold">{v.nama}</div>
                <div className="text-sm">
                  {v.tanggal_mulai} - {v.tanggal_selesai}{" "}
                </div>
                <div className="text-sm">
                  {v.jam_mulai} - {v.jam_selesai}
                </div>
              </div>
            </dl>
          );
        })}
      </div>
    </div>
  );
};

export default OnGoingProject;
