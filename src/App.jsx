import CrossIcon from "./assets/icons/CrossIcon";
import MoonIcon from "./assets/icons/MoonIcon";
const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-bold tracking-[.5em]">
            TODO
          </h1>
          <button><MoonIcon/></button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 gap-4 px-4 flex items-center mt-8">
          <span className="inline-block rounded-full border-2 w-5 h-5"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          ></input>
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8 ">
        <div className="bg-white rounded-md ">
          <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">jog around the park 3s</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 border-b-gray-400 border-b px-4">
            <button className="inline-block rounded-full border-2 w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">jog around the park 3s</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 p-4 border-b-gray-400 border-b ">
            <button className="inline-block rounded-full border-2 w-5 h-5 flex-none"></button>
            <p className="text-gray-600 grow">jog around the park 3s</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
        </div>
        <section className="p-4  text-gray-400 flex justify-between">
          <span> 5 items left</span>
          <button>clear completed</button>
        </section>
      </main>
      <section className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white gap-4  p-4 flex justify-center">
          <button className="text-blue-500">all</button>
          <button className="hover:text-blue-500">active</button>
          <button className="hover:text-blue-500">Completed</button>
        </div>
      </section>
      <section className="text-center">drag and drop</section>
    </div>
  );
};
export default App;
