import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { UserAxios } from '../axios-instance/instance';
import { useNavigate } from 'react-router-dom';

function UserRoute({children}) {
  const [currentTime, setCurrentTime] = useState(new Date()/1000);
  const [Access, setAccess] = useState(localStorage.getItem("access"))
  const [Refresh, setRefresh] = useState(localStorage.getItem("refresh"))
  const navigate = useNavigate()
  const val = localStorage.getItem("access")
  console.log(currentTime);
  useEffect(()=>{
    console.log(Access);
    if(!Access){
      navigate('/login')
    }else
    if(jwtDecode(Access).exp<currentTime){
      let formData = {
        'refresh':Refresh,
      } 
      UserAxios.post('/login/refresh', formData).then((res)=>{
        console.log(res);
      }).catch((err)=>{
        if (err.response.status == 401){
          navigate('/login')
        }
        console.log(err);
      })
    }

  },[])

  return (children)
}

export default UserRoute