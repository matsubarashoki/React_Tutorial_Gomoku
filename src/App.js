import "./App.css";
import Game from "./components/Game";
import Example2 from "./components/Example2";
import UseContextSample from "./components/UseContextSample";
import UseContextSample2 from "./components/UseContextSample2";
import Todo from "./components/Todo";
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Game />
        </header>
        <Example2 />
        <UseContextSample />
        <UseContextSample2 />
      </div>
      <Todo />
    </>
  );
}

export default App;
