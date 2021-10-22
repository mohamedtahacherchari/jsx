import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App" style={{border:"solid 22px black",maxWidth:"100vw"}}>
    <h1 className="title red"> Muhammad Taha Cherchari</h1>
    <div style={{display : "flex" }} >
    <img  className ="imgs" src={imageInSrc}  alt ="Iphone"/>
    <img  className ="imgs" src="images/imageInPublic.jpg" alt="Oppo" />
    </div>
      <video className="imgs" width={320} height={240} controls>
        <source src="images/myVideo.mp4" type="video/mp4" alt="Phone" />
      </video>
    </div>
  );
}

export default App;
