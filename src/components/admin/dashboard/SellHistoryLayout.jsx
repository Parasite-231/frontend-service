import { Divider, Spin, Table } from "antd";
import React, { useState } from "react";

const columns = [
  {
    title: "Seller Name",
    dataIndex: "seller",
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
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "1",
    seller: "Abir",
    email: "abir@gmail.com",
    address: "New York No. 1 Lake Park",
  },
];

const SellHistoryLayout = () => {
  const [loading, setLoading] = useState(true); // Loading state

  // Simulate data loading delay
  setTimeout(() => {
    setLoading(false);
  }, 1000); // 1 second delay

  return (
    <>
      <div>
        <Divider />
        <Spin spinning={loading} size="large">
          <Table columns={columns} dataSource={data} />
        </Spin>
      </div>
    </>
  );
};

export default SellHistoryLayout;
