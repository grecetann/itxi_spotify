import React from 'react'

import Login  from '../../components/Login/Login';
import useLogin from '../../Hooks/useLogin'

 const LoginPage = () => {
    const{handleLogin}=useLogin();
    return (
        <Login handleLogin={handleLogin}/>
    )
}

export default LoginPage;