import { useState } from "react"
import { useTodos,UseDipatchTodos } from "../context/TodoContext"

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const todos = useTodos();
  const dispatch = UseDipatchTodos();

  const addTodo = (e) => {
    e.preventDefault();
    let MaxId = todos.map((todo) => todo.id);
    const newTodo = {
      id: Math.max.apply(null,MaxId),
      content: enteredTodo,
      editing: false
    };
    dispatch({type: 'todo/add', todo: newTodo});
    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;