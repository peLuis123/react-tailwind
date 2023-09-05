import { useState } from "react";

const TodoCreate = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    addTodo(title)
    setTitle("");
  };
  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="bg-white rounded-md overflow-hidden py-4 gap-4 px-4 flex items-center mt-8"
    >
      <span className="inline-block rounded-full border-2 w-5 h-5"></span>
      <input
        className="w-full text-gray-400 outline-none"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create a new todo..."
      ></input>
    </form>
  );
};
export default TodoCreate;
