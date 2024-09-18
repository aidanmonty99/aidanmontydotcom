import my_picture from './img/Me in the Scottish highlands.jpg';
import uw_pic from './img/Uw-madison_pic.jpg';
import esker_pic from './img/esker_pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App ease-in">
      <div className="section">
        <header className="section-text ease-in">
          Hi! My name is Aidan Monty, and I'm a developer with an eye for detail. This is me in the Scottish highlands.
        </header>
        <img src={my_picture} className="picture" alt="My picture" />
      </div>
      <hr />
      <div className="section">
        <img src={uw_pic} className="picture" alt="UW Madison" />
        <header className="section-text">
          I graduated from the University of Wisconsin-Madison in December 2021 with a BS in Computer Science. My education gave me a strong foundation
          in object-oriented programming and exposure to wide range of disciplines, from AI and machine learning to database management.
        </header>
      </div>
      <hr />
      <div className="section">
        <header className="section-text">
          Since graduating, I've furthered my development skills at Esker, Inc., where I've made my way from Associate Development Consultant to 
          Development Consultant. I've developed a strong foundation in Javascript to build both reactive user experiences on the frontend and stable
          data management on the backend. 
        </header>
        <img src={esker_pic} className="picture" alt="Esker, Inc" />
      </div>
    </div>
  );
}

export default App;
