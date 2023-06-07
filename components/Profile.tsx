import Image from "next/image";
import React from "react";
import Profpict from "@/public/profile.jpg";
import { useEffect, useState } from "react";
import Loading from "./Loading";

type Props = {};

const Profile = (props: Props) => {
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  const getUser = async (token: string, userId: any) => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://dummyjson.com/users/${userId}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      if (data.ok) {
        setIsLoading(false);
        const user = await data.json();
        setUserData(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("id");
    if (typeof window !== "undefined") {
      if (accessToken) {
        getUser(accessToken, userId);
      }
    }
  }, []);

  return (
    <div className="flex flex-col bg-[#0A5F59] h-48 rounded-tr-3xl justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col items-center gap-1 mt-2">
          <Image
            // src={userData?.image ? userData.image : Profpict}
            src={Profpict}
            alt=""
            width={65}
            height={65}
            priority={true}
            loader={() => userData?.image || Profpict.src}
            className="rounded-full border-2 mb-2 drop-shadow-xl hover:drop-shadow-2xl"
            unoptimized
          />
          <div className="font-bold text-lg">{userData?.firstName}</div>
          <div className="text-gray-400">Role - {userData?.maidenName}</div>
          <div className=""></div>
        </div>
      )}
    </div>
  );
};

export default Profile;
