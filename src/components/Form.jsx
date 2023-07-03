import { useState, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { submit } from "../redux/modules/todoinput";

function Form() {
  // dispatch 가져오기
  const dispatch = useDispatch();
  
  const data = useSelector((state)=>{
    return state.todoinput
  })
  const lastId = data.length ? data[data.length - 1].id + 1 : 1;
  const nextId = useRef(lastId);

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const titleHandler = (e)=>{
    setTitle(e.target.value)
  }
  
  const bodyHandler = (e) =>{
    setBody(e.target.value)
  }
  
  const buttonHandler =()=>{
    if(title && body) {
      dispatch(submit({
        id: nextId.current,
        title: title,
        body: body,
        done: false
      }));
      setTitle('');
      setBody('');
      nextId.current += 1;
    }
  }

  return(
  <div className="Form-container">
    <label htmlFor="title">제목 </label>
    <input id="title" type='text'  name='title' onChange={titleHandler} value={title}/>
    <label htmlFor="body">내용 </label>
    <input id="body" type='text' name='body' onChange={bodyHandler} value={body}/>
    <button onClick={buttonHandler}> 추가</button>
  </div>
  )
}

export default Form