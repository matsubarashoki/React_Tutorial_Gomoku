import { useState } from "react";
import { UseDipatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const dispatch = UseDipatchTodos();

  const changeContent = (e) => setEditingContent(e.target.value);

  const toggleEditMode = () => {
    const newTodo = { ...todo,editing: !todo.editing };
    dispatch({ type: 'todo/update', todo: newTodo });
  };


  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      editing: !todo.editing,
      content: editingContent,
    };
    dispatch({type: 'todo/update', todo: newTodo });
  };

  const conplete = (todo) => {
    dispatch({ type: "todo/delete" , todo });
  }

  return (
    <div key={todo.id}>
      <button onClick={() => conplete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{display: "inline" }}>
        {todo.editing ? (
          <input type="text" value={editingContent} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggleEditMode}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};

export default Item;