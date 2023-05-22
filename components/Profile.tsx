import Image from "next/image";
import React from "react";
import Profpict from "@/public/profpict.png";

type Props = {
  name: string;
  role: string;
};

const Profile = (props: Props) => {
  return (
    <div className="flex flex-col bg-[#0A5F59] h-60 rounded-tr-3xl justify-center items-center">
      <div className="flex flex-col items-center gap-1 mt-2">
        <Image src={Profpict} alt="" width={65} height={65} priority={true} />
        <div className="font-bold text-lg">{props.name}</div>
        <div className="text-gray-400">{props.role}</div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Profile;
