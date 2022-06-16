import { useState } from "react";

export default function App04(){

    // const obj = useState('입력하세요');
    // const msg = obj[0]; // 기본값 (입력하세요)
    // const setMsg = obj[1]; // setter
    const [msg, setMsg] = useState('');
    const [msg2, setMsg2] = useState('');
    const [chk, setChk] = useState('true');

    const inputId=(e)=>{
        setMsg(e.target.value);
    };

    const inputPw=(e)=>{
        setMsg2(e.target.value);
    };

    // const [obj, setObj] = useState({msg:'입력', msg2:'하세요'});

    // const inputId=(e)=>{
    //     // setObj({msg:e.target.value, msg2:obj.msg2});
    //     setObj({...obj, msg:e.target.value});
    // }

    // const inputPw=(e)=>{
    //     // setObj({msg:obj.msg, msg2:e.target.value});
    //     setObj({...obj, msg2:e.target.value});
    // }

    const inputHander=(e)=>{
        console.log(e.target.name, e.target.value);

        // chk
        setChk(!chk);
    }

    // form tag의 submit은 꼭 디폴트 기능 꺼줘야함 (페이지 이동)
    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(msg, msg2);
    }

    return (
        <>
        <h1>{'회원가입'}</h1>
        <form onSubmit={formSubmit}>
            <label>
                id :&nbsp;
                <input name="id" onChange={inputId} value={msg}/>
            </label>
            <label>
                pw :&nbsp;
                <input name="pw" onChange={inputPw} value={msg2}/>
            </label>
            <label>
                <input type="checkbox" onChange={inputHander} value={chk}/>
            </label>
            <div>
                <input type='submit' value='전달'/>
            </div>
        </form>
        </>
    );
}