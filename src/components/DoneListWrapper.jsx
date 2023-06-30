import { useDispatch, useSelector } from "react-redux";
import { cancler, deleter } from "../redux/modules/todoinput";
import Wrapperbox from "./Boxes/Wrapperbox";
import { Link } from "react-router-dom";



function DoneListWrapper() {
  const data = useSelector((state) => {
    return state.todoinput;
  });

  // dispatch 가져오기
  const dispatch = useDispatch();

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
      {data
        .filter((item) => item.done === true)
        .map((item) => {
          return (
            <Wrapperbox key={item.id}>
              <Link to={`/${item.id}`}><p>상세페이지</p></Link>
              <h3> {item.title}</h3>
              <p> {item.body}</p>
              <div>
                <button onClick={() => deleteHandler(item.id)}>삭제</button>
                <button onClick={() => cancleHandler(item.id)}>취소</button>
              </div>
            </Wrapperbox>
          );
        })}
    </>
  );
}

export default DoneListWrapper;
