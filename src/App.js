import my_picture from './img/Me in the Scottish highlands.jpg';
import uw_pic from './img/Uw-madison_pic.jpg';
import esker_pic from './img/esker_pic.jpg';
import software_testing from './img/software_testing.jpg';
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
      <hr />
      <div className="section">
        <div className="picture">
          <img src={software_testing} alt="software testing" />
          <p><a href="https://www.freepik.com/free-vector/tiny-people-testing-quality-assurance-software-isolated-flat-vector-illustration-cartoon-character-fixing-bugs-hardware-device-application-test-it-service-concept_10613736.htm#query=software%20testing&position=2&from_view=keyword&track=ais_hybrid&uuid=d482d1b3-49d1-45ec-8376-fa07caeaf200">Image by pch.vector</a> on Freepik</p>
        </div>
        <header className="section-text">
          As a Development Consultant, I've had to work closely with our customers to understand their business needs and ensure a successful project
          implementation throughout the technical build, testing, and go-live phases. I worked with CompuNet, a medical supplies company, to build a
          unique e-commerce portal that their customers could use to order their products. We focused heavily on easy-to-use UI while advancing Esker
          capabilities to work with new third parties.
        </header>
      </div>
      <hr />
      <div className="section">
        <header className="section-text">
          In my free time, I enjoy working out, reading, and generally being outdoors. I also love traveling and trying new restaurants. I
          consider myself something of a foodie.
        </header>
        <img className="picture" src={software_testing} alt="software testing" />
      </div>
      <footer style={{"margin-top": "10%"}}/>
    </div>
  );
}

export default App;
