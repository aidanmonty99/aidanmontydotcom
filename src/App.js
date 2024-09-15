import my_picture from './img/Me in the Scottish highlands.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header ease-in">
        <header className="App-header-text ease-in">
          Hi! My name is Aidan Monty, and I'm a developer with an eye for detail.
        </header>
        <img src={my_picture} className="My-picture ease-in" alt="My picture" />
      </div>
      {/* <hr /> */}


    </div>
  );
}

export default App;
