
import React from 'react'
import { useHistory } from 'react-router-dom';
import { getReturnedParamsFromSpotifyAuth } from '../utils';
import {LoginUrl} from '../api/LoginUrl';
const useLogin=() =>{
    const history = useHistory();
    React.useEffect(() => {
      if (window.location.hash) {
        const { access_token } = getReturnedParamsFromSpotifyAuth(window.location.hash);
        localStorage.clear();
        localStorage.setItem("accessToken", access_token);
        history.push("/search")
      }
    });
  
    const handleLogin = () => {
      // @ts-ignore
      window.location = LoginUrl;
    }
  
    return { handleLogin };
  
}

export default useLogin;