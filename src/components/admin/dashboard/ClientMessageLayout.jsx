import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Spin } from "antd";

const { Column } = Table;

const ClientMessageLayout = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 5;
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

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
    // Add more data as needed
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second (simulating data fetching)
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

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
      <Spin spinning={loading} size="large">
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
      </Spin>
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
