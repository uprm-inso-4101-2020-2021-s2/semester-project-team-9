import React, { useState, useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import Dating from "./Categories/Dating";
import Education from "./Categories/Education";
import Entertainment from "./Categories/Entertainment";
import Gaming from "./Categories/Gaming";
import Sports from "./Categories/Sports";
import apiData from "../../Services/getServices";

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
        <TabPane tab="Dating" key="1">
          <Dating />
        </TabPane>
        <TabPane tab="Education" key="2">
          <Education />
        </TabPane>
        <TabPane tab="Entertainment" key="3">
          <Entertainment />
        </TabPane>
        <TabPane tab="Gaming" key="4">
          <Gaming services={services} />
        </TabPane>
        <TabPane tab="Sports" key="5">
          <Sports />
        </TabPane>
      </Tabs>
    </>
  );
}
export default Select;
