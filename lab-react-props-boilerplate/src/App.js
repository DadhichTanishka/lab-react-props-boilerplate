import { render } from '@testing-library/react';
import './App.css';


function App(props) {
  console.log(props)
return (
    <div>
        <h2>Kalvium Gallary</h2>
        <div>{props.data.map((images)=>{
        return (<img src={images.img}></img>)
        })}
        </div>

        {/* <div><img src={imageData().map(img)}></img></div> */}
    </div>
)
  } 

export default App;
