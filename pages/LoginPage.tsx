import { useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const loginPage = (props: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "https://dummyjson.com/auth/login";
    const data = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      }),
    });

    try {
      if (data.status === 200) {
        const user = await data.json();
        localStorage.setItem("accessToken", user.token);
        localStorage.setItem("id", user.id);
        router.push("/");
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
  return (
    <div className="grid h-screen place-content-center">
      <div className="grid bg-[#252B42] w-96 gap-4 text-white rounded-md p-4">
        <h1 className="text-2xl text-center font-semibold">Bisma App</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex">
            <label className="mt-1 w-2/5 text-left" htmlFor="username">
              Username{" "}
            </label>
            <input
              className="w-3/5 rounded-sm p-1 text-base text-black"
              type="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="flex">
            <label className="mt-1 w-2/5 text-left" htmlFor="password">
              Password{" "}
            </label>
            <input
              className="w-3/5 rounded-sm p-1 text-black"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="m-2 bg-green-400 rounded-lg p-1"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default loginPage;
