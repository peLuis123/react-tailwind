import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  // console.log(todos);
  return (
    <div className="bg-white rounded-md mt-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
      {/* <TodoItem todos={todos} /> */}
    </div>
  );
};
export default TodoList;
