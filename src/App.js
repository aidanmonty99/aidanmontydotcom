import my_picture from './img/Me in the Scottish highlands.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header className="App-header-text">
          Hi! My name is Aidan Monty, and I'm a developer with an eye for detail.
        </header>
        <img src={my_picture} className="My-picture" alt="My picture" />
      </div>
    </div>
  );
}

export default App;
