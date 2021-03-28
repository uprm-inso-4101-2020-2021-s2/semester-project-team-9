import './App.css';
import { Row, Col, Menu, Card } from 'antd';
import 'antd/dist/antd.css'

const cardGenerator = ({ color = "",  image = "", md = 8, value = 0}) => (
  <Col xs={24} md={md} offset={value}>
    <Card hoverable style={{backgroundColor: {color}}} cover={<img alt = "card" src = {image}/>}>
      <Card.Meta style={{backgroundColor: {color}}}
      />
    </Card>
  </Col>
);

function App() {
  return (
    <div className="Select">
      <h1>
        Select Subscription
      </h1>
      <br/><br/>
      <Row  gutter = {[32,32]}>
        {cardGenerator({color: '#FF0000', image: "/images/Netflix.png"})}
        {cardGenerator({color: '#19E038', image: "/images/hulu.png"})}
        {cardGenerator({color: '#19BCE0', image: "/images/spotify.png"})}    

        {cardGenerator({color: '#0D4FB2', image: "/images/primevideo.jpg"})}
        {cardGenerator({color: '#0DA8B2', image: "/images/HBO_Max.jpeg"})}
        {cardGenerator({color: '#FA19FF', image: "/images/disneyplus.png"})}         
        
        </Row>
    </div>
  );
}

export default App;
