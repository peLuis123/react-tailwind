import Header from "./components/Header";
import Form from "./components/Form";
// import TodoFilter from "./components/TodoFilter";
const App = () => {
  return (
    <div className="min-h-screen  bg-gray-300 bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain">
      <Header />
      <Form />
      {/* <TodoFilter/> */}

      <section className="text-center">drag and drop</section>
    </div>
  );
};
export default App;
