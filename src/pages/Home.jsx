import Form from "../components/Form";
import ListContainer from "../components/Boxes/ListContainer";
import WorkingListWrapper from "../components/WorkingListWrapper";
import DoneListWrapper from "../components/DoneListWrapper";
import Layoutbox from "../Layout/Layout";
import Header from "../Layout/Header";

function Home() {
  return (
    <>
      <Layoutbox>
        <Header/>
        <Form />
        <h2>Working⌛⌛⌛👩‍💻</h2>
        <ListContainer>
          <WorkingListWrapper />
        </ListContainer>
        <h2>Done!!🥇🥇🤜</h2>
        <ListContainer>
          <DoneListWrapper />
        </ListContainer>
      </Layoutbox>
    </>
  );
}

export default Home;
