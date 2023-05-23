import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";

type Props = {};

const Logout = (props: Props) => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    router.push("/LoginPage");
  };
  return (
    <button
      onClick={handleLogout}
      className="flex relative min-w-full my-2 py-2 text-white font-semibold hover:bg-gray-700 rounded-l-full shadow-inner"
    >
      <div className="pl-10 ml-[3px] text-xl flex items-center text-[#FDCF6F]">
        <FiLogOut />{" "}
      </div>
      <div className="ml-1">Logout</div>
    </button>
  );
};

export default Logout;
