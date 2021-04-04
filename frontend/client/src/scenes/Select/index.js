import React, { useState } from "react";
import { Tabs, Row, Col } from "antd";
import Sports from "./Categories/Sports";
import Entertainment from "./Categories/Entertainment";
const { TabPane } = Tabs;

function Select() {
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
