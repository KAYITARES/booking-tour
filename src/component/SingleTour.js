import React from "react";
import { Card, Image, Space, Typography, Button, Drawer, Input } from "antd";

const { Text, Title } = Typography;

const SingleTour = ({ data }) => {
  return (
    <>
      <Space direction="vertical" style={{ textAlign: "center" }}>
        <Title level={4} style={{ color: "#1976D1" }}>
          {data.title.toUpperCase()}
        </Title>
        <Image preview={true} src={data.photo} />

        <Space>
          <Text>Prepared By: </Text>
          <Text strong> {data.prepareBy} </Text>
        </Space>
        <Text type="secondary" italic>
          {data.description}
        </Text>
        <Space>
          <Text>Due Date: </Text>
          <Text strong> {data.dueDate} 10h00 am</Text>
        </Space>
        <Card title="Applicant Information">
          <Space direction="vertical">
            <Input placeholder="Email" style={{ width: "100%" }} />
            <Input placeholder="Phone" style={{ width: "100%" }} />
            <Button
              style={{ width: "100%" }}
              onClick={() => {
                // setShowDrawer(true);
              }}
            >
              Send Application Now!
            </Button>
          </Space>
        </Card>
      </Space>
    </>
  );
};

export default SingleTour;