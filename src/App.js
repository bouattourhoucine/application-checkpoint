import logo from './logo.svg';
import './App.css';
import image from './html-css-js.jpg';
import { Row } from 'react-bootstrap';

function App() {
  return (
  <>
  <div className='p' style={{border:"solid 10px black" ,Width:"500px",height:"800px" ,textAlign:"center"   }}>

 <h1  className="title red">Your name here</h1>

 

 <img width="320" height="240" src= {image}/>

 

 <img width="320" height="240"src="./x.png" />


 <video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>

</div>
</>
  );
}

export default App;
