// import { createContext, useState } from "react";
import { useState, createContext, useContext, useEffect } from "react";

var UserContext;
function App777({setMsg1}){

    const msg1 = useContext(UserContext);
    console.log('app777 loading...');

    const btnHandler = () => {
        setMsg1('ABCD');
    };

    return (
        <div>
            <h1>{msg1}</h1>
            <button onClick={btnHandler}>버튼</button>
            {/* 부모의 값을 바꾸는거라 app07, 77 모두 렌더링 */}
        </div>
    );
}

function App77({setMsg1}){

    console.log('app77 loading...');

    // 어디에서든지 바꿀 수 있음 (UserContext)
    useEffect(function(){
        setMsg1('ABCD');
    },[]);

    return (
        <div>
            <App777 setMsg1={setMsg1}/>
        </div>
    );
}

export default function App07(){

    // 자식에게 값을 주는 형태X context로 만들어서 공유
    UserContext = createContext();
    console.log('app07 loading...');
    const [msg1, setMsg1] = useState('abcd');
    return (
        <div>
            <UserContext.Provider value={msg1}>
                <App77 setMsg1={setMsg1}/>
            </UserContext.Provider>
        </div>
    );
}