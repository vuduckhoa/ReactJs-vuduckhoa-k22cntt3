import React from 'react'
import VDKListTasks from './component/VDKListTasks'
import VDKTaskAdd from './component/VDKTaskAdd'

export default function App() {
  // Trong component App
    const vdklistTasks = [
      { vdk_taskId:1,vdk_taskName:"Học lập trình frontend", vdk_level:"Small" },
      { vdk_taskId:2, vdk_taskName:"Học lập trình reactjs",vdk_level:"Medium"},
      { vdk_taskId:3, vdk_taskName:"Lập trình với Frontend - Reactjs",vdk_level:"High"},
      { vdk_taskId:4, vdk_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",vdk_level:"Small"},
]

  return (
    <div>
        <VDKListTasks tasks={this.state.vdklistTasks} />
        <VDKTaskAdd />
      </div>
  )
}
