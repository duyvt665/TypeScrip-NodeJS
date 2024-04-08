import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavWordPress = () => {
  return (
    <>
      <NavigationMenu className="!w-[100px] !bg-blue-200   ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!w-[122px] !h-[50px] !bg-white ">
              WordPress
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[500px]  ">
              <div className="block">
                <div className="flex ">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/wordpress.png"
                      alt=""
                    />
                    <p className="pr-[327px] text-blue-600">Cloud Hosting</p>
                    <p className="text-[12px] pr-[50px] whitespace-nowrap">
                      Hosting chuyên dụng cho những website sử dụng nền tảng
                      WordPress
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/website-responsive.svg"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[230px] text-blue-600">
                      Thiết Kế Website WordPress
                    </p>
                    <p className=" whitespace-nowrap text-[12px] pr-[88px]">
                      Thiết kế website trọn gói theo yêu cầu trên nền tảng
                      WordPress
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/wordpress-webkit-plugin-icon-256x256.png"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[288px] text-blue-600">
                      iNET Webkit Plugin
                    </p>
                    <p className="whitespace-nowrap text-[12px] pr-[56px]">
                      Plugin tích hợp các công cụ cần thiết để vận hành website
                      WordPress
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

export default NavWordPress;
