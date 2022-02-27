import React from 'react';
import './Login.css';
const Login=({handleLogin})=> {
  return (
   <div className="wrap">
    <button onClick={() => handleLogin()}>
      <span>Login</span>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ float: "right" }} width="2em" height="2em" viewBox="0 0 24 24" className="css-55blph">
        <path fill="green" d="M1.5 12C1.5 6.2 6.201 1.5 12 1.5c5.8 0 10.5 4.701 10.5 10.5S17.8 22.5 12 22.5 1.5 17.798 1.5 12zm16.6 1.784a.818.818 0 00-.27-1.125c-3.24-1.992-7.981-2.552-11.794-1.395a.82.82 0 00.476 1.566c3.338-1.013 7.64-.51 10.462 1.225a.818.818 0 001.126-.27zm-2.185 3.077a.654.654 0 10.683-1.118c-2.767-1.691-6.198-2.085-10.198-1.17a.654.654 0 10.291 1.276c3.655-.835 6.759-.494 9.224 1.012zM6.012 9.593c3.231-.98 8.814-.796 12.199 1.214a.981.981 0 101.002-1.689C15.317 6.805 9.15 6.588 5.443 7.714a.982.982 0 00.57 1.88z"></path></svg>
    </button>
   </div>
  )
}

export default Login;