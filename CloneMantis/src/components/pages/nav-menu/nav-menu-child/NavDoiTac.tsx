import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavDoiTac = () => {
  return (
    <>
      <NavigationMenu className="!w-[100px] ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!w-[95px] !h-[50px] !ml-[-15px] !bg-white">
              Đối tác
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[1000px]">
              <div className="block">
                <div className="flex gap-[400px] ">
                  <h2 className="font-bold">Dịch vụ tên miền</h2>
                  <h2 className="font-bold">Thông tin & tiện ích</h2>
                </div>

                <div className="flex gap-[20px]">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[200px] text-blue-600">Đăng ký tên miền</p>
                    <p className="text-[12px] pr-[6px]">
                      Đăng ký tên miền Việt Nam và Quốc Tế, tên miền Tiếng Việt
                    </p>
                  </button>

                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[268px] text-blue-600">Bảng giá</p>
                    <p className="text-[12px] pr-[30px]">
                      Bảng giá chi tiết các đuôi tên miền Việt Nam và Quốc Tế
                    </p>
                  </button>
                </div>

                <div className="flex gap-[20px]">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[200px] text-blue-600">Gia hạn tên miền</p>
                    <p className="text-[12px] pr-[48px]">
                      Đăng nhập để gia hạn các tên miền trong tài khoản
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[203px] text-blue-600">
                      Kiểm tra tên miền
                    </p>
                    <p className="text-[12px] pl-[28px]">
                      Kiểm tra (WHOIS) thông tin & trạng thái tên miền đã được
                      đăng ký
                    </p>
                  </button>
                </div>

                <div className="flex gap-[20px]">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[147px] text-blue-600">
                      Chuyển tên miền về INET
                    </p>
                    <p className="text-[12px] pl-[20px]">
                      Chuyển tên miền từ một nhà cung cấp khác về Nhà đăng ký
                      iNET
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <p className="pr-[159px] text-blue-600">
                      Kiểm tra nhiều tên miền
                    </p>
                    <p className="text-[12px] pr-[50px]">
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

export default NavDoiTac;
