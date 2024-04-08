import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavTenMien = () => {
  return (
    <>
      <NavigationMenu className="!w-[100px] !bg-blue-200   ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!w-[122px] !h-[50px] !bg-white ">
              Tên miền
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[1000px]  ">
              <div className="block">
                <div className="flex gap-[400px] ">
                  <h2 className="font-bold ml-[20px]">Dịch vụ tên miền</h2>
                  <h2 className="font-bold ml-[-29px]">Thông tin & tiện ích</h2>
                </div>

                <div className="flex ">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/buy.png"
                      alt=""
                    />
                    <p className="pr-[307px] text-blue-600">Đăng ký tên miền</p>
                    <p className="text-[12px] pr-[113px]">
                      Đăng ký tên miền Việt Nam và Quốc Tế, tên miền Tiếng Việt
                    </p>
                  </button>

                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/buy.png"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[368px] text-blue-600">
                      Bảng giá
                    </p>
                    <p className="text-[12px] pr-[130px]">
                      Bảng giá chi tiết các đuôi tên miền Việt Nam và Quốc Tế
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/renew.png"
                      alt=""
                    />
                    <p className="pr-[310px] text-blue-600">Gia hạn tên miền</p>
                    <p className=" whitespace-nowrap text-[12px] pr-[156px]">
                      Đăng nhập để gia hạn các tên miền trong tài khoản
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/domain-whois.png"
                      alt=""
                    />
                    <p className="pr-[303px] text-blue-600">
                      Kiểm tra tên miền
                    </p>
                    <p className="whitespace-nowrap text-[12px] pr-[72px]">
                      Kiểm tra (WHOIS) thông tin & trạng thái tên miền đã được
                      đăng ký
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/domain-transfer.png"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[257px] text-blue-600">
                      Chuyển tên miền về INET
                    </p>
                    <p className="whitespace-nowrap text-[12px] pr-[90px]">
                      Chuyển tên miền từ một nhà cung cấp khác về Nhà đăng ký
                      iNET
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/domain-whois.png"
                      alt=""
                    />
                    <p className="pr-[259px] text-blue-600">
                      Kiểm tra nhiều tên miền
                    </p>
                    <p className="text-[12px] pr-[150px]">
                      Kiểm tra (WHOIS) thông tin nhiều tên miền cùng lúc
                    </p>
                  </button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavTenMien;
