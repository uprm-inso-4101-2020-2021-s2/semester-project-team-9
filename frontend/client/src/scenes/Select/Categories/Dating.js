import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, message, Button } from "antd";
import "antd/dist/antd.css";
import useService from "../../../hooks/useService";

import getServices from "../../../Services/getServices";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Dating({ services, user }) {
  const [openKeys, setOpenKeys] = React.useState([
    ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"],
  ]);
  const [value, setValue] = useState("");
  console.log(user);
  const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px",
  };
  const { callService } = useService();
  const [isLoading, setIsLoading] = useState(true);
  const addData = (title, value) => {
    const values = {
      owner_id: "1",
      service_name: title,
      service_url: "www.pup.com",
      category: "dating",
      plans: value,
    };
    callService(getServices.addServices(values))
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
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
    name = "",
    url = "",
    color = "",
    image = "",
    md = 8,
    sub = "",
    height = "",
    title = "",
    price1 = 0,
    price2 = 0,
    price3 = 0,
    price4 = 0,
  }) => {
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return (
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
                <Radio style={radioStyle} value={`basic:${price1}`}>
                  {`basic:${price1}`}
                </Radio>
                <Radio style={radioStyle} value={`medium:${price2}`}>
                  {`medium:${price2}`}
                </Radio>
                <Radio style={radioStyle} value={`premium:${price1}`}>
                  {`premium:${price1}`}
                </Radio>
              </Radio.Group>
            </SubMenu>
            <Button
              style={{ color: "blue" }}
              onClick={() => addData(title, value)}
            >
              Submit
            </Button>
          </Menu>
        </Card>
      </Col>
    );
  };
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
