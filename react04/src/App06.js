import { useEffect, useState } from "react";

export default function App06(props){

    console.log('app06 loading...');
    const [msg, setMsg] = useState("첫번째");
    const [msg2, setMsg2] = useState("두번째");

    useEffect(function(){
        // 3초에 한 번씩 계속 수행함
        setTimeout(()=>{
            setMsg(msg+1);
        },3000);
    },[msg, msg2]);

    const btnHandler = () => {
        setMsg('이벤트 발생');
    };

    const btnHandler2 = () => {
        // 새로운 객체라 계속 값이 바뀌는 것과 마찬가지
        setMsg2(new String('이벤트 발생'));
    };

    return(
        <div>
            <h1>{msg}-{msg2}</h1>
            <button onClick={btnHandler}>버튼</button>
            <button onClick={btnHandler2}>버튼</button>
        </div>
    );
}