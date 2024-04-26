import {
  BarChartOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MessageOutlined,
  HistoryOutlined,
  FieldTimeOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import ChartComponent from "./ChartComponent"; // Renamed import
import ProfileLayout from "./ProfileLayout";
import SellHistoryLayout from "./SellHistoryLayout";
import UserListLayout from "./UserListLayout";
import ClientMessageLayout from "./ClientMessageLayout";
import DashboardAggregationLayout from "./DashboardAggregationLayout";
// Import other layout components here

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// Map menu item keys to their corresponding layout components
const layoutComponents = {
  1: <DashboardAggregationLayout />,
  2: <SellHistoryLayout />,
  // 3: <ProfileLayout />,
  4: <ChartComponent />, 
  5: <UserListLayout />,
  6: <ClientMessageLayout />
  
};

const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  // getItem("Profile", "3", <DesktopOutlined />),
  getItem("User List", "5", <UserOutlined />),
  getItem("Sell History", "2", <HistoryOutlined />),
  getItem("Client Message", "6", <MessageOutlined />),
  getItem("Data Analysis", "4", <FieldTimeOutlined />),
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item> */}
            <Breadcrumb.Item>
              {/* {selectedKey === "1"
                ? "Option 1"
                : selectedKey === "2"
                ? "Option 2"
                : ""} */}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {layoutComponents[selectedKey]}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Astarion ©{new Date().getFullYear()} Created by AborgCube
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
