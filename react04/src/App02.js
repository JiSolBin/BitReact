function App22({obj}){
    const clickFunc=()=>{console.log('클릭')};
    return (
        // html이 아니기 때문에 history.back() 작동 안함
        // -> 그냥 onClick 속성으로 저 문자열을 준 것
        // button은 onClick 속성에 함수를 넘겨줌
        <>
            {/* <h2 onClick="history.back();">{obj.msg} {obj.msg2}</h2> */}
            {/* <button onClick={function(){console.log('클릭')}}>클릭</button> */}
            <button onClick={clickFunc}>클릭</button>
        </>
    );
}

function App222(){
    const clk02 = function(msg){
        console.log(msg);
    };
    const clk01 =()=>{
        clk02('환영함');
    };

    // 위와 같이 따로 함수를 빼는 것 제외
    // 매개변수 사용하고 싶을땐 익명함수, arrow function 사용해야 함
    // 아니면 바로 실행되어버림 (괄호 -> 실행하겠다)
    return(
        <div>
            <h1>파라미터 전달</h1>
            {/* this는 자기자신이 아님, 이벤트 객체(e)에 target 사용하면 됨 */}
            <button onClick={(e)=>console.log('환영', this, e, e.target)}>클릭</button>
        </div>
    );
}

export default function App02(){
    // return <h1>App02 page - {msg} {msg2}</h1>

    const msgs = {msg:"환영함", msg2:"정말"};
    return (
        <>
            <h1>환영메시지</h1>
            <App222 obj={msgs}/>
        </>
    );
}

// props로 받던걸 {msg}로 받을 수 있음
// function 내부에서는 지역변수처럼 쓸 수 있다