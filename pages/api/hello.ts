// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// get user
const getUser = async (token: string, userId: any) => {
  try {
    const data = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    if (data.ok) {
      const user = await data.json();
    }
  } catch (error) {
    console.log(error);
  }
};

// Login
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const url = "https://dummyjson.com/auth/login";
    const data = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // username: username,
        // password: password,
        username: "kminchelle",
        password: "0lelplR",
      }),
    });

    if (data.status === 200) {
      const user = await data.json();
      localStorage.setItem("accessToken", user.token);
      localStorage.setItem("id", user.id);
      return user;
    } else if (data.status === 400 || data.status === 404) {
      throw new Error("Invalid credentials");
    } else {
      throw new Error("Unexpected error occurred");
    }
  } catch (error) {
    console.log(error);
  }
};

// get mahasiswa
const fetchData = async () => {
  try {
    // const response = await fetch("https://dummyjson.com/users");
    // const jsonData = await response.json();
    // setData(jsonData.users);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// get jenis magang
const fetchJenisMagang = async () => {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/afiistiqlal/bismadum/jenis_magang"
    );
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching jenis magang:", error);
  }
};

fetchJenisMagang();