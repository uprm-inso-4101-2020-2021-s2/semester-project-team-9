import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, Input } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Education() {
  const [openKeys, setOpenKeys] = React.useState([
    ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"],
  ]);

  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };


  const cardGenerator = ({
    color = "",
    image = "",
    md = 8,
    value = 0,
    sub = "",
    height = "",
    title = "",
    price1 = 0,
    price2 = 0,
    price3 = 0,
    price4 = 0,
  }) => (
    <Col xs={24} md={md}>
      <Card
        hoverable
        style={{ backgroundColor: { color } }}
        cover={<img alt="card" src={image} height="332.05px" />}
      >
        <Card.Meta style={{ backgroundColor: { color } }} />

        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 530 }}
        >
          <SubMenu key={sub} title={title}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={radioStyle} value={1}>
              {price1}
              </Radio>
              <Radio style={radioStyle} value={2}>
                {price2}
              </Radio>
              <Radio style={radioStyle} value={3}>
                {price3}
              </Radio>
              <Radio style={radioStyle} value={4}>
                {price4}
              </Radio>
            </Radio.Group>
          </SubMenu>
        </Menu>
      </Card>
    </Col>
  );
  return (
    <div className="Select">
      <h1 className="Select-Header">Select Subscription</h1>
      <br />
      <br />
      <Row gutter={[32, 32]}>
        {cardGenerator({
          color: "#FF0000",
          image: "/images/Chegg_logo.png",
          sub: "sub1",
          height: "332.05px",
          value: value,
          title: "Chegg",
          price1: "$9.95",
          price2: "$9.99",
          price3: "$14.95",
          price4: "$19.95",
        })}
        {cardGenerator({
          color: "#19E038",
          image: "/images/coursera-logo.png",
          sub: "sub2",
          value: value,
          height: "332.05px",
          title: "Coursera",
          price1: "$33.25",
          price2: "$38.99",
          price3: "$88.99",
          price4: "$398.99",
        })}
        {cardGenerator({
          color: "#19BCE0",
          image: "/images/coursehero_logo.png",
          sub: "sub3",
          value: value,
          height: "332.05px",
          title: "Course Hero",
          price1: "$9.95",
          price2: "$19.95",
          price3: "$39.95",
          price4: "$119.40",
        })}

        {cardGenerator({
          color: "#0D4FB2",
          image: "/images/Courseacademy.jpeg",
          sub: "sub4",
          value: value,
          title: "Codeacademy",
          price1: "$0.00",
          price2: "$19.99",
          price3: "$39.99",
          price4: "$119.99",
        })}
        {cardGenerator({
          color: "#0DA8B2",
          image: "/images/Udacity_logo.png",
          sub: "sub5",
          value: value,
          title: "Udacity",
          price1: "$399.00",
          price2: "$1017.00",
          price3: "$1356.00",
          price4: "$1695.00",
        })}
      </Row>
    </div>
  );
}

export default Education;
