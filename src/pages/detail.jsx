import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Detailbox, Htag, Pid, Pbody } from "../components/Boxes/Detialbox";


function Detail() {
  const data = useSelector((state) => {
    return state.todoinput;
  });

  const params = useParams();

  //data find

  const foundData = data.find((item) => {
    return String(item.id) === params.id;
  });

  return (
    <>
      <Detailbox>
        <Pid> id: {foundData.id}</Pid>
        <Htag>제목: {foundData.title} </Htag>
        <Pbody>내용: {foundData.body} </Pbody>
      </Detailbox>
    </>
  );
}

export default Detail;
