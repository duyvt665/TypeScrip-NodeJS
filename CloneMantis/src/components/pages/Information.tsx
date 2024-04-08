import React, { useState } from "react";
import { useQuery } from "react-query";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Popover } from "antd";

const { Meta } = Card;

const Information: React.FC = () => {
  const { data, isLoading, isError } = useQuery("userInfo", async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch("http://localhost:3000/authen/api/userInfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    return response.json();
  });

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching user info</p>;

  const user = data.user;

  return (
    <Card
      className="w-[300px] m-auto mt-[100px] border-2 bg-white rounded-lg drop-shadow-xl brightness-100"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <Popover
          content={<a onClick={hide}>Close</a>}
          title="Title"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <EllipsisOutlined key="ellipsis" />
        </Popover>,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title={`${user.firstname} ${user.lastname}`}
        description={`Email: ${user.mail}`}
        data-email={user.company}
      />
    </Card>
  );
};

export default Information;
