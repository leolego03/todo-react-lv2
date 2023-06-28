import { useDispatch } from 'react-redux';
import { doner } from '../redux/modules/todoinput';
import { cancler } from '../redux/modules/todoinput';
import { deleter } from '../redux/modules/todoinput';
import { Link } from 'react-router-dom';

function TodoItem({ ...item }) {
  // dispatch 가져오기
  const dispatch = useDispatch();

  // done handler 완료
  const doneHandler = (id) => {
    dispatch(doner(id))
  }

  // button handler 취소
  const cancleHandler =(id) => {
    dispatch(cancler(id))
  }

  // button handler 삭제
  const deleteHandler =(id) => {
    dispatch(deleter(id))
  }

  return (
    <>
      <div key={item.id}>
      <h3> {item.title}</h3>
      <p> {item.body}</p>
      <div>
        <Link to={`/view/${item.id}`}>상세보기</Link>
        <button onClick={ () => deleteHandler(item.id) }>삭제</button>
        { !item.done && <button onClick={ () => doneHandler(item.id) }>완료</button> }
        { item.done && <button onClick={ () => cancleHandler(item.id) }>취소</button> }
        </div>
      </div>
    </>
  )
}

export default TodoItem