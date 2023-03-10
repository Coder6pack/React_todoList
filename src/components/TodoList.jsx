import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todos);
  };

  const completeTodo = (id) => {
    let updateTodo = todos.map((todo) => {
      if (todo.id !== id) {
        todo.isComplete = !todo.isComplete;
        console.log(todo.isComplete);
      }
      return todo;
    });

    setTodos(updateTodo);
    console.log(updateTodo);
  };
  return (
    <div>
      <h1>What's the plans for to day ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} />
    </div>
  );
}

export default TodoList;
