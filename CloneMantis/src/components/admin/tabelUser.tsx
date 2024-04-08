import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { GetRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import Highlighter from "react-highlight-words";
import { useQuery } from "react-query";

type InputRef = GetRef<typeof Input>;

interface DataType {
  key: string;
  firstname: string;
  lastname: string;
  company: string;
  mail: string;
}

type DataIndex = keyof DataType;

const TableUsers: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  //CALL API SHOW DATA
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery("users", async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(
      "http://localhost:3000/authen/api/getallusers",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div className="bg-red-500 !w-[1000px] text-white text-center">
        You can not access this page
      </div>
    );
  /////////////////////////////////////////

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "firstname",
      key: "firstname",
      width: "25%",
      ...getColumnSearchProps("firstname"),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      width: "25%",
      ...getColumnSearchProps("company"),
    },
    {
      title: "Mail",
      dataIndex: "mail",
      key: "Mail",
      ...getColumnSearchProps("mail"),
      sorter: (a, b) => a.mail.length - b.mail.length,
      sortDirections: ["descend", "ascend"],
      width: "25%",
    },
    {
      title: "Action",
      key: "action",
      width: "25%",
      render: (text, record) => (
        <Space size="middle">
          <Button
            className="!bg-blue-500 !text-white"
            onClick={() => console.log(record)}
          >
            Edit
          </Button>
          <Button
            className="!bg-red-500 !text-white"
            onClick={() => console.log(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table
      className="!basis-1/6"
      columns={columns}
      dataSource={users}
      size="small"
      pagination={{ pageSize: 4 }}
    />
  );
};

export default TableUsers;
