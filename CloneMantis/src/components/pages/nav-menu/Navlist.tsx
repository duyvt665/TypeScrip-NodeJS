import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

interface Service {
  text: string;
  imageUrl: string;
  alt: string;
}

const services: Service[] = [
  {
    text: "Tài khoản",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/acc-panel.svg",
    alt: "Tài khoản",
  },
  {
    text: "Khuyến mãi",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/hot-sale.svg",
    alt: "Khuyến mãi",
  },
  {
    text: "SSL",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/ssl.svg",
    alt: "SSL",
  },
  {
    text: "Quản lý tài khoản",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/domain-name.svg",
    alt: "Tên miền",
  },
  {
    text: "Hosting",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/hosting.svg",
    alt: "Hosting",
  },
  {
    text: "Cloud VPS",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/cloud-vps.svg",
    alt: "Cloud VPS",
  },
  {
    text: "Email",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/email.svg",
    alt: "Email",
  },
  {
    text: "Google Suite",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/google-suite.svg",
    alt: "Google Suite",
  },
  {
    text: "Email Marketing",
    imageUrl: "https://inet.vn/public/img/svg/menu-dich-vu/email-marketing.svg",
    alt: "Email Marketing",
  },
];

const NestedList: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const chunkArray = (arr: Service[], chunkSize: number) => {
    const chunkedArray: Service[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const handleItemClick = (text: string) => {
    if (text === "Tài khoản") {
      navigate("/informations");
    }
    if (text === "Quản lý tài khoản"){
      navigate("/allusers");
    }
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton
        className="!mt-[-6.9px] !text-gray-500"
        onClick={() => setOpen(!open)}
      >
        <ListItemText primary="Dịch vụ" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className="" component="div" disablePadding>
          <div className="block border-2 bg-white rounded-lg drop-shadow-xl brightness-100">
            {chunkArray(services, 3).map((group, index) => (
              <div className="flex gap-[20px]" key={index}>
                {group.map((service, serviceIndex) => (
                  <button
                    className=" rounded hover:bg-sky-200 w-[90px] pt-1"
                    key={serviceIndex}
                    onClick={() => handleItemClick(service.text)}
                  >
                    <img
                      className="!w-[36px] !h-[36px] ml-6"
                      src={service.imageUrl}
                      alt={service.alt}
                    />
                    <span className={serviceIndex === 2 ? "ml-1" : "ml-2"}>
                      {service.text}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </List>
      </Collapse>
    </List>
  );
};

export default NestedList;
