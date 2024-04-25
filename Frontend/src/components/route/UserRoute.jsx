import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { UserAxios } from '../axios-instance/instance';

function UserRoute({children}) {
  const [currentTime, setCurrentTime] = useState(new Date()/1000);
  const [Access, setAccess] = useState(localStorage.getItem("access"))
  const [Refresh, setRefresh] = useState(localStorage.getItem("refresh"))
  const val = localStorage.getItem("access")
  console.log(jwtDecode(val));
  console.log(currentTime);
  useEffect(()=>{
    if(jwtDecode(Access).exp<currentTime){
      let formData = {
        'refresh':Refresh,
      } 
      UserAxios.post('/login/refresh', formData).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        if (err.response.status == 401){
          console.log('Token is expired');
        }
        console.log(err);
      })
    }

  },[])

  return (children)
}

export default UserRoute