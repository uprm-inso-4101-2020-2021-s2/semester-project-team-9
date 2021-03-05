import './App.css';
import { Row, Col, Menu } from 'antd';
import 'antd/dist/antd.css'



function App() {
  return (
    <div className="App">
      <h1>
        Select Subscription
      </h1>
      <br/><br/>
      <Row  type = "flex" gutter = {[32,16]}>
        <Col span={6} offset = {1} style = {{backgroundColor: '#FF0000', color: 'white', height: "211px"}}> <img src = "/images/Netflix_logo.png" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}} /></Col>
        <Col span={6} offset={2} style = {{backgroundColor: '#19E038', color: 'white'}}><img src = "/images/hulu.png" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}}/></Col>
        <Col span={6} offset ={2} style = {{backgroundColor: '#19BCE0', color: 'white'}}><img src = "/images/disneyplus.png" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}}/></Col>



      </Row>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <Row gutter = {[32,16]}>
        <Col span={6} offset = {1} style = {{backgroundColor: '#0D4FB2', color: 'white', height: "211px"}}><img src = "/images/Spotify.png" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}}/></Col>
        <Col span={6} offset={2} style = {{backgroundColor: '#0DA8B2', color: 'white'}}><img src = "/images/Prime_Video.jpg" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}}/></Col>
        <Col span={6} offset ={2} style = {{backgroundColor: '#FA19FF', color: 'white'}}><img src = "/images/HBO_Max.jpeg" style = {{width: "365px" , height: "211px", position: "absolute", left:"0"}}/></Col>



      </Row>

    </div>
  );
}

export default App;