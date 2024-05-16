import React from 'react'
import VdkUseState from './components/VdkUseState'
import VdkUseContext from './components/VdkUseContext'
import VdkUseEffect from './components/VdkUseEffect'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>vu duc khoa-hook</h1>
      <hr/>
      <VdkUseState/>
      <hr />
      <VdkUseEffect />
      <hr />
     <VdkUseContext />
    </div>
  )
}
