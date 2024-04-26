import { Divider, Spin, Table } from "antd";
import React, { useState, useEffect } from "react";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    name: "John Brown",
    email: "noman@iut-dhaka.edu",
    address: "New York No. 1 Lake Park",
  },
];

const UserListLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
  }, []);

  return (
    <>
      <div>
        <Divider />
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={data} />
        </Spin>
      </div>
    </>
  );
};

export default UserListLayout;
