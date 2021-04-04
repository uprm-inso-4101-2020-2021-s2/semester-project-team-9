import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, Input } from "antd";
import "antd/dist/antd.css";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Sports() {
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
    setValue(1);
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
  }) => (
    <Col xs={24} md={md}>
      <Card
        hoverable
        style={{ backgroundColor: { color } }}
        cover={<img alt="card" src={image} height={height} />}
      >
        <Card.Meta style={{ backgroundColor: { color } }} />

        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: 535 }}
        >
          <SubMenu key={sub} title={title}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio style={radioStyle} value={1}>
                5.99$
              </Radio>
              <Radio style={radioStyle} value={2}>
                24.99$
              </Radio>
              <Radio style={radioStyle} value={3}>
                39.99$
              </Radio>
              <Radio style={radioStyle} value={4}>
                119.99$
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
          image: "/images/ESPN+.jpg",
          sub: "sub1",
          height: "332.05px",
          value: value,
          title: "ESPN+",
        })}
        {cardGenerator({
          color: "#19E038",
          image: "/images/NBC_Sports_logo.png",
          sub: "sub2",
          value: value,
          height: "332.05px",
          title: "NBC Sports",
        })}
        {cardGenerator({
          color: "#19BCE0",
          image: "/images/NFL-Gamepass-Logo.png",
          sub: "sub3",
          value: value,
          height: "332.05px",
          title: "NFL Gamepass",
        })}

        {cardGenerator({
          color: "#0D4FB2",
          image: "/images/NBA-League-Pass.jpg",
          sub: "sub4",
          value: value,
          title: "NBA League Pass",
        })}
        {cardGenerator({
          color: "#0DA8B2",
          image: "/images/fubotv-logo.png",
          sub: "sub5",
          value: value,
          title: "Fubo TV",
        })}
        {cardGenerator({
          color: "#FA19FF",
          image: "/images/DAZN-Logo-0.png",
          sub: "sub6",
          value: value,
          title: "DAZN",
        })}
      </Row>
    </div>
  );
}

export default Sports;
