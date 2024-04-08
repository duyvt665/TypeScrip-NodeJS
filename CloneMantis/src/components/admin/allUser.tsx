import TableUsers from "./tabelUser";
import { useNavigate } from "react-router-dom";
const AllUsers = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };
  return (
    <>
      <div className="!w-[1000px] m-auto mt-[100px]">
        <TableUsers></TableUsers>
      </div>
      <div>
        <button
          className="border-[1px] border-cyan-400 hover:bg-cyan-400 w-[80px]	ml-[1190px]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default AllUsers;
