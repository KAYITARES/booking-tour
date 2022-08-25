import React, { useState } from "react";
import "antd/dist/antd.css";
import Tourservice from "../services/tourService"
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Switch,
  Upload,
} from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

// const provinces = ["Kigali City", "Eastern", "South", "North", "Western"];
const locations = [
  { province: "Kigali City", districts: ["Gasabo", "Nyarugenge", "Kicukiro"] },
  { province: "Eastern", districts: ["Nyagatare", "Bugesera", "Kayonza"] },
  {
    province: "Western",
    districts: ["Rubavu", "Rutsiro", "Karongi", "Nyamasheke"],
  },
  { province: "North", districts: ["Musanze", "Gicumbi", "Burera", "Gakenke"] },
  {
    province: "South",
    districts: ["Muhanga", "Nyanza", "Ruhango", "Huye", "Nyaruguru"],
  },
];
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onFinish = async(values) => {
    const tripObj = {
      ...values,
      pictures: [values.picture],
      location: [locations[values.province].province, values.district],
    };
    console.log("Received values of form: ", values);

    console.log("Trip: ", tripObj);

    const res =  await Tourservice.createTour(tripObj);

    console.group("<<<<<<<<:",res)
  };

  return (
    <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
            message: "Please input your Trip Title",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input />
      </Form.Item>

      <Form.Item name="seats" label="Seats">
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Price">
        <Input />
      </Form.Item>

      <Form.Item
        name="province"
        label="Location: Province"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <Select
          placeholder="Please select a Province"
          onChange={(e) => {
            setSelectedIndex(e);
          }}
        >
          {locations.map((pro, index) => (
            <Option value={index}>{pro.province}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="district"
        label="Location: District"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your district!",
          },
        ]}
      >
        <Select placeholder="Please select a Province">
          {locations[selectedIndex].districts.map((pro) => (
            <Option value={pro}>{pro}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="picture" label="Picture">
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
