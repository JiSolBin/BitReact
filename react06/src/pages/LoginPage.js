import React, { useContext, useRef } from 'react'
import UserCtxt, { LOGIN } from '../modules/store';
import { useNavigate } from 'react-router-dom'

function LoginPage() {

  const navigate = useNavigate();
  const user = useContext(UserCtxt);
  
  const inputId = useRef();
  const inputPw = useRef();

  const loginHandler=(e)=>{
    e.preventDefault();
    // select * from ~
    user.dispatch({type:LOGIN, username:inputId.current.value});
    navigate(-1);
  };

  return (
    <>
      <h1>login page</h1>
      <form onSubmit={loginHandler}>
        <label> id:
          <input ref={inputId}/>
        </label>
        <label> pw:
          <input ref={inputPw}/>
        </label>
        <button type='submit'>login</button>
      </form>
    </>
  )
}

export default LoginPage