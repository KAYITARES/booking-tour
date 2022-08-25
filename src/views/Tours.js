import React, { useState, useEffect } from "react";
import { Card, Image, Space, Typography, Button, Drawer } from "antd";
import picture from "../assets/images/tours/1.jpeg";
import SingleTour from "../component/SingleTour";

// import allTours from "../assets/data/tours.json";
import TourServices from "../services/tourService";

const { Text, Title } = Typography;

const Tours = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedTour, setSelectedTour] = useState({});

  const [allTours,setAllTours]= useState([]);

  useEffect(() => {
    TourServices.getAllTours().then((res) => {setAllTours(res?.data)});
  }, []);
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
                <Image preview={true} src={tour?.pictures[0]} />
                <Title level={4} style={{ color: "#1976D1" }}>
                  {tour?.title.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {tour?.description}
                </Text>
                <Space>
                  <Text>Start Date: </Text>
                  <Text strong> {tour?.duration?.startAt.slice(0,10)}  End Date: </Text>{tour?.duration?.endAt.slice(0,10)} 
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
