import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const NavHosting = () => {
  return (
    <>
      <NavigationMenu className="!w-[100px] !bg-blue-200   ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="!w-[122px] !h-[50px] !bg-white ">
              Hosting
            </NavigationMenuTrigger>
            <NavigationMenuContent className="!w-[1000px]  ">
              <div className="block">
                <div className="flex ">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/cloud-hosting-v2.svg"
                      alt=""
                    />
                    <p className="pr-[327px] text-blue-600">Cloud Hosting</p>
                    <p className="text-[12px] pr-[130px]">
                      Hosting siêu nhanh với ổ cứng NVMe & Chip Xeon Gold
                    </p>
                  </button>

                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/reseller-hosting.png"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[344px] text-blue-600">
                      One Hosting
                    </p>
                    <p className="text-[12px] pr-[170px]">
                      Dịch vụ hosting quản lý bằng nền tảng OnePanel
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/rocket.png"
                      alt=""
                    />
                    <p className="pr-[325px] text-blue-600">Turbo Hosting</p>
                    <p className=" whitespace-nowrap text-[12px] pr-[158px]">
                      Hosting NVMe U.2 Storage + Chip Intel Xeon Gold
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/seo.png "
                      alt=""
                    />
                    <p className="pr-[340px] text-blue-600">SEO Hosting</p>
                    <p className="whitespace-nowrap text-[12px] pr-[75px]">
                      Giải pháp hosting chạy được nhiều website với địa chỉ IP
                      riêng biệt
                    </p>
                  </button>
                </div>

                <div className="flex">
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/linux.png"
                      alt=""
                    />
                    <p className="whitespace-nowrap pr-[333px] text-blue-600">
                      Web Hosting
                    </p>
                    <p className="whitespace-nowrap text-[12px] pr-[52px]">
                      Phù hợp với website sử dụng mã nguồn PHP như WordPress,
                      Joomla,...
                    </p>
                  </button>
                  <button className=" rounded hover:bg-sky-200 w-[500px] pt-1">
                    <img
                      className="float-left w-[24px] h-[24px] ml-[20px] mt-[7px]"
                      src="https://inet.vn/public/img/icons/system.png"
                      alt=""
                    />
                    <p className="pr-[300px] text-blue-600">Windows Hosting</p>
                    <p className="text-[12px] pr-[138px]">
                      Phù hợp với website sử dụng mã nguồn ASP/ASP.NET
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

export default NavHosting;
