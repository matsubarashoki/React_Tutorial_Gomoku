import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import Todo from './components/Todo';
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Game />
        </header>
        {/* <div>
          <Todo />
        </div> */}
      </div>
    </>
  );
}

export default App;
