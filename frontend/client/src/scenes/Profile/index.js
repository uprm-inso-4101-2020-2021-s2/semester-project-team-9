import React from "react";
import { Tabs } from "antd";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, Badge } from "antd";

function Profile(user) {
  console.log(user);
  return (
    <>
      <Avatar size={128} icon={<UserOutlined />} />
      <br></br>
      <br></br>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="Name">Jose del Valle</Descriptions.Item>
        <Descriptions.Item label="Phone Number">5555-555-555</Descriptions.Item>
        <Descriptions.Item label="Gender">Male</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Total Monthly Amount">
          $200.00
        </Descriptions.Item>
        <Descriptions.Item label="Subscriptions">
          Netflix
          <br />
          Hulu
          <br />
          Disney +
          <br />
          Amazon Prime
          <br />
          XBOX Gold Membership
          <br />
          Dollar Shave Club
          <br />
        </Descriptions.Item>
      </Descriptions>
      ,
    </>
  );
}
export default Profile;
