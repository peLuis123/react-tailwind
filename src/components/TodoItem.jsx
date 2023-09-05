import CrossIcon from "./icons/CrossIcon";
const TodoItem = ({todo}) => {
    // console.log(todo);

  return (
    <>
      <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
        <button className="inline-block rounded-full border-2 w-5 h-5 flex-none"></button>
        <p className="text-gray-600 grow">{todo.title}</p>
        <button className="flex-none">
          <CrossIcon />
        </button>
      </article>
    </>
  );
};
export default TodoItem;
