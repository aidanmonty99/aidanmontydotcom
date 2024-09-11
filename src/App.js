import profile_pic from './img/Me in the Scottish highlands.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile_pic} className="App-logo" alt="logo" />
        <p>
          Welcome to my website! Come back soon to see more!
        </p>
      </header>
    </div>
  );
}

export default App;
