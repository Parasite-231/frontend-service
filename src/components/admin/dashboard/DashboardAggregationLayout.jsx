import React from "react";
import { Card, Col, Row, Statistic } from "antd";
import {
  DollarCircleOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const DashboardAggregationLayout = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card
        title="Total Sells"
        bordered={false}
        style={{ backgroundColor: "#f0f2f5" }}
      >
        <Statistic
          value={1000} // Sample value, replace with actual data
          prefix={<ShoppingOutlined />}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card
        title="Total Users"
        bordered={false}
        style={{ backgroundColor: "#e6f7ff" }}
      >
        <Statistic
          value={500} 
          prefix={<UserOutlined />}
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card
        title="Revenue Earns"
        bordered={false}
        style={{ backgroundColor: "#f6ffed" }}
      >
        <Statistic
          value={50000} 
          prefix={<DollarCircleOutlined />}
          precision={2}
        />
      </Card>
    </Col>
  </Row>
);

export default DashboardAggregationLayout;
