const SUBMIT ="SUBMIT";
const DONE ="DONE";
const CANCLE ="CANCLE";
const DELETE ="DELETE";

// action creater
export const submit =(payload)=>{
  return {
    type: SUBMIT,
    payload: payload,
  }
}

export const doner =(id) =>{
  return{
    type :DONE,
    payload: id
  }
}

export const cancler =(id)=>{
  return {
    type : CANCLE,
    payload: id
  }
}

export const deleter =(id)=>{
  return {
    type: DELETE,
    payload: id
  }
}

// 초기 상태값(state)
const initialState = [
  { id: 1, title: "리덕스", body:"공부해보자", done:false },
  { id: 2, title: "오마이갓", body:"공부해보자", done:true },
];

// 리듀서 : 함수
// input : state 와 action

const todoinput =(state = initialState , action) =>  {
  switch (action.type) {
    case SUBMIT:
      return [...state, {id:Math.floor(Math.random()*100), title: action.payload.title, body:action.payload.body, done:false}]
    case DONE:
      return state.map((item)=>
        item.id === action.payload? {...item,done:true} : item
      )
    case CANCLE:
      return state.map((item)=>
        item.id === action.payload? {...item,done:false} : item
      );
    case DELETE:
      return state.filter((item)=> item.id !== action.payload)
    default:
      return state;
  }
};

export default todoinput;