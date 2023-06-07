import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  nama: string;
  nim: string;
  periode: string;
  prodi: string;
}

type Props = {};

const Search = (props: Props) => {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    periode: "",
    prodi: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Access form data
    // console.log(formData);
    // Reset form fields
    // setFormData({
    //   nama: "",
    //   nim: "",
    //   periode: "",
    //   prodi: "",
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full justify-center gap-6 mb-6 mt-4"
    >
      <div className="flex justify-center form-control gap-4">
        <input
          type="text"
          name="nama"
          id="nama"
          placeholder="Nama Mahasiswa"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
        <input
          type="text"
          name="nim"
          id="nim"
          placeholder="Nomor Induk"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-center form-control gap-4">
        <select
          name="periode"
          id="periode"
          className="select select-bordered w-full max-w-xs"
          onChange={handleChange}
        >
          <option value="">-- Periode Akademik --</option>
          <option value="31">2023 - 1</option>
          <option value="32">2023 - 2</option>
        </select>
        <select
          name="prodi"
          id="prodi"
          className="select select-bordered w-full max-w-xs"
          onChange={handleChange}
        >
          <option value="">-- Program Studi --</option>
          <option value="03">Teknik Geofisika</option>
          <option value="32">Teknik Geologi</option>
        </select>
      </div>
      <button type="submit" className="">
        <div className="flex justify-center items-center w-12 h-12 border rounded-full btn-ghost">🔍</div>
      </button>
    </form>
  );
};

export default Search;
