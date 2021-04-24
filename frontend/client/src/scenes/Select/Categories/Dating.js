import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, Input } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Dating() {
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
          image: "/images/Elite-Singles.jpg",
          sub: "sub1",
          height: "332.05px",
          value: value,
          title: "Elite Singles Premium",
          price1: "$44.95",
          price2: "$57.95",
          price3: "$59.95",
          price4: "$173.85",
        })}
        {cardGenerator({
          color: "#19E038",
          image: "/images/The-League-Regular.jpg",
          sub: "sub2",
          value: value,
          height: "332.05px",
          title: "The League Regular",
          price1: "$0.00",
          price2: "$66.99",
          price3: "$98.99",
          price4: "$199.99",
        })}
        {cardGenerator({
          color: "#19BCE0",
          image: "/images/The-league-premium-logo.png",
          sub: "sub3",
          value: value,
          height: "332.05px",
          title: "The League Premium",
          price1: "$298.99",
          price2: "$398.99",
          price3: "$399.99",
          price4: "$999.99",
        })}

        {cardGenerator({
          color: "#0D4FB2",
          image: "/images/tinder-gold.png",
          sub: "sub4",
          value: value,
          title: "Tinder Gold",
          price1: "$0.00",
          price2: "$6.62",
          price3: "$8.83",
          price4: "$14.99",
        })}
        {cardGenerator({
          color: "#0DA8B2",
          image: "/images/tinder-premium-logo.png",
          sub: "sub5",
          value: value,
          title: "Tinder Premium",
          price1: "$0.00",
          price2: "$2.33",
          price3: "$3.00",
          price4: "$4.99",
        })}
        {cardGenerator({
          color: "#FA19FF",
          image: "/images/Farmer's-Only-logo.png",
          sub: "sub6",
          value: value,
          title: "Farmers Only Premium",
          price1: "$9.99",
          price2: "$13.99",
          price3: "$16.65",
          price4: "$27.95",
        })}
      </Row>
    </div>
  );
}

export default Dating;
