import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import Sports from "./Categories/Sports";
import Entertainment from "./Categories/Entertainment";

import axios from "axios";

const { TabPane } = Tabs;

function Select() {
  const [services, setServices] = useState();
  const getData = () => {
    fetch("http://127.0.0.1:8080/get-services")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    getData();
  });
  console.log(services);
  return (
    <>
      <Tabs tabPosition="left" tabBarGutter={50} size="large">
        <TabPane tab="Sports" key="1">
          <Sports />
        </TabPane>
        <TabPane tab="Entertainment" key="2">
          <Entertainment />
        </TabPane>
        {/* <TabPane tab="Other" key="3">
          Content of Tab 3
        </TabPane> */}
      </Tabs>
    </>
  );
}
export default Select;
