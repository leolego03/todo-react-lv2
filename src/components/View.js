import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

function View() {
  const params = useParams();
  const navigate = useNavigate();

  const data = useSelector((state)=>{
    return state.todoinput
  })

  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  })

  // console.log("foundData", foundData);

  return (
    <div className='View-container'>
      <div className='View'>
        <h3>{foundData.title}</h3>
        <span>Todo id: {foundData.id}</span>
        <p>{foundData.body}</p>
        <button onClick={ () => {navigate("/")} }>이전으로</button>
      </div>
    </div>
  )
}

export default View