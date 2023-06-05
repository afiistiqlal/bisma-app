import Layout from "@/components/Layout";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type JenisMagang = {
  id: number;
  nama: string;
};

type Form = {
  id_jenis_magang: number;
  nama_magang: string;
  nama_penganggung_jawab: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
  id_mahasiswa: string;
  durasi_magang: string;
  estimasi_insentif: string;
  [key: string]: string | number | [];
};

const NewProject = () => {
  // const [jenisMagangOptions, setJenisMagangOptions] = useState<JenisMagang[]>([]);
  const [formData, setFormData] = useState<Form>({
    id_jenis_magang: 0,
    nama_magang: "",
    nama_penganggung_jawab: "",
    tanggal_mulai: "",
    tanggal_selesai: "",
    id_mahasiswa: "",
    durasi_magang: "",
    estimasi_insentif: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (formData[name] === value) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const jenisMagangOptions = [
    { id: 1, nama: "Tutor Sebaya" },
    { id: 2, nama: "Asisten Praktikum" },
    { id: 3, nama: "Asistem Pengembangan Aplikasi" },
    { id: 4, nama: "Asisten Penelitian" },
  ];
  useEffect(() => {
    
  }, []);
  return (
    <Layout title="New Project">
      <div className="bg-white drop-shadow-md rounded-lg w-full min-h-screen p-4">
        <form onSubmit={handleSubmit} className="form-control flex gap-4">
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Jenis Magang:
            </label>
            <select
              className="select select-bordered w-3/5"
              name="id_jenis_magang"
              value={formData.id_jenis_magang}
              onChange={handleChange}
            >
              <option value="">Select Jenis Magang</option>
              {jenisMagangOptions.map((jenisMagang) => (
                <option key={jenisMagang.id} value={jenisMagang.id}>
                  {jenisMagang.nama}
                </option>
              ))}
            </select>
          </div>
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Nama Magang:
            </label>
            <input
              className="input input-bordered w-3/5"
              type="text"
              placeholder="Nama Magang"
              name="nama_magang"
              value={formData.nama_magang}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Nama Penganggung Jawab:
            </label>
            <input
              className="input input-bordered w-3/5"
              type="text"
              placeholder="Nama Penanggung Jawab"
              name="nama_penganggung_jawab"
              value={formData.nama_penganggung_jawab}
              onChange={handleChange}
            />
          </div>
          {/* Tanggal */}
          <div className="flex flex-row">
            <label className="flex items-center capitalize font-bold w-2/5">
              Tanggal Mulai:
            </label>
            <div className="w-3/5 flex flex-row items-center justify-between">
              <input
                className="input input-bordered"
                type="date"
                name="tanggal_mulai"
                value={formData.tanggal_mulai}
                onChange={handleChange}
              />
              <label className="flex items-center capitalize font-bold">
                Tanggal Selesai:
              </label>
              <input
                className="input input-bordered"
                type="date"
                name="tanggal_selesai"
                value={formData.tanggal_selesai}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Tanggal */}
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Mahasiswa
            </label>
            <div className="input-group w-3/5">
              <input
                className="input input-bordered w-full"
                type="text"
                placeholder="Cari Mahasiswa"
                name="id_mahasiswa"
                value={formData.id_mahasiswa}
                onChange={handleChange}
              />
              <button className="btn btn-square">
                <AiOutlineSearch className="text-2xl" />
              </button>
            </div>
          </div>
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Durasi Magang:
            </label>
            <input
              className="input input-bordered w-3/5"
              type="text"
              placeholder="Durasi Jam (48 Jam)"
              name="durasi_magang"
              value={formData.durasi_magang}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <label className="flex items-center capitalize font-bold w-2/5">
              Estimasi Insentif:
            </label>
            <input
              className="input input-bordered w-3/5"
              type="text"
              placeholder="Rp. 325.000,00"
              name="estimasi_insentif"
              value={formData.estimasi_insentif}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-primary w-1/5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewProject;
