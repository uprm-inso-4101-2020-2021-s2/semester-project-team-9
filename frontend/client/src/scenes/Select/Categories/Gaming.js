import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, Input } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Gaming() {
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
          image: "/images/PS_plus_logo.png",
          sub: "sub1",
          height: "332.05px",
          value: value,
          title: "Playstation+",
          price1: "$4.99",
          price2: "$8.33",
          price3: "$9.99",
          price4: "$59.99",
        })}
        {cardGenerator({
          color: "#19E038",
          image: "/images/Xbox-Live-Gold.png",
          sub: "sub2",
          value: value,
          height: "332.05px",
          title: "XBOX Live Gold",
          price1: "$4.99",
          price2: "$8.33",
          price3: "$9.99",
          price4: "$59.99",
        })}
        {cardGenerator({
          color: "#19BCE0",
          image: "/images/Nintendo_Switch_Online_logo.png",
          sub: "sub3",
          value: value,
          height: "332.05px",
          title: "Nintendo Switch Online",
          price1: "$3.99",
          price2: "$7.99",
          price3: "$19.99",
          price4: "$34.99",
        })}

        {cardGenerator({
          color: "#0D4FB2",
          image: "/images/Xbox_Game_Pass_new_logo-colored_version.png",
          sub: "sub4",
          value: value,
          title: "XBOX Gamepass",
          price1: "$0.99",
          price2: "$4.99",
          price3: "$9.99",
          price4: "$14.99",
        })}
        {cardGenerator({
          color: "#0DA8B2",
          image: "/images/EA-Play-Logo.png",
          sub: "sub5",
          value: value,
          title: "EA Play",
          price1: "$2.49",
          price2: "$4.99",
          price3: "$8.33",
          price4: "$14.99",
        })}
        {cardGenerator({
          color: "#FA19FF",
          image: "/images/Origin.jpg",
          sub: "sub6",
          value: value,
          title: "Origin",
          price1: "$2.49",
          price2: "$4.99",
          price3: "$8.33",
          price4: "$14.99",
        })}
      </Row>
    </div>
  );
}

export default Gaming;
