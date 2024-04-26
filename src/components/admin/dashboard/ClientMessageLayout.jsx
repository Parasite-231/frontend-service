import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "antd";

const { Column } = Table;

const ClientMessageLayout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 5;
  const [pageData, setPageData] = useState([]);

  const data = [
    {
      key: "1",
      name: "John Doe",
      email: "john@example.com",
      message: "Hello there!",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "This is a test message.",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "This is a test message.",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      message: "This is a test message.",
    },
  
    
  ];

  useEffect(() => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageData = data.slice(startIndex, endIndex);
    setPageData(pageData);
  }, [pageNumber, data]);

  const handleViewMessage = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setPageNumber(pagination.current);
  };

  return (
    <>
      <Table
        dataSource={pageData}
        pagination={{ pageSize, current: pageNumber, total: data.length }}
        onChange={handleTableChange}
      >
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Message"
          dataIndex="message"
          key="message"
          render={(text, record) => (
            <Button
              type="link"
              onClick={() => handleViewMessage(record.message)}
            >
              View Message
            </Button>
          )}
        />
      </Table>
      <Modal
        title="Message"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <p>{modalMessage}</p>
      </Modal>
    </>
  );
};

export default ClientMessageLayout;
