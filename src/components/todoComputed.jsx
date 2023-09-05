const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
  return (
    <section className="p-4  text-gray-400 flex justify-between bg-white rounded-b-md">
      <span> {computedItemsLeft} items left</span>
      <button onClick={clearCompleted}>clear completed</button>
    </section>
  );
};
export default TodoComputed;