import { useState, useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import SupportIcon from "@mui/icons-material/Support";
import Navlist from "./Navlist";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavlistSecond from "./NavlistSecond";
import { useNavigate } from "react-router-dom";

const NavMenu = () => {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if(isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("accessToken");
      navigate("/");
    }
    else {
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsLoggedIn(true);
    }
    const interval = setInterval(() => {
      setShowFirstImage((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="block">
        <div className="flex bg-[#E2E2E2] h-[50px]">
          <div className="flex gap-8 ml-[190px]">
            <img
              className="w-[90px]"
              src="https://inet.vn/public/img/logo/logo-iNET.svg"
              alt=""
            />
            {showFirstImage ? (
              <>
                <img
                  className="w-[254px] h-[41px] mt-1"
                  src="https://inet.vn/public/img/domains/banner-top-1-domain-vn-2023.webp"
                  alt=""
                />
                <img
                  style={{ display: "none" }}
                  className="w-[254px] h-[41px] mt-1"
                  src="https://inet.vn/public/img/domains/banner-top-1-domain-vn-2022.webp"
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  style={{ display: "none" }}
                  className="w-[254px] h-[41px] mt-1"
                  src="https://inet.vn/public/img/domains/banner-top-1-domain-vn-2023.webp"
                  alt=""
                />
                <img
                  className="w-[254px] h-[41px] mt-1"
                  src="https://inet.vn/public/img/domains/banner-top-1-domain-vn-2022.webp"
                  alt=""
                />
              </>
            )}
          </div>
          <div className="flex gap-4 ml-[270px]">
            <button className="flex mt-3 text-gray-500 hover:text-black">
              <PhoneIcon className="!mt-[4px] !h-[17px] !ml-3" />
              <span className="!ml-[-4px] font-semibold">1900 9250</span>
            </button>
            <button className="flex mt-3 text-gray-500 hover:text-black">
              <SupportIcon className="!mt-[4px] !h-[17px] !ml-3 " />
              <span className="!ml-[-2px] ">Ticket</span>
            </button>
            <Navlist></Navlist>
            <button className="flex mt-3 text-gray-500 hover:text-black">
              <ShoppingCartIcon className="!mt-[4px] !h-[17px] !ml-[-10px] " />
            </button>
            <button className="flex mt-3 text-gray-500 hover:text-black">
              <NotificationsIcon className="!mt-[1px] !h-[22px]  " />
            </button>
            <button
              className="flex mt-3 text-gray-500 hover:text-black"
              onClick={handleLogin}
            >
               <span>{isLoggedIn ? "Đăng xuất" : "Đăng nhập"}</span>
            </button>
          </div>
        </div>
        <div className="flex bg-white h-[50px] border-5px">
          <NavlistSecond></NavlistSecond>
        </div>
        <div className="bg-blue-500 h-[200px]">
          <img
            className="w-[600px] h-[300px] ml-[430px] pb-[150px]"
            src="https://inet.vn/public/img/svg/whois-domain-bg.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
