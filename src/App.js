import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
