import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoComputed from "./todoComputed";
import TodoFilter from "./TodoFilter";
import { useState } from "react";
const initialStateTodos = [
  {
    id: 1,
    title: "aprender javascript",
    completed: true,
  },
  {
    id: 2,
    title: "aprender html",
    completed: false,
  },
  {
    id: 3,
    title: "aprender React",
    completed: false,
  },
];
const Form = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      title: title,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <main className="container mx-auto px-4 mt-8 rounded-t-md">
        <TodoCreate addTodo={addTodo}/>
        <TodoList todos={todos} />
        <TodoComputed />
        <TodoFilter />
      </main>
    </>
  );
};
export default Form;