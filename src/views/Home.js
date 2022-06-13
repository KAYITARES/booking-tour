import React from "react";
import Nav from "../component/navbar";
import gorilla from "../assets/images/gorilla.jpeg";
import lake from "../assets/images/lake.jpeg";
import beach from "../assets/images/beach.jpeg";
import mountain from "../assets/images/mountain.webp";
import "./Home.css";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import Footer from "../component/footer";
import HomaeLayout from "../component/HomeLayout";

const { Search } = Input;
const audio = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

const Home = () => {
  return (
    <>
      <div className="home-container">
        <HomaeLayout>
          <div className="home-content">
            <h1 className="heading-title">Rwanda Booking Tour</h1>
            <div className="carousel-img">
              <Carousel autoplay>
                <img src={gorilla} alt="gorilla image" />
                <img src={lake} alt="gorilla image" />
                <img src={beach} alt="gorilla image" />
                <img src={mountain} alt="gorilla image" />
              </Carousel>

              <Search
                placeholder="Search Tour"
                enterButton="Search"
                size="large"
                suffix={audio}
                onSearch={onSearch}
              />
              <h3 className="topTour">Top Tours</h3>
              <hr className="align"></hr>
            </div>
          </div>
        </HomaeLayout>
      </div>
    </>
  );
};
export default Home;
