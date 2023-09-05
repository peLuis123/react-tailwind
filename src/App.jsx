import Header from "./components/Header";
import Formulario from "./components/formulario";
// import TodoFilter from "./components/TodoFilter";
const App = () => {
  return (
    <div className="min-h-screen  bg-gray-300 bg-[url('./assets/images/bg-desktop-light.jpg')] bg-no-repeat bg-contain">
      <Header />
      <Formulario />
      {/* <TodoFilter/> */}

      <section className="text-center">drag and drop</section>
    </div>
  );
};
export default App;
