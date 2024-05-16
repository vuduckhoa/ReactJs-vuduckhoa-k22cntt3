import React, { useContext } from 'react'
import { ThemeContext } from './VdkUseContext2'

export default function VdkUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + ' m-3'}>
      <h2>VdkUseContext2</h2>
      <p>
        <b>2210900032</b>
        <b>Vu duc khoa</b>
        <i>k22cn3</i>
      </p>
    </div>
  )
}
