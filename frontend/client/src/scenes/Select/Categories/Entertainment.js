import React, { useState } from "react";

import "./Select.css";
import { Row, Col, Menu, Card, Radio, message, Button } from "antd";
import "antd/dist/antd.css";
import useService from "../../../hooks/useService";

import getServices from "../../../Services/getServices";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];

function Entertainment({ services, user }) {
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
      category: "Entertainment",
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
          name: "Netflix",
          color: "#FF0000",
          image: "/images/Netflix.png",
          sub: "sub1",
          height: "332.05px",
          value: value,
          title: "Netflix",
          price1: "$8.99",
          price2: "$13.99",
          price3: "$17.99",
          price4: "$48.99",
        })}
        {cardGenerator({
          name: "Hulu",
          color: "#19E038",
          image: "/images/hulu.png",
          sub: "sub2",
          value: value,
          title: "Hulu",
          price1: "$5.99",
          price2: "$11.99",
          price3: "$64.99",
          price4: "$70.99",
        })}
        {cardGenerator({
          name: "Spotify",
          color: "#19BCE0",
          image: "/images/spotify.png",
          sub: "sub3",
          value: value,
          height: "332.05px",
          title: "Spotify",
          price1: "$4.99",
          price2: "$9.99",
          price3: "$12.99",
          price4: "$14.99",
        })}

        {cardGenerator({
          name: "Prime Video",
          color: "#0D4FB2",
          image: "/images/primevideo.jpg",
          sub: "sub4",
          value: value,
          title: "Prime Video",
          price1: "$5.99",
          price2: "$6.49",
          price3: "$8.99",
          price4: "$12.99",
        })}
        {cardGenerator({
          name: "HBO Max",
          color: "#0DA8B2",
          image: "/images/HBO_Max.jpeg",
          sub: "sub5",
          value: value,
          title: "HBO Max",
          price1: "$14.99",
          price2: "$44.97",
          price3: "$89.94",
          price4: "$179.88",
        })}
        {cardGenerator({
          name: "Disney+",
          color: "#FA19FF",
          image: "/images/disneyplus.png",
          sub: "sub6",
          value: value,
          title: "Disney+",
          price1: "$7.99",
          price2: "$13.99",
          price3: "$19.99",
          price4: "$72.99",
        })}
      </Row>
    </div>
  );
}

export default Entertainment;
