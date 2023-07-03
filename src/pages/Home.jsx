import Form from "../components/Form";
import Layoutbox from "../Layout/Layout";
import Header from "../Layout/Header";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <>
      <Layoutbox>
        <Header/>
        <Form />
        <TodoList />
      </Layoutbox>
    </>
  );
}

export default Home;
