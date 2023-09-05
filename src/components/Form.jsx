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
    completed: true,
  },
  {
    id: 3,
    title: "aprender React",
    completed: false,
  },
];
const Form = () => {
  const [todos, setTodos] = useState(initialStateTodos);
  const [filter, setFilter] = useState("all");
  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      completed: false,
      title: title,
    };
    setTodos([...todos, newTodo]);
  };
  const removeTodo = (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  const changeFilter = (filter) => setFilter(filter);


  const FilteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 mt-8 rounded-t-md">
        <TodoCreate addTodo={addTodo} />
        <TodoList
          todos={FilteredTodos()}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <TodoComputed
          clearCompleted={clearCompleted}
          computedItemsLeft={computedItemsLeft}
        />
        <TodoFilter changeFilter={changeFilter}/>
      </main>
    </>
  );
};
export default Form;
