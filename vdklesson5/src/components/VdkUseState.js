import React, { useState } from 'react';

export default function VdkUseState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);

  const [list, setList] = useState([1, 5]);

  const vdkHandleList = () => {
    let num = Math.floor(Math.random() * 100);

    setList([...list, num]);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr />
      <h3>List: {list.toString()}</h3>
      <button onClick={vdkHandleList}>
        Thêm ngẫu nhiên
      </button>
    </div>
  );
}