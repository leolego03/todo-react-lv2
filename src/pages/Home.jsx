import Form from "../components/Form";
import ListContainer from "../components/Boxes/ListContainer";
import WorkingListWrapper from "../components/WorkingListWrapper";
import DoneListWrapper from "../components/DoneListWrapper";
import Layoutbox from "../Layout/Layout";

function Home() {
  return (
    <>
      <Layoutbox>
        <Form />
        <h2>Working~</h2>
        <ListContainer>
          <WorkingListWrapper />
        </ListContainer>
        <h2>Done!!</h2>
        <ListContainer>
          <DoneListWrapper />
        </ListContainer>
      </Layoutbox>
    </>
  );
}

export default Home;
