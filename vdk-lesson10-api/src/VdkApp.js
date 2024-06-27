
import './App.css';
import VdkListUser from './components/VdkListUser';
import axios from './api/vdkApi'
import { useEffect, useState } from 'react';
function VdkApp() {

  const[vdkListUser,setVdkListUser]=useState([]);

  const vdkGetAllusers = async ()=>{
    const vdkResponse = await axios.get("vdkUsers");
    console.log("Api Data:",vdkResponse.data);
    setVdkListUser(vdkResponse.data)
  }
  useEffect(()=>{
    vdkGetAllusers();
    console.log("State Data:",vdkListUser);
},[])
  return (
    <div className="container border my-3">
      <h1>lam viec voi mocapi</h1>
      <hr/>
      <VdkListUser renderVdkListUser={vdkListUser} />
    </div>
  );
}

export default VdkApp;
