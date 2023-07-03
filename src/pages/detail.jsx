import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Detailbox, Htag, Pid, Pbody, Button } from "../components/Boxes/Detialbox";


function Detail() {
  const data = useSelector((state) => {
    return state.todoinput;
  });

  const params = useParams();
  const navigate = useNavigate();

  //data find

  const foundData = data.find((item) => {
    return String(item.id) === params.id;
  });

  return (
    <>
      <Detailbox>
      <Button onClick={() => { navigate("/") }}> 이전 </Button> 
        <Pid>id: {foundData.id}</Pid>
        <Htag>제목: {foundData.title}</Htag>
        <Pbody>내용: {foundData.body}</Pbody>
      </Detailbox>
    </>
  );
}

export default Detail;