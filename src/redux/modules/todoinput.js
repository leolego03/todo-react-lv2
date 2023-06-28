const SUBMIT ="SUBMIT";


// action creater
export const submit =(payload)=>{
    console.log(payload)
    return {
        type: SUBMIT,
        payload:payload,
    }
   
}

// 초기 상태값(state)
const initialState = [{
    title: "리덕스",
    body:"공부해보자"
}]

// 리듀서 : 함수
// input : state 와 action

const todoinput =(state = initialState , action)=>{
    switch (action.type){
        case SUBMIT:
            return [...state,{title: action.payload.title, body:action.payload.body}]
        default:
        return state;
    }
};

export default todoinput;