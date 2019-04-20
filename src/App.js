import './App.css';
import Carousel from "./carousel"
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

var datar=[
  {
    image:"https://s3-ap-southeast-1.amazonaws.com/grexter-images/buildings/29/1551361083.jpg",
    text:"Spacious, designer studio rooms and studio apartments available for rent near Manyata Tech Park"
  },
  {
    image:"https://s3-ap-southeast-1.amazonaws.com/grexter-images/buildings/29/1551361146.jpg",
    text:"Comfortable co-living spaces available for rent in Bellandur, behind Central Mall"
  },
  {
    image:"https://s3-ap-southeast-1.amazonaws.com/grexter-images/buildings/26/1550128217.jpg",
    text:"Spacious, well-designed studio rooms available for rent in BTM Layout. This place is close to Koramangala, Jayanagar and HSR Layout."
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
      <Carousel autoplay="4" datar={datar}/>
      </Container>
      </div>
    );
  }
}

export default App;
