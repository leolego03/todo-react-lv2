import { useState } from "react";
import { useDispatch } from "react-redux";
import { submit } from "../redux/modules/todoinput";
import { styled } from "styled-components";

const Inputbox = styled.form`
  background-color: #F5EFEA;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
  width: 97%;
`;

const Textbox = styled.input`
  width: 240px;
  border-color: black;
  border-radius: 12px;
  padding: 12px;
  background-color: white;
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  border-radius: 12px;
  background-color: #333333;
  width: 140px;
  color: white;
  font-weight: 700;

`;

function Form() {
  // dispatch 가져오기
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setBody(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault()
    dispatch(
      submit({
        title: title,
        body: body,
      })
    );
    setTitle("");
    setBody("");
  };

  return (
    <Inputbox  onSubmit={buttonHandler}>
     제목: <Textbox type="text" name="title" onChange={titleHandler} value={title} required />
      내용 :<Textbox type="text" name="body" onChange={bodyHandler} value={body} required/>
      <Button type="submit" > 추가</Button>
    </Inputbox>
  );
}

export default Form;
