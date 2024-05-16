import React, { createContext, useContext, useState} from 'react';
import VdkUseContext1 from './VdkUseContext1';
export const ThemeContext = createContext();

export default function VdkUseContext() {
    
  const [theme, setTheme] = useState('red');

  const vdkHandleChange = ()=>{
setTheme(theme==='red'?'blue':'red');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className='alert'>
        <h2>Demo useContext</h2>
        <VdkUseContext1 />
        <button onClick={vdkHandleChange}>Change bgColor</button>
      </div>
    </ThemeContext.Provider>
  )
}