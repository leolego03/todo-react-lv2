import { useDispatch, useSelector } from "react-redux";
import { deleter, doner, cancler } from "../redux/modules/todoinput";
import Wrapperbox from "./Boxes/Wrapperbox";
import { Link } from "react-router-dom";
import { Buttonediv, Deletebutton, Donebutton, Cancelbutton } from "./Boxes/Button";
import ListContainer from "./Boxes/ListContainer";

function ListWrapper() {
  const data = useSelector((state) => {
    return state.todoinput;
  });

  // dispatch 가져오기
  const dispatch = useDispatch();

  // done handler 완료
  const doneHandler = (id) => {
    dispatch(doner(id));
  };

  // button handler 취소
  const cancleHandler = (id) => {
    dispatch(cancler(id));
  };

  // button handler 삭제
  const deleteHandler = (id) => {
    dispatch(deleter(id));
  };

  return (
    <>
      <h2>Working⌛⌛⌛👩‍💻</h2>
      <ListContainer>
        {data
          .filter((item) => item.done === false)
          .map((item) => {
            return (
              <Wrapperbox key={item.id}>
                <Link to={`/${item.id}`}><p>상세페이지</p></Link>
                  <h3> {item.title}</h3>
                  <p> {item.body}</p>
                  <Buttonediv>
                    <Deletebutton onClick={() => deleteHandler(item.id)}>삭제</Deletebutton>
                    <Donebutton onClick={() => doneHandler(item.id)}>완료</Donebutton>
                  </Buttonediv>
              </Wrapperbox>
            );
        })}
      </ListContainer>
      <h2>Done!!🥇🥇🤜</h2>
      <ListContainer>
        {data
          .filter((item) => item.done === true)
          .map((item) => {
            return (
              <Wrapperbox key={item.id}>
                <Link to={`/${item.id}`}><p>상세페이지</p></Link>
                <h3> {item.title}</h3>
                <p> {item.body}</p>
                <Buttonediv>
                  <Deletebutton onClick={() => deleteHandler(item.id)}>삭제</Deletebutton>
                  <Cancelbutton onClick={() => cancleHandler(item.id)}>취소</Cancelbutton>
                </Buttonediv>
              </Wrapperbox>
            );
        })}
      </ListContainer>
    </>
  )
}

export default ListWrapper