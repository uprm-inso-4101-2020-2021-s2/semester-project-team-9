import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import Sports from "./Categories/Sports";
import Entertainment from "./Categories/Entertainment";
import apiData from "../././../Services/getUsers";

import useService from "../../hooks/useService";

const { TabPane } = Tabs;

function Select() {
  const [services, setServices] = useState();
  const { callService } = useService();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      callService(apiData.getServices())
        .then((response) => {
          setServices(response?.data ?? "");
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          return error;
        });
    }
  }, [isLoading]);
  console.log(services && services);

  console.log(services && JSON.parse(services[0].plans));
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
