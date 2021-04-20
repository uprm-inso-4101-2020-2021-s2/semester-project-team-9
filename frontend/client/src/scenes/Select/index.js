import React, { useState } from "react";
import { Tabs, Row, Col } from "antd";
import Dating from "./Categories/Dating";
import Education from "./Categories/Education";
import Entertainment from "./Categories/Entertainment";
import Gaming from "./Categories/Gaming";
import Sports from "./Categories/Sports";
const { TabPane } = Tabs;

function Select() {
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
          <Gaming />
        </TabPane>
        <TabPane tab="Sports" key="5">
          <Sports />
        </TabPane>
      </Tabs>
    </>
  );
}
export default Select;
