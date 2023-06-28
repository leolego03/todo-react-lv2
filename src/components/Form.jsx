import { useState } from "react"
import { useDispatch,  } from 'react-redux';
import { submit } from "../redux/modules/todoinput";



function Form(){
    
// dispatch 가져오기
const dispatch =useDispatch();

    const [title,setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const titleHandler = (e)=>{
      setTitle(e.target.value)
    }
    
    const bodyHandler = (e) =>{
      setBody(e.target.value)
    }
    
    const buttonHandler =()=>{
        dispatch(submit({
          title:title,
          body:body
        }));
        setTitle('');
        setBody('')
      }

    return(
    <div>
    제목 :<input type='text'  name='title' onChange={titleHandler} value={title}/>
    내용 :<input type='text' name='body' onChange={bodyHandler} value={body}/>
    <button onClick={buttonHandler}> 추가</button>
    </div>
    

    )

}

export default Form