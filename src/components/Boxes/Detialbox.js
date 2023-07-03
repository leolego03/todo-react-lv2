import { styled } from "styled-components"

export const Detailbox= styled.div`
display: flex;
flex-direction: column;
    width: 400px;
  margin: 50px auto 50px auto;
  border: 2px solid black;
  border-radius: 12px;
  padding: 15px;
  align-items:center;
`

export const Pid = styled.p`

`
export const Pbody = styled.p`
padding: 12px;
`

export const Htag = styled.h2`
padding: 20px;
`

export const Button = styled.button`
display: flex;
margin-left: auto;
justify-content: center;
align-items: center;
width: 60px;
height: 30px;
border-radius: 12px;
border : 2px solid lightgray;
cursor: pointer;
font-weight: 500;

&:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }

`


