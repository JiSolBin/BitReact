import { useReducer } from "react";

let init=[<li>item1</li>];
function reducer(state, action){
    const cnt = state.length;
    switch(action.type){
        // case가 매칭될 때만 동작 함
        case 'ADD':
            return [...state, <li>{action.msg}{cnt+1}</li>]
        case 'DELETE':
            return state.filter(function(ele,idx){
                return cnt-1!=idx;
            });
        default:
            return state;
    }
}

export default function App08(){
    const [lis, dispatch] = useReducer(reducer, init);
    return ( 
        <>
            <button onClick={()=>{dispatch({type:'ADD', msg:'add'})}}>add</button>
            <button onClick={()=>{dispatch({type:'DELETE'})}}>del</button>
            <ul>
                {lis.map((ele, idx)=>ele)}
            </ul>
        </>
    );
}