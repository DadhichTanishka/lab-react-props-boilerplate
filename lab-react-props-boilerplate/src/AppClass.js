import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  render(){
    return (<div>
      <h2>Kalvium Gallary</h2>
      <div>{this.props.data.map((images)=>{
      return (<img src={images.img}></img>)
      })}
      </div>

      {/* <div><img src={imageData().map(img)}></img></div> */}
  </div>)
  }
  // code here
}
