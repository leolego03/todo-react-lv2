import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const data = useSelector((state)=>{
    return state.todoinput
  })
  // console.log(data)

  return (
    <>
      <div>
        <h2>Working~</h2>
        <div className='container-list'> 
        {
          data.filter((item) => item.done === false).map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              done={item.done}
            />
          ))
        }
        </div>
      </div>

      <div>
        <h2>Done!!</h2>
        <div className='container-list'>
        {
          data.filter((item)=> item.done === true).map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              done={item.done}
            />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default TodoList