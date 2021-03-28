import React, { useState } from 'react';

import './App.css';
import { Row, Col, Menu, Card } from 'antd';
import 'antd/dist/antd.css'

const { SubMenu } = Menu;

const rootSubmenuKeys = ['sub1'];


function App() {
  const [openKeys, setOpenKeys] = React.useState([['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6']]);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const cardGenerator = ({ color = "",  image = "", md = 8, value = 0, sub = '', height = ''}) => (
    <Col xs={24} md={md} offset={value}>
      <Card hoverable style={{backgroundColor: {color}}} cover={<img alt = "card" src = {image} height = {height}/>}>
        <Card.Meta style={{backgroundColor: {color}}}/>
  
       
        <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 587 }}>
        <SubMenu key={sub} title="Navigation One">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        </Menu>
      </Card>
    </Col>
  );
  return (
    <div className="Select">
      <h1>
        Select Subscription
      </h1>
      <br/><br/>
      <Row  gutter = {[32,32]}>
        {cardGenerator({color: '#FF0000', image: "/images/Netflix.png", sub:'sub1', height: '332.05px'})}
        {cardGenerator({color: '#19E038', image: "/images/hulu.png", sub: 'sub2'})}
        {cardGenerator({color: '#19BCE0', image: "/images/spotify.png", sub: 'sub3'})}    

        {cardGenerator({color: '#0D4FB2', image: "/images/primevideo.jpg", sub: 'sub4'})}
        {cardGenerator({color: '#0DA8B2', image: "/images/HBO_Max.jpeg", sub: 'sub5'})}
        {cardGenerator({color: '#FA19FF', image: "/images/disneyplus.png", sub: 'sub6'})}         
        
        </Row>
    </div>
  );
}

export default App;
