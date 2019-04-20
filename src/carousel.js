import React, { Component } from 'react';
import { FaAngleDoubleRight,FaAngleDoubleLeft } from "react-icons/fa";
import './App.css'
//import posed from 'react-pose';
var i=0;

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

class Carousel extends Component {

  constructor()
  {
    super();
    this.state={image:"https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",text:"Example Text"}
    this.onPressLeft=this.onPressLeft.bind(this)
    this.onPressRight=this.onPressRight.bind(this)  
  }

  componentDidMount(){
    this.interval=setInterval(()=>{
        this.onPressRight()},parseInt(this.props.autoplay)*1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPressLeft(){
    console.log(i);
    if(i===0){i=this.props.datar.length-1}
    else{i=i-1;}
    this.setState(this.props.datar[i])
    animateCSS('img','slideInLeft')
  }

  onPressRight(){
    console.log(i);
    var x=this.props.datar.length-1;
    if(i===x){i=0;}
    else{i=i+1;}
    this.setState(this.props.datar[i])
    animateCSS('img','slideInRight')
  }

  render() {
    return (
      <div className="App">
        <button style={{margin:10,backgroundColor:'white',color:'black',border:0,fontSize:40}} onClick={this.onPressLeft.bind(this)}><FaAngleDoubleLeft/></button>
        <img className="animated" style={{margin:30,borderRadius:20,transitionDuration:4}} src={this.state.image} alt="house" width="700px" height="500px"></img>
        <button style={{margin:10,backgroundColor:'white',color:'black',border:0,fontSize:40}} onClick={this.onPressRight.bind(this)}><FaAngleDoubleRight/></button>    
        <h3 style={{margin:30}}>{this.state.text}</h3>
      </div>
    );
  }
}

export default Carousel;
