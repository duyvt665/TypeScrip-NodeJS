import NavTenMien from "./nav-menu-child/NavTenMien";
import NavHosting from "./nav-menu-child/NavHosting";
import NavWordPress from "./nav-menu-child/NavWordPress";
import NavEmail from "./nav-menu-child/NavEmail";
import NavCloudServer from "./nav-menu-child/NavCloudServer";
import NavWebsite from "./nav-menu-child/NavWebsite";
import NavSSL from "./nav-menu-child/NavSSL";
import NavDoiTac from "./nav-menu-child/NavDoiTac";

const NavlistSecond = () => {
  return (
    <>
      <div className="flex gap-2 ml-[200px]">
        {/* Tên miền */}
        <NavTenMien></NavTenMien>
        {/* Hosting */}
        <NavHosting></NavHosting>
        {/* WordPress  */}
        <NavWordPress></NavWordPress>
        {/* Email */}
        <NavEmail></NavEmail>
        {/* Cloud Server */}
        <NavCloudServer></NavCloudServer>
        {/* Website */}
        <NavWebsite></NavWebsite>
        {/* SSL */}
        <NavSSL></NavSSL>
        {/* Đối tác */}
        <NavDoiTac></NavDoiTac>
      </div>
    </>
  );
};

export default NavlistSecond;
