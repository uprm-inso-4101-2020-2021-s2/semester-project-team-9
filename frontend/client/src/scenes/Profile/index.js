import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Descriptions, Badge } from "antd";
import getServices from "../../Services/getServices";
import useService from "../../hooks/useService";

function Profile(user) {
  const [services, setServices] = useState();
  const { callService } = useService();
  const [isLoading, setIsLoading] = useState(true);
  console.log(user.user);

  useEffect(() => {
    if (isLoading) {
      callService(getServices.getUserServices())
        .then((response) => {
          console.log(response.data);
          setServices(response?.data ?? "");
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          return error;
        });
    }
  }, [isLoading]);

  return (
    <>
      <Avatar size={128} icon={<UserOutlined />} />
      <br></br>
      <br></br>
      <Descriptions title="User Info" bordered>
        <Descriptions.Item label="First Name">
          {user.user && user.user.first_name}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {user.user && user.user.last_name}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {user.user && user.user.email}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge status="processing" text="Running" />
        </Descriptions.Item>
        <Descriptions.Item label="Total Monthly Amount">
          $200.00
        </Descriptions.Item>
        <Descriptions.Item label="Subscriptions">
          {services &&
            services.map((obj, index) => (
              <div key={index}>{obj.service_name}</div>
            ))}
        </Descriptions.Item>
      </Descriptions>
      ,
    </>
  );
}
export default Profile;
