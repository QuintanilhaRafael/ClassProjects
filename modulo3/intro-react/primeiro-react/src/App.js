import './App.css';
import foto from './img/rafa.jpg';

function App() {

  const clickHere = () => {
    alert('Working...')
  }

  return (
    <div className="App">
          <header>
      <h1>Labenu React Project</h1>
    </header>
    <img src={foto} />
    <span>This is my first ever React project!</span>
    <button onClick={clickHere}>Click Here!</button>
    </div>
  );
}

export default App;
