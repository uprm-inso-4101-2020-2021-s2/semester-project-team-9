import React from 'react';
import './App.css';
import { Row, Col, Menu } from 'antd';
import 'antd/dist/antd.css'




function App() {
  return (
    <div className="App">
      <h1>
        Select Subscription
      </h1>
      <br /><br />
      <Row gutter={[32, 16]}>
        <Col span={6} offset={1} style={{ backgroundColor: 'blue', color: 'white', height: "211px" }}>b</Col>
        <Col span={6} offset={2} style={{ backgroundColor: 'blue', color: 'white' }}>b</Col>
        <Col span={6} offset={2} style={{ backgroundColor: 'blue', color: 'white' }}>b</Col>



      </Row>
      <br /><br />
      <br /><br />
      <br /><br />
      <Row gutter={[32, 16]}>
        <Col span={6} offset={1} style={{ backgroundColor: 'blue', color: 'white', height: "211px" }}>b</Col>
        <Col span={6} offset={2} style={{ backgroundColor: 'blue', color: 'white' }}>b</Col>
        <Col span={6} offset={2} style={{ backgroundColor: 'blue', color: 'white' }}>b</Col>



      </Row>

    </div>
  );
}

export default App;