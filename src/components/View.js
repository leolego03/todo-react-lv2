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
    <>
      <div>{foundData.id}</div>
      <div>{foundData.title}</div>
      <div>{foundData.body}</div>
      <button onClick={ () => {navigate("/")} }>이전으로</button>
    </>
  )
}

export default View