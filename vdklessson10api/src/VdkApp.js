import React, { useEffect, useState } from 'react'
import VdkCategoryList from './components/VdkCategoryList'

export default function VdkApp() {
  //ldl
  const [VdkCategories,setVdkCategories]=useState([]);
  const getCategories =async ()=>{
    const vdkcateResponse = await axios.get("VdkCategory");
    setVdkCategories(vdkcateResponse.data);
  }
  useEffect(()=>{
    getCategories();
  },[])

  return (
    <div className="container border my-3">
      <h1>Vu Duc Khoa-Call API</h1>
      <VdkCategoryList renderVdkCategories={VdkCategories}/>
    </div>
  )
}
