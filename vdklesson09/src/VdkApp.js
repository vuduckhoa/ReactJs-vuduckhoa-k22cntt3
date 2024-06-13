import React, { useEffect, useState } from 'react'
import'./App.css';
import axios from "axios"
import VdkStudenList from './components/VdkStudenList';
export default function VdkApp() {
  const[VdkStudenList,setVdkStudentList]=useState();
  const VdkGetStudent=async()=>{
    try{
      const response =await axios.get("https://666a6d537013419182cf3ae9.mockapi.io/api/vdkv1/vdkStudent");
      setVdkStudentList(response.data);
    }catch(error){
      console.error("Error fetching data:",error);
    }

  };
  useEffect(()=>{
    VdkGetStudent();
  },[]);
  return (
    <div className="container border mt-5 p-3">
      <h1>xu ly chuc nangcrud hook api</h1>
      <hr/>
      <VdkStudenList renderVdkStudenList={VdkGetStudent}/>
      </div>
  )
}
