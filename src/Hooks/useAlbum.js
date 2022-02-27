import React from 'react'
import { useDispatch } from "react-redux";

import { fetchAlbums } from "../redux/actions/albumAction";
import Api from "../api/Api";

const useAlbum =(id)=> {
    const dispatch = useDispatch();
    const getAlbums = () => {
      Api.get(`/artists/${id}/albums`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
        .then((response) => {
          response.data && dispatch(fetchAlbums(response.data.items));
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  
    return { getAlbums };
  };
 
  
export default useAlbum