import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  // console.log(todo);

  return (
    <>
      <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
        {/* para dar una condicional a un elemento completo */}
        {!todo.completed ? (
          <button
            onClick={() => updateTodo(todo.id)}
            className="inline-block rounded-full border-2 w-5 h-5 flex-none"
          ></button>
        ) : (
          <button onClick={() => updateTodo(todo.id)} className="w-5 h-5 flex-none grid place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <CheckIcon className="" />
          </button>
        )}
        {/* <button className="inline-block rounded-full border-2 w-5 h-5 flex-none"></button> */}
        {/* <button className="w-5 h-5 flex-none grid place-items-center rounded-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <CheckIcon className="" />
        </button> */}
        {/* para dar una clase directamente al className */}
        <p className={`text-gray-600 grow ${todo.completed && "line-through"}`}>
          {todo.title}
        </p>
        <button onClick={() => removeTodo(todo.id)} className="flex-none">
          <CrossIcon />
        </button>
      </article>
    </>
  );
};
export default TodoItem;
