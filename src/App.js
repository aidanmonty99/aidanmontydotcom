import matterhorn_pic from './img/Me by the Matterhorn.jpeg';
import uw_pic from './img/Uw-madison_pic.jpg';
import esker_pic from './img/esker_pic.jpg';
import coding_pic from './img/computer-program-coding-screen.jpg';
import spreadsheets_pic from './img/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data.jpg';
import north_carolina_pic from './img/Me and family in North Carolina.jpeg';
import './App.css';

function App() {
  return (
    <div className="App ease-in">
      <div className="section">
        <header className="section-text ease-in">
          Hi! My name is Aidan Monty, and I'm a TypeScript developer with over four years of experience. This is me on a recent trip to the Matterhorn in Switzerland.
        </header>
        <img src={matterhorn_pic} className="picture" alt="My picture" />
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
          After graduating, I've developed my professional career at Esker, Inc., where I started out as a Development Consultant in January 2022 doing
          project implementation and writing custom developments on our business automation software for our customers. I gained valuable insight working
          directly with our end users and translating their business needs into real technical solutions.
        </header>
        <img src={esker_pic} className="picture" alt="Esker, Inc" />
      </div>
      <hr />
      <div className="section">
        <div className="picture">
          <img src={coding_pic} alt="software testing" />
          <p><a href="https://www.magnific.com/free-photo/computer-program-coding-screen_18415585.htm">Image by rawpixel.com on Magnific</a></p>
        </div>
        <header className="section-text">
          Beginning in March 2025, I switched over to be a Software Developer in R&D, working on larger and more complex projects on our base web application
          for standard release to all customers. I work in the Cash Application module, helping to automate the process of matching invoices to payments. We mainly use
          TypeScript frontend and backend on top of a .NET architecture, with PostreSQL and ElasticSearch for database management.
        </header>
      </div>
      <hr />
      <div className="section">
        <header className="section-text">
          Some key projects I've worked on include building support for EDI 820 as a new remittance file format we can process, developing a plug-in to 
          Chat GPT to process unstructured data within inbound emails, and, most recently, working on upscaling the quantity of data we can process in general,
          going from an old limit of 10k lines per data file to closer to 150k.
        </header>
        <div className="picture">
          <img src={spreadsheets_pic} alt="Spreadsheets" />
          <p><a href="https://www.magnific.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_2861371.htm">Image by rawpixel.com on Magnific</a></p>
        </div>
      </div>
      <hr />
      <div className="section">
        <img className="picture" src={north_carolina_pic} alt="Me and my family in the Appalachian mountains in North Carolina" />
        <header className="section-text">
          In my free time, I enjoy working out, reading, and generally being outdoors. I also love traveling and trying new restaurants. Here's me on recent
          family trip to North Carolina.
        </header>
      </div>
      <footer style={{"margin-top": "10%"}}/>
    </div>
  );
}

export default App;
