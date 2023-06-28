import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { doner } from './redux/modules/todoinput';
import { cancler } from './redux/modules/todoinput';
import { deleter } from './redux/modules/todoinput';
import Form from './components/Form';

function App() {

const data = useSelector((state)=>{
  return state.todoinput
})
console.log(data)

// dispatch 가져오기
const dispatch =useDispatch();



// done handler 완료
const doneHandler = (id)=>{
  dispatch(doner(id))
}

// button handler 취소
const cancleHandler =(id)=>{
  dispatch(cancler(id))
}

// button handler 삭제
const deleteHandler =(id)=>{
  dispatch(deleter(id))
}

  return (
    <>
  <Form/>
    <div>
    <h2>Working~</h2>
    <div className='container-list'>
    <div className='wrapper'> 
    {
    data.filter((item)=> item.done === false).map((item)=>{
        return (<div key={item.id}>
          <h3> {item.title}</h3>
          <p> {item.body}</p>
          <div>
            <button onClick={()=>deleteHandler(item.id)}>삭제</button>
            <button onClick={()=>doneHandler(item.id)}>완료</button>
            </div>
          </div>)
      })
    }
    </div>

    </div>
    </div>
    <div>
    <h2>Done!!</h2>
    <div className='container-list'>
    <div className='wrapper'> 
    {
    data.filter((item)=> item.done === true).map((item)=>{
        return (<div key={item.id}>
          <h3> {item.title}</h3>
          <p> {item.body}</p>
          <div>
            <button onClick={()=>deleteHandler(item.id)}>삭제</button>
            <button onClick={()=>cancleHandler(item.id)}>취소</button>
            </div>
          </div>)
      })
    }
    </div>

    </div>
    </div>

    
    </>
  

  )

}

export default App;
