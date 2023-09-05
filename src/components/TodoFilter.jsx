const TodoFilter = ({changeFilter}) => {
  return (
    <section className="container mx-auto mt-8 ">
      <div className="rounded-md bg-white gap-4  p-4 flex justify-center">
        <button onClick={()=>changeFilter('all')} className="text-blue-500 ">all</button>
        <button onClick={()=>changeFilter('active')} className="hover:text-blue-500 ">active</button>
        <button onClick={()=>changeFilter('completed')} className="hover:text-blue-500 ">Completed</button>
      </div>
    </section>
  );
};
export default TodoFilter;
