import React, { useState } from "react";
import { Card, Image, Space, Typography, Button, Drawer } from "antd";
import picture from "../assets/images/tours/1.jpeg";
import SingleTour from "../component/SingleTour";

import allTours from "../assets/data/tours.json";

const { Text, Title } = Typography;

const Tours = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedTour, setSelectedTour] = useState({});
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          padding: "10px 100px",
          textAlign: "center",
        }}
      >
        <Title>Choose your Tour</Title>
        <Card>
          {allTours.map((tour) => (
            <Card.Grid className="tour-card-grid">
              <Space direction="vertical">
                <Image preview={true} src={tour.photo} />
                <Title level={4} style={{ color: "#1976D1" }}>
                  {tour.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {tour.description}
                </Text>
                <Space>
                  <Text>Due Date: </Text>
                  <Text strong> {tour.dueDate} 10h00 am</Text>
                </Space>
                <Button
                  onClick={() => {
                    setSelectedTour(tour);
                    setShowDrawer(true);
                  }}
                >
                  Book Now!
                </Button>
              </Space>
            </Card.Grid>
          ))}
        </Card>
      </div>
      <Drawer
        // title="Single Tour!"
        placement="right"
        onClose={() => {
          setShowDrawer(false);
        }}
        visible={showDrawer}
      >
        <SingleTour data={selectedTour} />
      </Drawer>
    </>
  );
};

export default Tours;
