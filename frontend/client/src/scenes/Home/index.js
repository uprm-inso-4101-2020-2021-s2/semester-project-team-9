import React from "react";
import { Tabs } from "antd";
import Select from "../Select";
import Profile from "../Profile";
import Calendar from "../Calendar";
const { TabPane } = Tabs;

function Home() {
  return (
    <>
      <Tabs tabPosition="top" tabBarGutter={50} size="large">
        <TabPane tab="Home" key="1">
          <Calendar />
        </TabPane>
        <TabPane tab="Select" key="2">
          <Select />
        </TabPane>
        <TabPane tab="Profile" key="3">
          <Profile />
        </TabPane>{" "}
        {/* <TabPane tab="Other" key="3">
          Content of Tab 3
        </TabPane> */}
      </Tabs>
    </>
  );
}
export default Home;
