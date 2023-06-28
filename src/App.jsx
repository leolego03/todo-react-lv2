import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { submit } from './redux/modules/todoinput';

function App() {


const data = useSelector((state)=>{
  return state.todoinput
})


// dispatch 가져오기
const dispatch =useDispatch();

const buttonHandler =()=>{
  dispatch(submit({
    title:title,
    body:body
  }));
  setTitle('');
  setBody('')
}


// input state 값
const [title,setTitle] = useState('')
const [body, setBody] = useState('')

const titleHandler = (e)=>{
  setTitle(e.target.value)
}

const bodyHandler = (e) =>{
  setBody(e.target.value)
}

  return (
    <>
    <div>
       제목 :<input type='text'  name='title' onChange={titleHandler} value={title}/>
      내용 :<input type='text' name='body' onChange={bodyHandler} value={body}/>
      <button onClick={buttonHandler}> 추가</button>
    </div>
    {
      data.map((item)=>{
        return (
          <div>
        <h2>{item.title}</h2>
         {item.body}
          </div>
        
        )
      })
    }
    </>
  

  )

}

export default App;
